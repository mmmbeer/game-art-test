import { getElements } from "./dom.js";
import { getBasePath, getTestUuidFromPath, showToast } from "./utils.js";
import { loadVoteHistory, addVoteToHistory } from "./storage.js";
import { createViewer } from "./viewer.js";
import { createRatings } from "./ratings.js";

const elements = getElements();
const testUuid = getTestUuidFromPath();
const storageKey = `tgc_tester_votes_${testUuid}`;

const state = {
  currentAsset: null,
  votedAssets: loadVoteHistory(storageKey),
  ratingState: {
    professionalism: 0,
    appeal: 0,
    understandability: 0,
  },
  zoomState: {
    scale: 1,
    mode: "fit",
    lastTouchDistance: null,
    hideTimer: null,
    isHovering: false,
  },
  viewState: {
    overlayEnabled: false,
    overlayUrl: "",
    backgroundMode: "dark",
    rotation: 0,
    driftEnabled: false,
    cropEnabled: false,
    driftAllowed: true,
    driftOffset: { x: 0, y: 0 },
  },
};

const viewer = createViewer({
  elements,
  state,
  getCurrentAsset: () => state.currentAsset,
  showToast,
});
const ratings = createRatings({ elements, state });

if (!testUuid) {
  elements.testTitle.textContent = "Invalid test link.";
  showToast("Invalid test link.", "error");
} else {
  ratings.bindRatingEvents();
  bindActionEvents();
  viewer.bindZoomEvents();
  viewer.bindViewerControls();
  viewer.updateBackgroundMode();
  viewer.updateControlStates();
  loadNextAsset();
}

function bindActionEvents() {
  elements.reloadButton.addEventListener("click", () => loadNextAsset());

  elements.ratingPanel.addEventListener("ratings:complete", () => submitVote());
  elements.ratingPanel.addEventListener("ratings:skip", () => skipAsset());
}

async function submitVote() {
  if (!state.currentAsset) {
    return;
  }
  ratings.setEnabled(false);
  const payload = {
    asset_uuid: state.currentAsset.uuid,
    professionalism: state.ratingState.professionalism,
    appeal: state.ratingState.appeal,
    understandability: state.ratingState.understandability,
    comment: elements.commentInput?.value.trim() || "",
  };

  try {
    const response = await fetch(`${getBasePath()}/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      showToast(data.error || "Unable to record vote.", "error");
      ratings.setEnabled(true);
      return;
    }
    state.votedAssets = addVoteToHistory({
      storageKey,
      votedAssets: state.votedAssets,
      assetUuid: state.currentAsset.uuid,
    });
    showToast("Vote recorded. Loading next asset...", "success");
    await loadNextAsset();
  } catch (error) {
    showToast("Network error. Try again.", "error");
    ratings.setEnabled(true);
  }
}

async function loadNextAsset() {
  setLoading(true);
  elements.completePanel.classList.add("hidden");

  try {
    const url = `${getBasePath()}/next`;
    const options =
      state.votedAssets.length > 0
        ? {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ exclude_asset_uuids: state.votedAssets }),
          }
        : {};
    const response = await fetch(url, options);
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      setLoading(false);
      showToast(data.error || "Unable to load the next asset.", "error");
      return;
    }

    if (data.done || !data.asset) {
      showCompletion(data);
      setLoading(false);
      return;
    }

    updateTestMeta(data);
    displayAsset(data.asset);
  } catch (error) {
    showToast("Network error loading asset.", "error");
  } finally {
    setLoading(false);
  }
}

async function skipAsset() {
  if (!state.currentAsset) {
    return;
  }
  ratings.setEnabled(false);
  showToast("Skipped. Loading next asset...", "success");
  await loadNextAsset();
  ratings.setEnabled(true);
}

function updateTestMeta(data) {
  if (data.test?.game_name) {
    const designer = data.test?.designer_name || "Designer unavailable";
    elements.testTitle.textContent = `ART TEST: ${data.test.game_name} (${designer})`;
  } else {
    elements.testTitle.textContent = "ART TEST: (Designer unavailable)";
  }
}

function displayAsset(asset) {
  state.currentAsset = asset;
  ratings.resetRatings();
  elements.assetName.textContent = resolveAssetName(asset);
  elements.assetType.textContent = asset.asset_type || "Art asset";
  elements.assetImage.classList.remove("loaded");
  viewer.updateOverlaySource(asset);
  viewer.updateDriftAvailability(asset);
  viewer.resetViewState({
    preserveOverlay: true,
    preserveBackground: true,
    preserveZoomMode: false,
  });
  elements.assetImage.src = asset.image_url || "";
  elements.assetImage.alt = asset.asset_type || "Art asset";
  elements.assetImage.onload = () => {
    elements.assetImage.classList.add("loaded");
    viewer.syncOverlaySize();
    viewer.applyZoomForMode({ showIndicator: false });
  };
  elements.assetImage.onerror = () => showToast("Unable to load image.", "error");
}

function setLoading(isLoading) {
  if (isLoading) {
    elements.assetLoading.classList.remove("hidden");
    ratings.setEnabled(false);
    if (elements.voteLoading) {
      elements.voteLoading.classList.remove("hidden");
    }
  } else {
    elements.assetLoading.classList.add("hidden");
    ratings.setEnabled(true);
    if (elements.voteLoading) {
      elements.voteLoading.classList.add("hidden");
    }
  }
}

function showCompletion(data) {
  state.currentAsset = null;
  elements.assetImage.src = "";
  if (elements.overlayImage) {
    elements.overlayImage.src = "";
    elements.overlayImage.classList.add("hidden");
  }
  elements.assetName.textContent = "No more assets";
  elements.assetType.textContent = "";
  updateTestMeta(data);
  elements.completePanel.classList.remove("hidden");
  ratings.setEnabled(false);
}

function resolveAssetName(asset) {
  const meta = asset?.metadata || {};
  return (
    meta?.source?.name ||
    meta?.name ||
    meta?.title ||
    asset?.asset_type ||
    "Art asset"
  );
}
