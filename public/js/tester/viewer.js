import { clamp, getTouchDistance } from "./utils.js";
import { resolveOverlayTemplate } from "./overlay.js";

export function createViewer({ elements, state, getCurrentAsset, showToast }) {
  const {
    assetFrame,
    assetStage,
    assetBounds,
    assetDriftCrop,
    assetTransform,
    assetImage,
    overlayImage,
    zoomIndicator,
    toggleOverlay,
    toggleBackground,
    rotateButton,
    driftButton,
    cropButton,
    viewerTools,
    resetView,
  } = elements;
  const { zoomState, viewState } = state;

  function bindZoomEvents() {
    assetFrame.addEventListener(
      "wheel",
      (event) => {
        event.preventDefault();
        const delta = event.deltaY > 0 ? -0.1 : 0.1;
        setZoomScale(zoomState.scale + delta, { mode: "manual" });
      },
      { passive: false }
    );

    assetFrame.addEventListener(
      "touchstart",
      (event) => {
        if (event.touches.length === 2) {
          zoomState.lastTouchDistance = getTouchDistance(event.touches);
        }
        showZoomIndicator(2000);
        showViewerTools();
      },
      { passive: false }
    );

    assetFrame.addEventListener(
      "touchmove",
      (event) => {
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
      },
      { passive: false }
    );

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
          viewState.cropEnabled = true;
          applyRandomDrift();
        } else {
          viewState.driftOffset = { x: 0, y: 0 };
          updateTransforms();
        }
        updateDriftCrop();
        updateControlStates();
      });
    }

    if (cropButton) {
      cropButton.addEventListener("click", () => {
        viewState.cropEnabled = !viewState.cropEnabled;
        if (!viewState.cropEnabled) {
          viewState.driftEnabled = false;
          viewState.driftOffset = { x: 0, y: 0 };
          updateTransforms();
        }
        updateDriftCrop();
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

  function setZoomScale(nextScale, { mode = "manual", showIndicator = true } = {}) {
    zoomState.scale = clamp(nextScale, 0.1, 6);
    zoomState.mode = mode;
    updateTransforms();
    updateAssetBounds();
    updateDriftCrop();
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
    const dpi = resolveAssetDpi(getCurrentAsset());
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
    if (assetTransform) {
      assetTransform.style.transform =
        `translate(${viewState.driftOffset.x}px, ${viewState.driftOffset.y}px) ` +
        `rotate(${viewState.rotation}deg)`;
    }
  }

  function updateDriftCrop() {
    if (!assetDriftCrop) {
      return;
    }
    const shouldCrop = viewState.driftEnabled || viewState.cropEnabled;
    const crop = shouldCrop ? Math.round(80 * zoomState.scale) : 0;
    assetDriftCrop.style.inset = `${crop}px`;
  }

  function updateAssetBounds() {
    if (!assetBounds || !assetImage?.naturalWidth || !assetImage?.naturalHeight) {
      return;
    }
    const width = Math.max(1, Math.round(assetImage.naturalWidth * zoomState.scale));
    const height = Math.max(1, Math.round(assetImage.naturalHeight * zoomState.scale));
    assetBounds.style.width = `${width}px`;
    assetBounds.style.height = `${height}px`;
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
    if (!viewState.cropEnabled) {
      viewState.driftEnabled = false;
    }
    updateDriftCrop();
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
      overlayImage.classList.remove("loaded");
      overlayImage.onload = () => {
        overlayImage.classList.add("loaded");
        syncOverlaySize();
      };
      overlayImage.onerror = () => {
        overlayImage.classList.remove("loaded");
        overlayImage.classList.add("hidden");
      };
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
    overlayImage.style.width = "100%";
    overlayImage.style.height = "100%";
    updateAssetBounds();
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
    if (cropButton) {
      cropButton.classList.toggle("is-on", viewState.cropEnabled);
      cropButton.setAttribute("aria-pressed", String(viewState.cropEnabled));
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
    const adjusted = drift * scale;
    const x = Math.round((Math.random() * 2 - 1) * adjusted);
    const y = Math.round((Math.random() * 2 - 1) * adjusted);
    viewState.driftOffset = { x, y };
    updateTransforms();
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

  if (assetStage) {
    assetStage.style.transform = "";
  }
  updateDriftCrop();

  return {
    bindZoomEvents,
    bindViewerControls,
    resetViewState,
    updateBackgroundMode,
    updateOverlaySource,
    updateOverlayState,
    syncOverlaySize,
    updateControlStates,
    updateTransforms,
    applyZoomForMode,
  };
}
