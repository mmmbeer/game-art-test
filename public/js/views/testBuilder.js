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

let activeGame = null;
let assetTypes = [];
let assetsByType = {};
let lastPreview = null;
let lastPreviewSignature = "";

export function initTestBuilder({ onAuthLost }) {
  testTypeSelection.addEventListener("change", () => {
    updateMetrics();
    clearPreview();
  });

  previewTest.addEventListener("click", async () => {
    if (!activeGame) {
      return;
    }
    const selectedTypes = getSelectedTypes();
    if (!selectedTypes.length) {
      showToast("Select at least one asset type to preview.", "warning");
      return;
    }
    await loadPreview({ gameUuid: activeGame.uuid, selectedTypes, onAuthLost });
  });

  startTest.addEventListener("click", async () => {
    if (!activeGame) {
      return;
    }
    const selectedTypes = getSelectedTypes();
    if (!selectedTypes.length) {
      showToast("Select at least one asset type to start a test.", "warning");
      return;
    }
    await startArtTest({ gameUuid: activeGame.uuid, selectedTypes, onAuthLost });
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
      const option = document.createElement("label");
      option.className = "test-type-option";
      option.innerHTML = `
        <input type="checkbox" value="${type}">
        <span class="test-type-name">${type}</span>
        <span class="test-type-meta">${count} assets${isDeckType(type) ? " + cards" : ""}</span>
      `;
      testTypeSelection.appendChild(option);
    });
}

function updateMetrics() {
  const selected = getSelectedTypes();
  if (!assetTypes.length) {
    testBuilderMetrics.textContent = "";
    return;
  }
  if (!selected.length) {
    testBuilderMetrics.textContent = "No types selected";
    return;
  }
  testBuilderMetrics.textContent = `${selected.length} type${selected.length === 1 ? "" : "s"} selected`;
}

function clearPreview() {
  lastPreview = null;
  lastPreviewSignature = "";
  testPreview.innerHTML =
    "<p class=\"text-muted mb-0\">Select asset types to preview a randomized 10-asset test.</p>";
  testLinkPanel.classList.add("d-none");
}

function getSelectedTypes() {
  const selected = [];
  testTypeSelection.querySelectorAll("input[type=\"checkbox\"]").forEach((input) => {
    if (input.checked) {
      selected.push(input.value);
    }
  });
  return selected;
}

async function loadPreview({ gameUuid, selectedTypes, onAuthLost }) {
  testPreviewLoading.classList.remove("d-none");
  testLinkPanel.classList.add("d-none");
  try {
    const { response, data } = await fetchJson("tests/preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        game_uuid: gameUuid,
        asset_types: selectedTypes,
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
    lastPreviewSignature = selectedTypes.join("|");
    renderPreview(data);
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
    <div class="test-preview-grid">
      ${assets.map((asset) => renderPreviewCard(asset)).join("")}
    </div>
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

async function startArtTest({ gameUuid, selectedTypes, onAuthLost }) {
  const signature = selectedTypes.join("|");
  const assetUuids =
    lastPreview && lastPreviewSignature === signature
      ? (lastPreview.assets || []).map((asset) => asset.uuid)
      : [];

  const { response, data } = await fetchJson("tests/start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      game_uuid: gameUuid,
      asset_types: selectedTypes,
      asset_uuids: assetUuids,
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
