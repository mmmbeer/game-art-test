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
const testPreviewModal = document.getElementById("testPreviewModal");
const testPreviewSummary = document.getElementById("testPreviewSummary");
const testPreviewScroll = document.getElementById("testPreviewScroll");
const testStartModal = document.getElementById("testStartModal");
const testStartForm = document.getElementById("testStartForm");
const testStartTitle = document.getElementById("testStartTitle");
const testStartSampleSize = document.getElementById("testStartSampleSize");
const testStartMinVotes = document.getElementById("testStartMinVotes");
const testStartEndDate = document.getElementById("testStartEndDate");
const testStartConfirm = document.getElementById("testStartConfirm");
const testStartLinkPanel = document.getElementById("testStartLinkPanel");
const testStartLinkInput = document.getElementById("testStartLinkInput");
const testStartCopyLink = document.getElementById("testStartCopyLink");

let activeGame = null;
let assetTypes = [];
let assetsByType = {};
let deckCardsByAssetUuid = {};
let lastPreview = null;
let lastPreviewSignature = "";
let lastPreviewSampleSize = null;
let selectionState = new Map();
let testDefaults = { sample_size: 10, min_votes_per_asset: 10 };

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
    const preview = await loadPreview({ gameUuid: activeGame.uuid, selectedAssets, onAuthLost });
    if (preview) {
      openPreviewModal(preview);
    }
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
    openStartModal();
  });

  testStartForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!activeGame) {
      return;
    }
    const selectedAssets = getSelectedAssets(selectionState);
    if (!selectedAssets.length) {
      showToast("Select at least one asset to start a test.", "warning");
      return;
    }
    const sampleSize = Number.parseInt(testStartSampleSize?.value, 10);
    const minVotes = Number.parseInt(testStartMinVotes?.value, 10);
    const title = testStartTitle?.value?.trim() || "";
    const endDate = testStartEndDate?.value || "";
    testStartConfirm?.setAttribute("disabled", "disabled");
    try {
      await startArtTest({
        gameUuid: activeGame.uuid,
        selectedAssets,
        sampleSize,
        minVotes,
        title,
        endDate,
        onAuthLost,
      });
    } finally {
      testStartConfirm?.removeAttribute("disabled");
    }
  });

  testStartCopyLink?.addEventListener("click", async () => {
    const value = testStartLinkInput.value.trim();
    if (!value) {
      return;
    }
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        testStartLinkInput.select();
        document.execCommand("copy");
      }
      showToast("Link copied to clipboard.", "success");
    } catch (error) {
      showToast("Unable to copy link.", "warning");
    }
  });

  return {
    setAssets: ({
      game,
      assetTypes: types,
      assetsByType: byType,
      deckCardsByAssetUuid: deckMap,
      testDefaults: defaults,
    }) => {
      activeGame = game;
      assetTypes = Array.isArray(types) ? types : [];
      assetsByType = byType || {};
      deckCardsByAssetUuid = deckMap || {};
      testDefaults = { ...testDefaults, ...(defaults || {}) };
      selectionState = buildDefaultSelection(assetsByType);
      renderTypeOptions();
      updateMetrics();
      clearPreview();
    },
    reset: () => {
      activeGame = null;
      assetTypes = [];
      assetsByType = {};
      deckCardsByAssetUuid = {};
      selectionState = new Map();
      testDefaults = { sample_size: 10, min_votes_per_asset: 10 };
      testTypeSelection.innerHTML = "";
      testBuilderMetrics.textContent = "";
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
  lastPreviewSampleSize = null;
  const sampleSize = Number(testDefaults.sample_size || 10);
  testPreview.innerHTML =
    `<p class="text-muted mb-0">Select asset types to preview a randomized ${sampleSize}-asset test.</p>`;
}

async function loadPreview({ gameUuid, selectedAssets, onAuthLost }) {
  testPreviewLoading.classList.remove("d-none");
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
      return null;
    }
    lastPreview = data;
    lastPreviewSignature = selectedAssets.join("|");
    lastPreviewSampleSize = data.sample_size;
    renderPreview(data);
    return data;
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

function openPreviewModal(data) {
  if (!testPreviewModal || !testPreviewSummary || !testPreviewScroll) {
    return;
  }
  const assets = Array.isArray(data.assets) ? data.assets : [];
  testPreviewSummary.textContent = `Previewing ${data.sample_size} of ${data.pool_count} eligible assets.`;
  testPreviewScroll.innerHTML = assets
    .map((asset) => {
      const image = asset.image_url || "";
      return `
        <div class="test-preview-scroll-card">
          <img src="${image}" alt="${asset.asset_type || "Asset"}">
          <div class="test-preview-meta">${asset.asset_type || "Asset"}${asset.dpi ? ` • ${asset.dpi} DPI` : ""}</div>
        </div>
      `;
    })
    .join("");
  const modal = bootstrap.Modal.getOrCreateInstance(testPreviewModal);
  modal.show();
}

async function startArtTest({
  gameUuid,
  selectedAssets,
  sampleSize,
  minVotes,
  title,
  endDate,
  onAuthLost,
}) {
  const signature = selectedAssets.join("|");
  const assetUuids =
    lastPreview &&
    lastPreviewSignature === signature &&
    Number(sampleSize) === Number(lastPreviewSampleSize)
      ? (lastPreview.assets || []).map((asset) => asset.uuid)
      : [];

  let response;
  let data;
  try {
    ({ response, data } = await fetchJson("tests/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        game_uuid: gameUuid,
        asset_uuids: assetUuids.length ? assetUuids : selectedAssets,
        sample_size: sampleSize,
        min_votes_per_asset: minVotes,
        title,
        end_date: endDate,
      }),
    }));
  } catch (error) {
    showToast("Network error starting test.", "danger");
    return;
  }

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
    testStartLinkInput.value = data.test.public_url;
    testStartLinkPanel.classList.remove("d-none");
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

function openStartModal() {
  if (!testStartModal) {
    return;
  }
  if (testStartSampleSize) {
    testStartSampleSize.value = String(testDefaults.sample_size || 10);
  }
  if (testStartMinVotes) {
    testStartMinVotes.value = String(testDefaults.min_votes_per_asset || 10);
  }
  if (testStartTitle) {
    testStartTitle.value = "";
  }
  if (testStartEndDate) {
    testStartEndDate.value = "";
  }
  if (testStartLinkPanel) {
    testStartLinkPanel.classList.add("d-none");
  }
  if (testStartLinkInput) {
    testStartLinkInput.value = "";
  }
  const modal = bootstrap.Modal.getOrCreateInstance(testStartModal);
  modal.show();
}

