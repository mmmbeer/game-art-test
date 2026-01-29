export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function getTouchDistance(touches) {
  if (touches.length < 2) {
    return 0;
  }
  const [first, second] = touches;
  const dx = second.clientX - first.clientX;
  const dy = second.clientY - first.clientY;
  return Math.hypot(dx, dy);
}

export function showToast(message, variant) {
  const host = document.getElementById("toastHost");
  if (!host) {
    return;
  }
  const toast = document.createElement("div");
  toast.className = `toast ${variant || ""}`.trim();
  toast.textContent = message;
  host.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

export function getTestUuidFromPath() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  return parts[parts.length - 1] || "";
}

export function getBasePath() {
  return window.location.pathname.replace(/\/$/, "");
}
