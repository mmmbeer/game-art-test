import { clamp } from "./utils.js";

const RAINBOW_COLORS = [
  "#ff4f5a",
  "#ff8b2c",
  "#ffd24a",
  "#38d76a",
  "#3ac5ff",
  "#4f72ff",
  "#b65bff",
];

const DEFAULT_RADIUS = 16;

export function createMarks({ elements, state }) {
  const { assetFrame, assetBounds, assetMarks, ratingPanel, commentInput } = elements;
  const { viewState } = state;
  const markState = {
    marks: [],
    isActive: false,
    hasComment: false,
  };

  function bindMarkEvents() {
    if (!assetFrame || !assetBounds || !assetMarks) {
      return;
    }
    assetFrame.addEventListener("click", handleFrameClick);
    ratingPanel?.addEventListener("ratings:slide", (event) => {
      const metric = event.detail?.metric || "";
      markState.isActive = metric === "comment";
      syncVisibility();
    });
    if (commentInput) {
      commentInput.addEventListener("input", () => {
        const trimmed = commentInput.value.trim();
        markState.hasComment = Boolean(trimmed);
        if (!markState.hasComment) {
          resetMarks();
        }
        syncVisibility();
      });
    }
    markState.isActive = ratingPanel?.dataset.activeMetric === "comment";
    markState.hasComment = Boolean(commentInput?.value?.trim());
    syncVisibility();
  }

  function resetMarks() {
    markState.marks = [];
    markState.hasComment = Boolean(commentInput?.value?.trim());
    renderMarks();
    syncVisibility();
  }

  function handleFrameClick(event) {
    if (!markState.isActive || !markState.hasComment) {
      return;
    }
    const point = getNormalizedPoint(event);
    if (!point) {
      return;
    }
    const removed = removeMarkAtPoint(point);
    if (!removed) {
      addMark(point);
    }
    renderMarks();
  }

  function getNormalizedPoint(event) {
    if (!assetBounds?.getBoundingClientRect) {
      return null;
    }
    const rect = assetBounds.getBoundingClientRect();
    const width = assetBounds.offsetWidth || 0;
    const height = assetBounds.offsetHeight || 0;
    if (!width || !height) {
      return null;
    }
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    const angle = ((viewState.rotation || 0) * Math.PI) / 180;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const ux = dx * cos + dy * sin;
    const uy = -dx * sin + dy * cos;
    const x = (ux + width / 2) / width;
    const y = (uy + height / 2) / height;
    if (x < 0 || x > 1 || y < 0 || y > 1) {
      return null;
    }
    return { x, y };
  }

  function removeMarkAtPoint(point) {
    if (!markState.marks.length || !assetBounds) {
      return false;
    }
    const width = assetBounds.offsetWidth || 1;
    const height = assetBounds.offsetHeight || 1;
    const radius = Math.max(DEFAULT_RADIUS, Math.min(width, height) * 0.015);
    const idx = markState.marks.findIndex((mark) => {
      const dx = (point.x - mark.x) * width;
      const dy = (point.y - mark.y) * height;
      return Math.hypot(dx, dy) <= radius;
    });
    if (idx === -1) {
      return false;
    }
    markState.marks.splice(idx, 1);
    return true;
  }

  function addMark(point) {
    const colorIndex = markState.marks.length % RAINBOW_COLORS.length;
    markState.marks.push({
      id: crypto.randomUUID(),
      x: clamp(point.x, 0, 1),
      y: clamp(point.y, 0, 1),
      color: RAINBOW_COLORS[colorIndex],
    });
  }

  function renderMarks() {
    if (!assetMarks) {
      return;
    }
    assetMarks.innerHTML = "";
    markState.marks.forEach((mark) => {
      const node = document.createElement("span");
      node.className = "asset-mark";
      node.style.left = `${mark.x * 100}%`;
      node.style.top = `${mark.y * 100}%`;
      node.style.setProperty("--mark-color", mark.color);
      node.dataset.markId = mark.id;
      assetMarks.appendChild(node);
    });
  }

  function syncVisibility() {
    if (!assetMarks || !assetFrame) {
      return;
    }
    const isVisible = markState.isActive && markState.hasComment;
    assetMarks.classList.toggle("is-visible", isVisible);
    assetFrame.classList.toggle("is-marking", isVisible);
  }

  return {
    bindMarkEvents,
    resetMarks,
    getMarks: () => markState.marks.map((mark) => ({ ...mark })),
  };
}
