import { fetchJson } from "../api.js";
import { showToast } from "../toast.js";

const testBuilder = document.getElementById("testBuilder");
const testBuilderMetrics = document.getElementById("testBuilderMetrics");
const testTypeSelection = document.getElementById("testTypeSelection");
const previewTest = document.getElementById("previewTest");
const startTest = document.getElementById("startTest");
const testPreviewLoading = document.getElementById("testPreviewLoading");
const testPreview = document.getElementById("testPreview");
const testLinkPanel = document.getElementById("testLinkPanel");
const testLinkInput = document.getElementById("testLinkInput");
const copyTestLink = document.getElementById("copyTestLink");
const testPreviewModal = document.getElementById("testPreviewModal");
const testPreviewSummary = document.getElementById("testPreviewSummary");
const testPreviewScroll = document.getElementById("testPreviewScroll");

let activeGame = null;
let assetTypes = [];
let assetsByType = {};
let lastPreview = null;
let lastPreviewSignature = "";
let selectionState = new Map();

export function initTestBuilder({ onAuthLost }) {
  testTypeSelection.addEventListener("change", () => {
    updateMetrics();
    clearPreview();
  });

  previewTest.addEventListener("click", async () => {
    if (!activeGame) {
      return;
    }
    const selectedAssets = getSelectedAssets();
    if (!selectedAssets.length) {
      showToast("Select at least one asset to preview.", "warning");
      return;
    }
    await loadPreview({ gameUuid: activeGame.uuid, selectedAssets, onAuthLost });
  });

  startTest.addEventListener("click", async () => {
    if (!activeGame) {
      return;
    }
    const selectedAssets = getSelectedAssets();
    if (!selectedAssets.length) {
      showToast("Select at least one asset to start a test.", "warning");
      return;
    }
    await startArtTest({ gameUuid: activeGame.uuid, selectedAssets, onAuthLost });
  });

  copyTestLink.addEventListener("click", async () => {
    const value = testLinkInput.value.trim();
    if (!value) {
      return;
    }
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        testLinkInput.select();
        document.execCommand("copy");
      }
      showToast("Link copied to clipboard.", "success");
    } catch (error) {
      showToast("Unable to copy link.", "warning");
    }
  });

  return {
    setAssets: ({ game, assetTypes: types, assetsByType: byType }) => {
      activeGame = game;
      assetTypes = Array.isArray(types) ? types : [];
      assetsByType = byType || {};
      selectionState = buildDefaultSelection(assetsByType);
      renderTypeOptions();
      updateMetrics();
      clearPreview();
    },
  };
}

function renderTypeOptions() {
  testTypeSelection.innerHTML = "";
  if (!assetTypes.length) {
    testTypeSelection.innerHTML =
      "<p class=\"text-muted mb-0\">No asset types available for this game.</p>";
    return;
  }
  assetTypes
    .slice()
    .sort((a, b) => a.type.localeCompare(b.type))
    .forEach((entry) => {
      const type = entry.type;
      const count = entry.count;
      const selectedCount = selectionState.get(type)?.size || 0;
      const option = document.createElement("label");
      option.className = "test-type-option";
      option.innerHTML = `
        <input type="checkbox" value="${type}" ${selectedCount === count ? "checked" : ""}>
        <span class="test-type-name">${type}</span>
        <span class="test-type-meta">${selectedCount}/${count} selected${isDeckType(type) ? " + cards" : ""}</span>
      `;
      const wrapper = document.createElement("div");
      wrapper.className = "test-type-block";
      wrapper.appendChild(option);

      const assetsWrap = document.createElement("div");
      assetsWrap.className = "type-assets";
      assetsWrap.dataset.typeAssets = type;
      assetsWrap.innerHTML = renderAssetsForType(type);

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "btn btn-outline-light btn-sm";
      toggle.textContent = "Pick assets";
      toggle.addEventListener("click", () => {
        const isOpen = assetsWrap.classList.toggle("is-open");
        toggle.textContent = isOpen ? "Hide assets" : "Pick assets";
      });

      wrapper.appendChild(toggle);
      wrapper.appendChild(assetsWrap);
      testTypeSelection.appendChild(wrapper);

      const checkbox = option.querySelector("input");
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectionState.set(type, new Set((assetsByType[type] || []).map((asset) => asset.uuid)));
        } else {
          selectionState.set(type, new Set());
        }
        updateMetrics();
        refreshTypeSelectionUI(type);
        clearPreview();
      });

      assetsWrap.addEventListener("change", (event) => {
        const assetInput = event.target.closest("input[data-asset-uuid]");
        if (!assetInput) {
          return;
        }
        const uuid = assetInput.dataset.assetUuid;
        const set = selectionState.get(type) || new Set();
        if (assetInput.checked) {
          set.add(uuid);
        } else {
          set.delete(uuid);
        }
        selectionState.set(type, set);
        refreshTypeSelectionUI(type);
        updateMetrics();
        clearPreview();
      });
    });
}

function updateMetrics() {
  const selected = getSelectedAssets();
  if (!assetTypes.length) {
    testBuilderMetrics.textContent = "";
    return;
  }
  if (!selected.length) {
    testBuilderMetrics.textContent = "No assets selected";
    return;
  }
  testBuilderMetrics.textContent = `${selected.length} assets selected`;
}

function clearPreview() {
  lastPreview = null;
  lastPreviewSignature = "";
  testPreview.innerHTML =
    "<p class=\"text-muted mb-0\">Select asset types to preview a randomized 10-asset test.</p>";
  testLinkPanel.classList.add("d-none");
}

