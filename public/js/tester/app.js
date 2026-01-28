const testTitle = document.getElementById("testTitle");
const assetName = document.getElementById("assetName");
const assetType = document.getElementById("assetType");
const assetImage = document.getElementById("assetImage");
const assetFrame = document.getElementById("assetFrame");
const assetLoading = document.getElementById("assetLoading");
const ratingPanel = document.getElementById("ratingPanel");
const submitVote = document.getElementById("submitVote");
const commentInput = document.getElementById("commentInput");
const commentHint = document.getElementById("commentHint");
const remainingAssets = document.getElementById("remainingAssets");
const minVotes = document.getElementById("minVotes");
const sessionVotes = document.getElementById("sessionVotes");
const completePanel = document.getElementById("completePanel");
const reloadButton = document.getElementById("reloadButton");

const ratingState = {
  professionalism: 0,
  appeal: 0,
  understandability: 0,
};

const testUuid = getTestUuidFromPath();
const storageKey = `tgc_tester_votes_${testUuid}`;
let currentAsset = null;
let votedAssets = loadVoteHistory();
const zoomState = {
  scale: 1,
  lastTouchDistance: null,
};

if (!testUuid) {
  testTitle.textContent = "Invalid test link.";
  showToast("Invalid test link.", "error");
} else {
  bindRatingEvents();
  bindActionEvents();
  bindZoomEvents();
  loadNextAsset();
}

function bindRatingEvents() {
  ratingPanel.addEventListener("click", (event) => {
    const button = event.target.closest(".star-button");
    if (!button) {
      return;
    }
    const group = event.target.closest(".rating-row");
    const metric = group?.dataset.metric;
    const value = Number.parseInt(button.dataset.value || "0", 10);
    if (!metric || !value) {
      return;
    }
    ratingState[metric] = value;
    updateRatingUI(group, value);
    updateSubmitState();
  });

  commentInput.addEventListener("input", () => {
    const trimmed = commentInput.value.slice(0, 500);
    if (trimmed !== commentInput.value) {
      commentInput.value = trimmed;
    }
    commentHint.textContent = `${commentInput.value.length} / 500`;
  });
}

function bindActionEvents() {
  submitVote.addEventListener("click", async () => {
    if (!currentAsset || submitVote.disabled) {
      return;
    }
    submitVote.disabled = true;
    const payload = {
      asset_uuid: currentAsset.uuid,
      professionalism: ratingState.professionalism,
      appeal: ratingState.appeal,
      understandability: ratingState.understandability,
      comment: commentInput.value.trim(),
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
        submitVote.disabled = false;
        return;
      }
      addVoteToHistory(currentAsset.uuid);
      sessionVotes.textContent = votedAssets.length.toString();
      showToast("Vote recorded. Loading next asset...", "success");
      await loadNextAsset();
    } catch (error) {
      showToast("Network error. Try again.", "error");
      submitVote.disabled = false;
    }
  });

  reloadButton.addEventListener("click", () => loadNextAsset());
}

async function loadNextAsset() {
  setLoading(true);
  completePanel.classList.add("hidden");

  try {
    const url = `${getBasePath()}/next`;
    const options =
      votedAssets.length > 0
        ? {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ exclude_asset_uuids: votedAssets }),
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

function updateTestMeta(data) {
  if (data.test?.game_name) {
    const designer = data.test?.designer_name || "Designer unavailable";
    testTitle.textContent = `${data.test.game_name} (${designer})`;
  } else {
    testTitle.textContent = "Art test (Designer unavailable)";
  }
  if (data.progress) {
    remainingAssets.textContent = `${data.progress.remaining_assets} / ${data.progress.total_assets}`;
    minVotes.textContent = data.progress.min_votes;
  }
  sessionVotes.textContent = votedAssets.length.toString();
}

function displayAsset(asset) {
  currentAsset = asset;
  resetRatings();
  assetName.textContent = resolveAssetName(asset);
  assetType.textContent = asset.asset_type || "Art asset";
  assetImage.classList.remove("loaded");
  assetImage.src = asset.image_url || "";
  assetImage.alt = asset.asset_type || "Art asset";
  assetImage.onload = () => assetImage.classList.add("loaded");
  assetImage.onerror = () => showToast("Unable to load image.", "error");
  resetZoom();
}

function setLoading(isLoading) {
  if (isLoading) {
    assetLoading.classList.remove("hidden");
    submitVote.disabled = true;
  } else {
    assetLoading.classList.add("hidden");
    updateSubmitState();
  }
}

function resetRatings() {
  ratingState.professionalism = 0;
  ratingState.appeal = 0;
  ratingState.understandability = 0;
  ratingPanel.querySelectorAll(".rating-row").forEach((group) => {
    group.querySelectorAll(".star-button").forEach((star) => star.classList.remove("is-on"));
  });
  commentInput.value = "";
  commentHint.textContent = "0 / 500";
}

function updateRatingUI(group, value) {
  group.querySelectorAll(".star-button").forEach((star) => {
    const starValue = Number.parseInt(star.dataset.value || "0", 10);
    star.classList.toggle("is-on", starValue <= value);
  });
}

function updateSubmitState() {
  const ready =
    ratingState.professionalism &&
    ratingState.appeal &&
    ratingState.understandability &&
    currentAsset;
  submitVote.disabled = !ready;
}

function showCompletion(data) {
  currentAsset = null;
  assetImage.src = "";
  assetName.textContent = "No more assets";
  assetType.textContent = "";
  updateTestMeta(data);
  completePanel.classList.remove("hidden");
}

function loadVoteHistory() {
  if (!testUuid) {
    return [];
  }
  try {
    const raw = localStorage.getItem(storageKey);
    const parsed = JSON.parse(raw || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function addVoteToHistory(assetUuid) {
  if (!assetUuid) {
    return;
  }
  if (!votedAssets.includes(assetUuid)) {
    votedAssets.push(assetUuid);
    localStorage.setItem(storageKey, JSON.stringify(votedAssets));
  }
}

function bindZoomEvents() {
  assetFrame.addEventListener("wheel", (event) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? -0.1 : 0.1;
    setZoom(zoomState.scale + delta);
  }, { passive: false });

  assetFrame.addEventListener("touchstart", (event) => {
    if (event.touches.length === 2) {
      zoomState.lastTouchDistance = getTouchDistance(event.touches);
    }
  }, { passive: false });

  assetFrame.addEventListener("touchmove", (event) => {
    if (event.touches.length !== 2) {
      return;
    }
    event.preventDefault();
    const distance = getTouchDistance(event.touches);
    if (zoomState.lastTouchDistance) {
      const delta = (distance - zoomState.lastTouchDistance) / 200;
      setZoom(zoomState.scale + delta);
    }
    zoomState.lastTouchDistance = distance;
  }, { passive: false });

  assetFrame.addEventListener("touchend", () => {
    zoomState.lastTouchDistance = null;
  });
}

function setZoom(nextScale) {
  zoomState.scale = Math.min(4, Math.max(1, nextScale));
  assetImage.style.transform = `scale(${zoomState.scale})`;
}

function resetZoom() {
  zoomState.scale = 1;
  assetImage.style.transform = "scale(1)";
}

function showToast(message, variant) {
  const host = document.getElementById("toastHost");
  const toast = document.createElement("div");
  toast.className = `toast ${variant || ""}`.trim();
  toast.textContent = message;
  host.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
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

function getTestUuidFromPath() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  return parts[parts.length - 1] || "";
}

function getBasePath() {
  return window.location.pathname.replace(/\/$/, "");
}
