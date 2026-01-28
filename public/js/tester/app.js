const testTitle = document.getElementById("testTitle");
const testSubtitle = document.getElementById("testSubtitle");
const assetType = document.getElementById("assetType");
const assetDpi = document.getElementById("assetDpi");
const assetImage = document.getElementById("assetImage");
const assetLoading = document.getElementById("assetLoading");
const assetStatus = document.getElementById("assetStatus");
const ratingPanel = document.getElementById("ratingPanel");
const submitVote = document.getElementById("submitVote");
const commentInput = document.getElementById("commentInput");
const commentHint = document.getElementById("commentHint");
const remainingAssets = document.getElementById("remainingAssets");
const minVotes = document.getElementById("minVotes");
const sessionVotes = document.getElementById("sessionVotes");
const shareLink = document.getElementById("shareLink");
const shareButton = document.getElementById("shareButton");
const copyLink = document.getElementById("copyLink");
const copyLinkSecondary = document.getElementById("copyLinkSecondary");
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

if (!testUuid) {
  testSubtitle.textContent = "Invalid test link.";
  showToast("Invalid test link.", "error");
} else {
  setShareLink();
  bindRatingEvents();
  bindActionEvents();
  loadNextAsset();
}

function bindRatingEvents() {
  ratingPanel.addEventListener("click", (event) => {
    const button = event.target.closest(".rating-pill");
    if (!button) {
      return;
    }
    const group = event.target.closest(".rating-group");
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
      resetRatings();
      await loadNextAsset();
    } catch (error) {
      showToast("Network error. Try again.", "error");
      submitVote.disabled = false;
    }
  });

  shareButton.addEventListener("click", () => shareTestLink());
  copyLink.addEventListener("click", () => copyTestLink());
  copyLinkSecondary.addEventListener("click", () => copyTestLink());
  reloadButton.addEventListener("click", () => loadNextAsset());
}

async function loadNextAsset() {
  setLoading(true);
  completePanel.classList.add("hidden");
  assetStatus.textContent = "";

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
      assetStatus.textContent = data.error || "Unable to load the next asset.";
      setLoading(false);
      showToast("Unable to load the next asset.", "error");
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
    assetStatus.textContent = "Network error loading asset.";
    showToast("Network error loading asset.", "error");
  } finally {
    setLoading(false);
  }
}

function updateTestMeta(data) {
  if (data.test?.game_name) {
    testTitle.textContent = data.test.game_name;
    testSubtitle.textContent = "Share quick ratings on each asset below.";
  } else {
    testSubtitle.textContent = "Share quick ratings on each asset below.";
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
  assetType.textContent = asset.asset_type || "Art asset";
  assetDpi.textContent = asset.dpi ? `${asset.dpi} DPI` : "";
  assetImage.classList.remove("loaded");
  assetImage.src = asset.image_url || "";
  assetImage.alt = asset.asset_type || "Art asset";
  assetImage.onload = () => assetImage.classList.add("loaded");
  assetImage.onerror = () => {
    assetStatus.textContent = "Unable to load image.";
  };
  assetStatus.textContent = asset.vote_count
    ? `This asset has ${asset.vote_count} of ${minVotes.textContent} votes.`
    : "Be the first to vote on this asset.";
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
  ratingPanel.querySelectorAll(".rating-group").forEach((group) => {
    group.classList.remove("active");
    group.querySelectorAll(".rating-pill").forEach((pill) => pill.classList.remove("selected"));
    const label = group.querySelector("[data-value-label]");
    if (label) {
      label.textContent = "-";
    }
  });
  commentInput.value = "";
  commentHint.textContent = "0 / 500";
}

function updateRatingUI(group, value) {
  group.classList.add("active");
  group.querySelectorAll(".rating-pill").forEach((pill) => {
    pill.classList.toggle("selected", pill.dataset.value === String(value));
  });
  const label = group.querySelector("[data-value-label]");
  if (label) {
    label.textContent = value;
  }
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
  assetType.textContent = "No more assets";
  assetDpi.textContent = "";
  assetStatus.textContent = "All assets have reached the vote target.";
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

function setShareLink() {
  const url = `${window.location.origin}${window.location.pathname.replace(/\/$/, "")}`;
  shareLink.value = url;
}

async function shareTestLink() {
  const url = shareLink.value;
  if (navigator.share) {
    try {
      await navigator.share({ title: "TGC Art Test", url });
      return;
    } catch (error) {
      showToast("Share canceled.", "error");
    }
  }
  copyTestLink();
}

async function copyTestLink() {
  const url = shareLink.value;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
    } else {
      shareLink.select();
      document.execCommand("copy");
    }
    showToast("Link copied.", "success");
  } catch (error) {
    showToast("Unable to copy link.", "error");
  }
}

function showToast(message, variant) {
  const host = document.getElementById("toastHost");
  const toast = document.createElement("div");
  toast.className = `toast ${variant || ""}`.trim();
  toast.textContent = message;
  host.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function getTestUuidFromPath() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  return parts[parts.length - 1] || "";
}

function getBasePath() {
  return window.location.pathname.replace(/\/$/, "");
}
