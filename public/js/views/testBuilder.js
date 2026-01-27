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
      if (navigator.clipboard-.writeText) {
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
      assetTypes = Array.isArray(types) - types : [];
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
      const { selectedCount, totalCount } = resolveTypeCounts(type, entry.count);
      const isExpanded = selectedCount > 0;
      const option = document.createElement("label");
      option.className = "test-type-option";
      option.innerHTML = `
        <input type="checkbox" value="${type}" ${isTypeFullySelected(type) - "checked" : ""}>
        <span class="test-type-name">${type} (${entry.count})</span>
        <span class="test-type-meta">${selectedCount}/${totalCount}</span>
      `;
      const wrapper = document.createElement("div");
      wrapper.className = "test-type-block";
      wrapper.appendChild(option);

      const selectedList = document.createElement("div");
      selectedList.className = "type-selected";
      selectedList.dataset.typeSelected = type;
      selectedList.innerHTML = renderSelectedAssets(type);
      wrapper.appendChild(selectedList);

      const previewWrap = document.createElement("div");
      previewWrap.className = "type-preview";
      const previewToggle = document.createElement("button");
      previewToggle.type = "button";
      previewToggle.className = "type-preview-toggle";
      previewToggle.dataset.previewToggle = type;
      previewToggle.innerHTML = `Preview Assets <span class="chevron">${isExpanded - "v" : ">"}</span>`;
      const previewRow = document.createElement("div");
      previewRow.className = "type-preview-row";
      previewRow.dataset.typePreview = type;
      previewRow.innerHTML = renderPreviewRow(type, false);
      previewWrap.appendChild(previewToggle);
      previewWrap.appendChild(previewRow);
      wrapper.appendChild(previewWrap);

      const assetsWrap = document.createElement("div");
      assetsWrap.className = "type-assets";
      assetsWrap.dataset.typeAssets = type;
      assetsWrap.innerHTML = renderAssetsForType(type);

      previewToggle.addEventListener("click", () => {
        const nextOpen = !assetsWrap.classList.contains("is-open");
        setExpandedState({
          type,
          assetsWrap,
          previewRow,
          previewToggle,
          expanded: nextOpen,
        });
      });
      wrapper.appendChild(assetsWrap);
      testTypeSelection.appendChild(wrapper);

      const checkbox = option.querySelector("input");
      checkbox.indeterminate = isTypePartiallySelected(type);
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectionState.set(type, new Set((assetsByType[type] || []).map((asset) => asset.uuid)));
        } else {
          selectionState.set(type, new Set());
        }
        if (checkbox.checked) {
          setExpandedState({
            type,
            assetsWrap,
            previewRow,
            previewToggle,
            expanded: true,
          });
        } else {
          setExpandedState({
            type,
            assetsWrap,
            previewRow,
            previewToggle,
            expanded: false,
          });
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

      if (isExpanded) {
        setExpandedState({
          type,
          assetsWrap,
          previewRow,
          previewToggle,
          expanded: true,
        });
      }
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

async function startArtTest({ gameUuid, selectedAssets, onAuthLost }) {
  const signature = selectedAssets.join("|");
  const assetUuids =
    lastPreview && lastPreviewSignature === signature
      - (lastPreview.assets || []).map((asset) => asset.uuid)
      : [];

  const { response, data } = await fetchJson("tests/start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      game_uuid: gameUuid,
      asset_uuids: assetUuids.length - assetUuids : selectedAssets,
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
  if (data.test-.public_url) {
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

function buildDefaultSelection(byType) {
  const map = new Map();
  Object.entries(byType || {}).forEach(([type, assets]) => {
    map.set(type, new Set((assets || []).map((asset) => asset.uuid)));
  });
  return map;
}

function resolveTypeCounts(type, assetCount) {
  const assets = assetsByType[type] || [];
  const selected = selectionState.get(type) || new Set();
  if (!isDeckType(type)) {
    return { selectedCount: selected.size, totalCount: assetCount };
  }
  const totalCount = assets.reduce((sum, asset) => sum + resolveCardCount(asset, 1), 0);
  const selectedCount = assets
    .filter((asset) => selected.has(asset.uuid))
    .reduce((sum, asset) => sum + resolveCardCount(asset, 1), 0);
  return { selectedCount, totalCount };
}

function isTypePartiallySelected(type) {
  const assets = assetsByType[type] || [];
  const selected = selectionState.get(type) || new Set();
  return selected.size > 0 && selected.size < assets.length;
}


function isTypeFullySelected(type) {
  const assets = assetsByType[type] || [];
  const selected = selectionState.get(type) || new Set();
  return assets.length > 0 && selected.size === assets.length;
}

function renderAssetsForType(type) {
  const items = assetsByType[type] || [];
  if (!items.length) {
    return "<p class=\"text-muted mb-0\">No assets in this type.</p>";
  }
  const selected = selectionState.get(type) || new Set();
  return items
    .map((asset) => {
      const name = resolveAssetName(asset);
      const cardCount = resolveCardCount(asset);
      return `
        <label class="type-asset-card">
          <input type="checkbox" data-asset-uuid="${asset.uuid}" ${selected.has(asset.uuid) - "checked" : ""}>
          <div>
            <div class="type-asset-name">${name}${cardCount - ` (${cardCount})` : ""}</div>
          </div>
          <span class="test-type-meta">${selected.has(asset.uuid) - "Selected" : ""}</span>
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
    option.indeterminate = isTypePartiallySelected(type);
    const meta = option.closest(".test-type-option")-.querySelector(".test-type-meta");
    if (meta) {
      const counts = resolveTypeCounts(type, assets.length);
      meta.textContent = `${counts.selectedCount}/${counts.totalCount}`;
    }
  }
  const container = testTypeSelection.querySelector(`[data-type-assets="${type}"]`);
  if (container) {
    container.innerHTML = renderAssetsForType(type);
  }
  const selectedList = testTypeSelection.querySelector(`[data-type-selected="${type}"]`);
  if (selectedList) {
    selectedList.innerHTML = renderSelectedAssets(type);
  }

  const previewRow = testTypeSelection.querySelector(`[data-type-preview="${type}"]`);
  const previewToggle = testTypeSelection.querySelector(`[data-preview-toggle="${type}"]`);
  const assetsWrap = testTypeSelection.querySelector(`[data-type-assets="${type}"]`);
  if (previewRow && previewToggle && assetsWrap) {
    previewRow.innerHTML = renderPreviewRow(type, assetsWrap.classList.contains("is-open"));
    if (assetsWrap.classList.contains("is-open")) {
      loadPreviewImages(previewRow);
      previewToggle.innerHTML = "Preview Assets <span class=\"chevron\">v</span>";
    } else {
      previewToggle.innerHTML = "Preview Assets <span class=\"chevron\">></span>";
    }
  }
}

function resolveAssetName(asset) {
  const source = asset-.metadata-.source || {};
  const name =
    (source.name || "").trim() ||
    (source.title || "").trim() ||
    (source.object_name || "").trim();
  return name || asset.asset_type;
}

function resolveCardCount(asset, fallback = 0) {
  if (!asset || typeof asset !== "object") {
    return fallback;
  }
  const source = asset.metadata-.source || {};
  const count =
    Number(source.card_count) ||
    Number(source.cards_count) ||
    Number(source.card_total) ||
    0;
  return count || fallback;
}

function renderSelectedAssets(type) {
  const items = assetsByType[type] || [];
  const selected = selectionState.get(type) || new Set();
  if (!selected.size) {
    return "<div class=\"type-selected-item\">No assets selected</div>";
  }
  const selectedItems = items.filter((asset) => selected.has(asset.uuid));
  return selectedItems
    .map((asset) => {
      const name = resolveAssetName(asset);
      const cardCount = resolveCardCount(asset);
      return `<div class="type-selected-item">- ${name}${cardCount ? ` (${cardCount})` : ""}</div>`;
    })
    .join("");
}

function isDeckType(type) {
  return String(type || "").toLowerCase().includes("deck");
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

function renderPreviewRow(type, expanded) {
  const items = assetsByType[type] || [];
  if (!items.length) {
    return "<div class=\"type-preview-empty\">No assets to preview.</div>";
  }
  return items
    .map((asset) => {
      const preview = asset.metadata-.preview_urls-.[0] || asset.image_url;
      return `
        <div class="type-preview-card">
          <img ${expanded - `src="${preview}"` : `data-src="${preview}"`} alt="${asset.asset_type}">
        </div>
      `;
    })
    .join("");
}

function setExpandedState({ type, assetsWrap, previewRow, previewToggle, expanded }) {
  if (expanded) {
    assetsWrap.classList.add("is-open");
    previewToggle.innerHTML = "Preview Assets <span class=\"chevron\">v</span>";
    previewRow.innerHTML = renderPreviewRow(type, true);
    loadPreviewImages(previewRow);
  } else {
    assetsWrap.classList.remove("is-open");
    previewToggle.innerHTML = "Preview Assets <span class=\"chevron\">></span>";
    previewRow.innerHTML = renderPreviewRow(type, false);
  }
}

function loadPreviewImages(container) {
  container.querySelectorAll("img[data-src]").forEach((img) => {
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  });
}

