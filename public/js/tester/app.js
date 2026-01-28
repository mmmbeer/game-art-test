const testTitle = document.getElementById("testTitle");
const assetName = document.getElementById("assetName");
const assetType = document.getElementById("assetType");
const assetImage = document.getElementById("assetImage");
const assetFrame = document.getElementById("assetFrame");
const assetStage = document.getElementById("assetStage");
const assetTransform = document.getElementById("assetTransform");
const overlayImage = document.getElementById("overlayImage");
const zoomIndicator = document.getElementById("zoomIndicator");
const assetLoading = document.getElementById("assetLoading");
const toggleOverlay = document.getElementById("toggleOverlay");
const toggleBackground = document.getElementById("toggleBackground");
const rotateButton = document.getElementById("rotateButton");
const driftButton = document.getElementById("driftButton");
const viewerTools = document.getElementById("viewerTools");
const resetView = document.getElementById("resetView");
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
const TEMPLATE_BASE = "https://s3.amazonaws.com/www.thegamecrafter.com/templates/";
const zoomState = {
  scale: 1,
  mode: "fit",
  lastTouchDistance: null,
  hideTimer: null,
  isHovering: false,
};
const viewState = {
  overlayEnabled: false,
  overlayUrl: "",
  backgroundMode: "dark",
  rotation: 0,
  driftEnabled: false,
  driftOffset: { x: 0, y: 0 },
};