function getSelectedAssets() {
  const selected = [];
  selectionState.forEach((set) => set.forEach((uuid) => selected.push(uuid)));
  return selected;
}

async function loadPreview({ gameUuid, selectedAssets, onAuthLost }) {
  testPreviewLoading.classList.remove("d-none");
  testLinkPanel.classList.add("d-none");
  try {
    const { response, data } = await fetchJson("tests/preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        game_uuid: gameUuid,
        asset_uuids: selectedAssets,
      }),
    });
    if (response.status === 401) {
      showToast("Session expired. Please sign in again.", "warning");
      onAuthLost();
      return;
    }
    if (!response.ok) {
      showToast(data.error || "Unable to build preview.", "danger");
      return;
    }
    lastPreview = data;
    lastPreviewSignature = selectedAssets.join("|");
    renderPreview(data);
    openPreviewModal(data);
  } finally {
    testPreviewLoading.classList.add("d-none");
  }
}

function renderPreview(data) {
  const assets = Array.isArray(data.assets) ? data.assets : [];
  if (!assets.length) {
    testPreview.innerHTML = "<p class=\"text-muted mb-0\">No assets found for this selection.</p>";
    return;
  }
  const metaLine = `Previewing ${data.sample_size} of ${data.pool_count} eligible assets.`;
  testPreview.innerHTML = `
    <p class="mb-2">${metaLine}</p>
    <p class="text-muted mb-0">Open preview modal to view the randomized set.</p>
  `;
}

function renderPreviewCard(asset) {
  return `
    <div class="test-preview-card">
      <div class="test-preview-thumb">
        <img src="${asset.image_url}" alt="${asset.asset_type}">
      </div>
      <div class="test-preview-meta">
        <div>${asset.asset_type}</div>
        <div>DPI: ${asset.dpi || "n/a"}</div>
      </div>
    </div>
  `;
}

async function startArtTest({ gameUuid, selectedAssets, onAuthLost }) {
  const signature = selectedAssets.join("|");
  const assetUuids =
    lastPreview && lastPreviewSignature === signature
      ? (lastPreview.assets || []).map((asset) => asset.uuid)
      : [];

  const { response, data } = await fetchJson("tests/start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      game_uuid: gameUuid,
      asset_uuids: assetUuids.length ? assetUuids : selectedAssets,
    }),
  });

  if (response.status === 401) {
    showToast("Session expired. Please sign in again.", "warning");
    onAuthLost();
    return;
  }
  if (!response.ok) {
    showToast(data.error || "Unable to start test.", "danger");
    return;
  }
  if (data.test?.public_url) {
    testLinkInput.value = data.test.public_url;
    testLinkPanel.classList.remove("d-none");
  }
  if (Array.isArray(data.assets)) {
    renderPreview({
      assets: data.assets,
      pool_count: data.assets.length,
      sample_size: data.assets.length,
    });
  }
  showToast("Art test started.", "success");
}

function isDeckType(type) {
  return String(type || "").toLowerCase().includes("deck");
}

function buildDefaultSelection(byType) {
  const map = new Map();
  Object.entries(byType || {}).forEach(([type, assets]) => {
    map.set(type, new Set((assets || []).map((asset) => asset.uuid)));
  });
  return map;
}

function renderAssetsForType(type) {
  const items = assetsByType[type] || [];
  if (!items.length) {
    return "<p class=\"text-muted mb-0\">No assets in this type.</p>";
  }
  const selected = selectionState.get(type) || new Set();
  return items
    .map((asset) => {
      const preview = asset.metadata?.preview_urls?.[0] || asset.image_url;
      const name = resolveAssetName(asset);
      return `
        <label class="type-asset-card">
          <div class="type-asset-thumb">
            <img src="${preview}" alt="${asset.asset_type}">
          </div>
          <div>
            <div class="type-asset-name">${name}</div>
            <div class="test-type-meta">${asset.tgc_asset_id}</div>
          </div>
          <input type="checkbox" data-asset-uuid="${asset.uuid}" ${selected.has(asset.uuid) ? "checked" : ""}>
        </label>
      `;
    })
    .join("");
}

function refreshTypeSelectionUI(type) {
  const option = testTypeSelection.querySelector(`.test-type-option input[value="${type}"]`);
  const assets = assetsByType[type] || [];
  const selected = selectionState.get(type) || new Set();
  if (option) {
    option.checked = selected.size === assets.length && assets.length > 0;
    const meta = option.closest(".test-type-option")?.querySelector(".test-type-meta");
    if (meta) {
      meta.textContent = `${selected.size}/${assets.length} selected${isDeckType(type) ? " + cards" : ""}`;
    }
  }
  const container = testTypeSelection.querySelector(`[data-type-assets="${type}"]`);
  if (container) {
    container.innerHTML = renderAssetsForType(type);
  }
}

function resolveAssetName(asset) {
  const source = asset?.metadata?.source || {};
  const name =
    (source.name || "").trim() ||
    (source.title || "").trim() ||
    (source.object_name || "").trim();
  return name || asset.asset_type;
}

function openPreviewModal(data) {
  const assets = Array.isArray(data.assets) ? data.assets : [];
  testPreviewSummary.textContent = `Previewing ${data.sample_size} of ${data.pool_count} eligible assets.`;
  testPreviewScroll.innerHTML = assets
    .map(
      (asset) => `
      <div class="test-preview-scroll-card">
        <img src="${asset.image_url}" alt="${asset.asset_type}">
        <div class="test-preview-meta">${asset.asset_type}</div>
      </div>
    `
    )
    .join("");
  const modal = bootstrap.Modal.getOrCreateInstance(testPreviewModal);
  modal.show();
}
