import { fetchJson } from "../../api.js";
import { showToast } from "../../toast.js";
import {
  buildDefaultSelection,
  getSelectedAssets,
  resolveTypeCounts,
  isTypePartiallySelected,
  isTypeFullySelected,
} from "./state.js";
import { buildTypeRow } from "./ui.js";
import { setExpandedState, refreshTypeSelectionUI } from "./events.js";

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
let deckCardsByAssetUuid = {};
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
    const selectedAssets = getSelectedAssets(selectionState);
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
    const selectedAssets = getSelectedAssets(selectionState);
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
    setAssets: ({ game, assetTypes: types, assetsByType: byType, deckCardsByAssetUuid: deckMap }) => {
      activeGame = game;
      assetTypes = Array.isArray(types) ? types : [];
      assetsByType = byType || {};
      deckCardsByAssetUuid = deckMap || {};
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
      const { selectedCount, totalCount } = resolveTypeCounts({
        type,
        assetCount: entry.count,
        assetsByType,
        selectionState,
      });
      const isExpanded = selectedCount > 0;
      const isFullySelected = isTypeFullySelected({ type, assetsByType, selectionState });

      const { wrapper, option, previewToggle, previewRow, assetsWrap } = buildTypeRow({
        entry,
        assetsByType,
        deckCardsByAssetUuid,
        selectionState,
        selectedCount,
        totalCount,
        isExpanded,
        isFullySelected,
      });

      previewToggle.addEventListener("click", () => {
        const nextOpen = !assetsWrap.classList.contains("is-open");
        setExpandedState({
          type,
          assetsWrap,
          previewRow,
          previewToggle,
          expanded: nextOpen,
          assetsByType,
          deckCardsByAssetUuid,
        });
      });

      testTypeSelection.appendChild(wrapper);

      const checkbox = option.querySelector("input");
      checkbox.indeterminate = isTypePartiallySelected({ type, assetsByType, selectionState });
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectionState.set(type, new Set((assetsByType[type] || []).map((asset) => asset.uuid)));
        } else {
          selectionState.set(type, new Set());
        }
        setExpandedState({
          type,
          assetsWrap,
          previewRow,
          previewToggle,
          expanded: checkbox.checked,
          assetsByType,
          deckCardsByAssetUuid,
        });
        updateMetrics();
        refreshTypeSelectionUI({
          type,
          assetsByType,
          selectionState,
          testTypeSelection,
          deckCardsByAssetUuid,
        });
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
        refreshTypeSelectionUI({
          type,
          assetsByType,
          selectionState,
          testTypeSelection,
          deckCardsByAssetUuid,
        });
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
          assetsByType,
          deckCardsByAssetUuid,
        });
      }
    });
}

function updateMetrics() {
  const selected = getSelectedAssets(selectionState);
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
    <p class=\"mb-2\">${metaLine}</p>
    <p class=\"text-muted mb-0\">Open preview modal to view the randomized set.</p>
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