if (!testUuid) {
  testTitle.textContent = "Invalid test link.";
  showToast("Invalid test link.", "error");
} else {
  bindRatingEvents();
  bindActionEvents();
  bindZoomEvents();
  bindViewerControls();
  updateBackgroundMode();
  updateControlStates();
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

  ratingPanel.addEventListener("mouseover", (event) => {
    const button = event.target.closest(".star-button");
    if (!button) {
      return;
    }
    const group = event.target.closest(".rating-row");
    const value = Number.parseInt(button.dataset.value || "0", 10);
    if (!group || !value) {
      return;
    }
    applyStarPreview(group, value);
  });

  ratingPanel.addEventListener("mouseout", (event) => {
    const button = event.target.closest(".star-button");
    if (!button) {
      return;
    }
    const group = event.target.closest(".rating-row");
    if (!group) {
      return;
    }
    restoreStars(group);
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

function bindViewerControls() {
  if (toggleOverlay) {
    toggleOverlay.addEventListener("click", () => {
      viewState.overlayEnabled = !viewState.overlayEnabled;
      updateOverlayState({ showToastOnMissing: viewState.overlayEnabled });
      updateControlStates();
    });
  }

  if (toggleBackground) {
    toggleBackground.addEventListener("click", () => {
      viewState.backgroundMode = viewState.backgroundMode === "light" ? "dark" : "light";
      updateBackgroundMode();
      updateControlStates();
    });
  }

  if (rotateButton) {
    rotateButton.addEventListener("click", () => {
      viewState.rotation = (viewState.rotation + 90) % 360;
      updateTransforms();
      updateControlStates();
    });
  }

  if (driftButton) {
    driftButton.addEventListener("click", () => {
      viewState.driftEnabled = !viewState.driftEnabled;
      if (viewState.driftEnabled) {
        applyRandomDrift();
      } else {
        viewState.driftOffset = { x: 0, y: 0 };
        updateTransforms();
      }
      updateControlStates();
    });
  }

  if (viewerTools) {
    viewerTools.addEventListener("click", (event) => {
      const button = event.target.closest("[data-zoom]");
      if (!button) {
        return;
      }
      const mode = button.dataset.zoom;
      setZoomMode(mode);
    });
  }

  if (resetView) {
    resetView.addEventListener("click", () => resetViewState());
  }
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
    testTitle.textContent = `ART TEST: ${data.test.game_name} (${designer})`;
  } else {
    testTitle.textContent = "ART TEST: (Designer unavailable)";
  }
  if (data.progress) {
    remainingAssets.textContent = `${data.progress.remaining_assets}/${data.progress.total_assets}`;
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
  updateOverlaySource(asset);
  resetViewState({ preserveOverlay: true, preserveBackground: true, preserveZoomMode: false });
  assetImage.src = asset.image_url || "";
  assetImage.alt = asset.asset_type || "Art asset";
  assetImage.onload = () => {
    assetImage.classList.add("loaded");
    syncOverlaySize();
    applyZoomForMode({ showIndicator: false });
  };
  assetImage.onerror = () => showToast("Unable to load image.", "error");
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
    star.classList.remove("preview");
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
  if (overlayImage) {
    overlayImage.src = "";
    overlayImage.classList.add("hidden");
  }
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
    setZoomScale(zoomState.scale + delta, { mode: "manual" });
  }, { passive: false });

  assetFrame.addEventListener("touchstart", (event) => {
    if (event.touches.length === 2) {
      zoomState.lastTouchDistance = getTouchDistance(event.touches);
    }
    showZoomIndicator(2000);
    showViewerTools();
  }, { passive: false });

  assetFrame.addEventListener("touchmove", (event) => {
    if (event.touches.length !== 2) {
      return;
    }
    event.preventDefault();
    const distance = getTouchDistance(event.touches);
    if (zoomState.lastTouchDistance) {
      const delta = (distance - zoomState.lastTouchDistance) / 200;
      setZoomScale(zoomState.scale + delta, { mode: "manual" });
    }
    zoomState.lastTouchDistance = distance;
  }, { passive: false });

  assetFrame.addEventListener("touchend", () => {
    zoomState.lastTouchDistance = null;
    hideZoomIndicatorSoon();
    hideViewerToolsSoon();
  });

  assetFrame.addEventListener("mouseenter", () => {
    zoomState.isHovering = true;
    showZoomIndicator(null);
    showViewerTools();
  });

  assetFrame.addEventListener("mouseleave", () => {
    zoomState.isHovering = false;
    hideZoomIndicatorSoon();
    hideViewerToolsSoon();
  });
}

function setZoomScale(nextScale, { mode = "manual", showIndicator = true } = {}) {
  zoomState.scale = clamp(nextScale, 0.1, 6);
  zoomState.mode = mode;
  updateTransforms();
  updateZoomToolState();
  if (showIndicator) {
    showZoomIndicator(1800);
  }
}

function setZoomMode(mode) {
  if (mode !== "fit" && mode !== "actual") {
    return;
  }
  zoomState.mode = mode;
  applyZoomForMode({ showIndicator: true });
  updateZoomToolState();
}

function applyZoomForMode({ showIndicator = true } = {}) {
  const scale = zoomState.mode === "actual" ? getActualScale() : getFitScale();
  setZoomScale(scale, { mode: zoomState.mode, showIndicator });
}

function showZoomIndicator(lingerMs = 1800) {
  if (!zoomIndicator) {
    return;
  }
  zoomIndicator.textContent = `${Math.round(zoomState.scale * 100)}%`;
  zoomIndicator.classList.add("is-visible");
  if (lingerMs === null) {
    if (zoomState.hideTimer) {
      clearTimeout(zoomState.hideTimer);
    }
    return;
  }
  scheduleZoomIndicatorHide(lingerMs);
}

function hideZoomIndicatorSoon() {
  scheduleZoomIndicatorHide(600);
}

function scheduleZoomIndicatorHide(delayMs) {
  if (!zoomIndicator) {
    return;
  }
  if (zoomState.hideTimer) {
    clearTimeout(zoomState.hideTimer);
  }
  zoomState.hideTimer = setTimeout(() => {
    zoomIndicator.classList.remove("is-visible");
  }, delayMs);
}

function getFitScale() {
  if (!assetImage?.naturalWidth || !assetImage?.naturalHeight || !assetFrame) {
    return 1;
  }
  const frameWidth = assetFrame.clientWidth || 1;
  const frameHeight = assetFrame.clientHeight || 1;
  const scale = Math.min(
    frameWidth / assetImage.naturalWidth,
    frameHeight / assetImage.naturalHeight,
    1
  );
  return Number.isFinite(scale) && scale > 0 ? scale : 1;
}

function getActualScale() {
  const dpi = resolveAssetDpi(currentAsset);
  const scale = 96 / dpi;
  return clamp(scale, 0.1, 6);
}

function resolveAssetDpi(asset) {
  const direct = Number(asset?.dpi);
  if (Number.isFinite(direct) && direct > 0) {
    return direct;
  }
  const meta = asset?.metadata || {};
  const metaDpi = Number(meta?.dpi);
  if (Number.isFinite(metaDpi) && metaDpi > 0) {
    return metaDpi;
  }
  return 300;
}

function updateTransforms() {
  if (assetStage) {
    assetStage.style.transform = `translate(${viewState.driftOffset.x}px, ${viewState.driftOffset.y}px)`;
  }
  if (assetTransform) {
    assetTransform.style.transform = `rotate(${viewState.rotation}deg) scale(${zoomState.scale})`;
  }
}

function resetViewState({
  preserveOverlay = false,
  preserveBackground = false,
  preserveZoomMode = false,
} = {}) {
  if (!preserveZoomMode) {
    zoomState.mode = "fit";
  }
  viewState.rotation = 0;
  if (viewState.driftEnabled) {
    applyRandomDrift();
  } else {
    viewState.driftOffset = { x: 0, y: 0 };
  }
  if (!preserveOverlay) {
    viewState.overlayEnabled = false;
  }
  if (!preserveBackground) {
    viewState.backgroundMode = "dark";
  }
  updateBackgroundMode();
  updateOverlayState();
  applyZoomForMode({ showIndicator: false });
  updateControlStates();
}

function updateBackgroundMode() {
  if (!assetFrame) {
    return;
  }
  assetFrame.classList.toggle("is-light", viewState.backgroundMode === "light");
}

function updateOverlaySource(asset) {
  viewState.overlayUrl = resolveOverlayTemplate(asset);
  if (overlayImage) {
    overlayImage.onload = () => syncOverlaySize();
    overlayImage.onerror = () => overlayImage.classList.add("hidden");
    overlayImage.src = viewState.overlayUrl || "";
    if (!viewState.overlayUrl) {
      overlayImage.classList.add("hidden");
    }
  }
  updateOverlayState();
}

function updateOverlayState({ showToastOnMissing = false } = {}) {
  const hasOverlay = Boolean(viewState.overlayUrl);
  if (overlayImage) {
    overlayImage.classList.toggle("hidden", !viewState.overlayEnabled || !hasOverlay);
  }
  if (showToastOnMissing && !hasOverlay) {
    showToast("No template overlay available for this asset.", "error");
  }
}

function syncOverlaySize() {
  if (!overlayImage || !assetImage?.naturalWidth || !assetImage?.naturalHeight) {
    return;
  }
  overlayImage.style.width = `${assetImage.naturalWidth}px`;
  overlayImage.style.height = `${assetImage.naturalHeight}px`;
}

function updateControlStates() {
  updateZoomToolState();
  if (toggleOverlay) {
    toggleOverlay.classList.toggle("is-on", viewState.overlayEnabled);
    toggleOverlay.setAttribute("aria-pressed", String(viewState.overlayEnabled));
  }
  if (toggleBackground) {
    const isLight = viewState.backgroundMode === "light";
    toggleBackground.classList.toggle("is-on", isLight);
    toggleBackground.setAttribute("aria-pressed", String(isLight));
    toggleBackground.textContent = isLight ? "BG Light" : "BG Dark";
  }
  if (rotateButton) {
    rotateButton.setAttribute("aria-pressed", String(viewState.rotation !== 0));
  }
  if (driftButton) {
    driftButton.classList.toggle("is-on", viewState.driftEnabled);
    driftButton.setAttribute("aria-pressed", String(viewState.driftEnabled));
  }
}

function updateZoomToolState() {
  if (!viewerTools) {
    return;
  }
  viewerTools.querySelectorAll("[data-zoom]").forEach((button) => {
    const mode = button.dataset.zoom;
    const isOn = zoomState.mode === mode;
    button.classList.toggle("is-on", isOn);
    button.setAttribute("aria-pressed", String(isOn));
  });
}

function applyRandomDrift() {
  const drift = 80;
  const scale = Math.max(0.1, zoomState.scale || 1);
  const adjusted = drift / scale;
  const x = Math.round((Math.random() * 2 - 1) * adjusted);
  const y = Math.round((Math.random() * 2 - 1) * adjusted);
  viewState.driftOffset = { x, y };
  updateTransforms();
}

function resolveOverlayTemplate(asset) {
  const meta = asset?.metadata || {};
  const templates = findTemplates(meta) || findTemplates(meta?.source || {});
  if (!templates) {
    const fallback = findTemplateFile(meta);
    return fallback ? normalizeTemplateUrl(fallback) : "";
  }
  const file =
    templates.PNG ||
    templates.svg ||
    templates.SVG ||
    templates.png ||
    firstTemplateValue(templates);
  return normalizeTemplateUrl(file);
}

function findTemplates(value, depth = 0, visited = new Set()) {
  if (!value || typeof value !== "object" || depth > 4) {
    return null;
  }
  if (visited.has(value)) {
    return null;
  }
  visited.add(value);
  if (value.templates && typeof value.templates === "object") {
    return value.templates;
  }
  if (value.template && typeof value.template === "object") {
    return value.template;
  }
  for (const entry of Object.values(value)) {
    if (entry && typeof entry === "object") {
      const found = findTemplates(entry, depth + 1, visited);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

function findTemplateFile(value, depth = 0, visited = new Set()) {
  if (!value || typeof value !== "object" || depth > 5) {
    return "";
  }
  if (visited.has(value)) {
    return "";
  }
  visited.add(value);
  for (const [key, entry] of Object.entries(value)) {
    if (typeof entry === "string") {
      const lowerKey = key.toLowerCase();
      if (lowerKey.includes("template") && isTemplateFile(entry)) {
        return entry;
      }
      if (isTemplateFile(entry) && lowerKey.includes("png")) {
        return entry;
      }
    } else if (entry && typeof entry === "object") {
      const found = findTemplateFile(entry, depth + 1, visited);
      if (found) {
        return found;
      }
    }
  }
  return "";
}

function isTemplateFile(value) {
  if (typeof value !== "string") {
    return false;
  }
  const trimmed = value.trim().toLowerCase();
  return trimmed.endsWith(".png") || trimmed.endsWith(".svg");
}

function normalizeTemplateUrl(file) {
  if (typeof file !== "string" || !file.trim()) {
    return "";
  }
  const trimmed = file.trim();
  if (trimmed.startsWith("http")) {
    return trimmed;
  }
  return `${TEMPLATE_BASE}${trimmed.replace(/^\/+/, "")}`;
}

function firstTemplateValue(templates) {
  for (const value of Object.values(templates || {})) {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }
  return "";
}

function showViewerTools() {
  if (!viewerTools) {
    return;
  }
  viewerTools.classList.add("is-visible");
}

function hideViewerToolsSoon() {
  if (!viewerTools) {
    return;
  }
  setTimeout(() => {
    if (!zoomState.isHovering) {
      viewerTools.classList.remove("is-visible");
    }
  }, 600);
}

function getTouchDistance(touches) {
  if (touches.length < 2) {
    return 0;
  }
  const [first, second] = touches;
  const dx = second.clientX - first.clientX;
  const dy = second.clientY - first.clientY;
  return Math.hypot(dx, dy);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function applyStarPreview(group, value) {
  group.querySelectorAll(".star-button").forEach((star) => {
    const starValue = Number.parseInt(star.dataset.value || "0", 10);
    star.classList.toggle("preview", starValue <= value);
  });
}

function restoreStars(group) {
  group.querySelectorAll(".star-button").forEach((star) => {
    star.classList.remove("preview");
  });
  const metric = group.dataset.metric;
  const value = ratingState[metric] || 0;
  if (value) {
    updateRatingUI(group, value);
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
