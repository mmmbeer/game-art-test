const OVERLAY_BASE = "https://www.thegamecrafter.com";
const CARD_OVERLAY_MAP = new Map([
  ["pokerdeck", "overlays/pokerdeck.png"],
  ["smallsquaredeck", "overlays/smallsquaredeck.png"],
  ["squaredeck", "overlays/squaredeck.png"],
  ["tarotdeck", "overlays/tarotdeck.png"],
  ["tradingdeck", "overlays/tradingdeck.png"],
  ["usgamedeck", "overlays/usgamedeck.png"],
  ["bridgedeck", "overlays/bridgedeck.png"],
  ["businessdeck", "overlays/businessdeck.png"],
  ["cardcraftingdeck", "overlays/cardcraftingdeck.png"],
  ["circledeck", "overlays/circledeck.png"],
  ["clearcardcraftingdeck", "overlays/clearcardcraftingdeck.png"],
  ["cleareuropokerdeck", "overlays/cleareuropokerdeck.png"],
  ["europokerdeck", "overlays/europokerdeck.png"],
  ["dividerdeck", "overlays/dividerdeck.png"],
  ["dominodeck", "overlays/dominodeck.png"],
]);

export function resolveOverlayUrl(asset) {
  if (!asset) {
    return "";
  }

  const meta = asset.metadata || {};
  const direct = meta.overlay_url || asset.overlay_url;
  if (typeof direct === "string" && direct.trim()) {
    return normalizeOverlayUrl(direct);
  }

  if (meta?.relationship === "card") {
    const cardOverlay = resolveCardOverlay(meta);
    if (cardOverlay) {
      return cardOverlay;
    }
    const fallback = buildPrintedOverlayFallback(asset);
    return fallback ? normalizeOverlayUrl(fallback) : "";
  }

  if (isPrintedComponentAsset(asset)) {
    const overlay =
      findOverlay(meta) ||
      findOverlay(meta.source || {}) ||
      buildPrintedOverlayFallback(asset);
    return overlay ? normalizeOverlayUrl(overlay) : "";
  }

  return "";
}

function findOverlay(value, depth = 0, visited = new Set()) {
  if (!value || depth > 6) {
    return "";
  }
  if (visited.has(value)) {
    return "";
  }
  if (typeof value === "string") {
    return isOverlayFile(value) ? value.trim() : "";
  }
  if (typeof value !== "object") {
    return "";
  }
  visited.add(value);

  if (typeof value.overlay === "string" && value.overlay.trim()) {
    return value.overlay.trim();
  }

  for (const [key, entry] of Object.entries(value)) {
    if (typeof entry === "string") {
      const lowerKey = key.toLowerCase();
      if (lowerKey.includes("overlay") && entry.trim()) {
        return entry.trim();
      }
      if (isOverlayFile(entry)) {
        return entry.trim();
      }
    } else if (entry && typeof entry === "object") {
      const found = findOverlay(entry, depth + 1, visited);
      if (found) {
        return found;
      }
    }
  }
  return "";
}

function isOverlayFile(value) {
  if (typeof value !== "string") {
    return false;
  }
  const trimmed = value.trim().toLowerCase();
  if (!trimmed || !trimmed.includes("overlays/")) {
    return false;
  }
  return trimmed.endsWith(".png") || trimmed.endsWith(".svg");
}

function normalizeOverlayUrl(file) {
  if (typeof file !== "string" || !file.trim()) {
    return "";
  }
  const trimmed = file.trim();
  if (trimmed.startsWith("http")) {
    return trimmed;
  }
  if (trimmed.startsWith("//")) {
    return `https:${trimmed}`;
  }
  if (trimmed.startsWith("www.")) {
    return `https://${trimmed}`;
  }
  if (trimmed.startsWith("/")) {
    return `${OVERLAY_BASE}${trimmed}`;
  }
  if (trimmed.startsWith("overlays/")) {
    return `${OVERLAY_BASE}/${trimmed}`;
  }
  return trimmed;
}

function resolveCardOverlay(meta) {
  const source = meta?.source || {};
  const candidates = [meta, source, source.deck, source.parent, source.game];
  for (const candidate of candidates) {
    const overlay = findOverlay(candidate);
    if (overlay) {
      return normalizeOverlayUrl(overlay);
    }
  }
  const identityRaw =
    String(source?.deck?.identity || source?.parent?.identity || source?.identity || "").trim();
  if (identityRaw) {
    const identity = identityRaw.toLowerCase();
    const mapped = CARD_OVERLAY_MAP.get(identity);
    if (mapped) {
      return normalizeOverlayUrl(mapped);
    }
  }
  return "";
}

function buildPrintedOverlayFallback(asset) {
  const meta = asset?.metadata || {};
  const identityRaw =
    String(meta?.source?.identity || "").trim() || String(asset?.asset_type || "").trim();
  if (!identityRaw) {
    const source = meta?.source || {};
    const deckIdentity = String(source?.deck?.identity || source?.parent?.identity || "").trim();
    if (deckIdentity) {
      return `${OVERLAY_BASE}/overlays/${deckIdentity.toLowerCase()}.png`;
    }
    return "";
  }
  const identity = identityRaw.toLowerCase();
  return `${OVERLAY_BASE}/overlays/${identity}.png`;
}

function isPrintedComponentAsset(asset) {
  const meta = asset?.metadata || {};
  const source = meta?.source || {};
  if (Array.isArray(source?.sides)) {
    return true;
  }
  if (typeof source?.overlay === "string") {
    return true;
  }
  if (typeof source?.identity === "string") {
    return true;
  }
  if (
    typeof source?.object_type === "string" &&
    source.object_type.toLowerCase().includes("printed")
  ) {
    return true;
  }
  return false;
}
