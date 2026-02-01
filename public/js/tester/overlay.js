const TEMPLATE_BASE = "https://s3.amazonaws.com/www.thegamecrafter.com/templates/";
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

export function resolveOverlayTemplate(asset) {
  const meta = asset?.metadata || {};
  const direct = asset?.overlay_url || meta?.overlay_url;
  if (typeof direct === "string" && direct.trim()) {
    return normalizeOverlayUrl(direct);
  }
  if (meta?.relationship === "card" || isCardAssetType(asset)) {
    const cardOverlay = resolveCardOverlay(meta);
    if (cardOverlay) {
      return cardOverlay;
    }
    const fallback = buildPrintedOverlayFallback(asset);
    return fallback ? normalizeOverlayUrl(fallback) : "";
  }
  if (isPrintedComponentAsset(asset)) {
    const overlay = findOverlay(meta) || findOverlay(meta?.source || {});
    if (overlay) {
      return normalizeOverlayUrl(overlay);
    }
    return buildPrintedOverlayFallback(asset);
  }

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

  const entries = Array.isArray(value) ? value.entries() : Object.entries(value);
  for (const entry of entries) {
    const key = Array.isArray(value) ? "" : entry[0];
    const item = Array.isArray(value) ? entry[1] : entry[1];
    if (typeof item === "string") {
      const lowerKey = String(key).toLowerCase();
      if (lowerKey.includes("overlay") && item.trim()) {
        return item.trim();
      }
      if (isOverlayFile(item)) {
        return item.trim();
      }
    } else if (item && typeof item === "object") {
      const found = findOverlay(item, depth + 1, visited);
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

function isOverlayFile(value) {
  if (typeof value !== "string") {
    return false;
  }
  const trimmed = value.trim().toLowerCase();
  if (!trimmed) {
    return false;
  }
  if (!trimmed.includes("overlays/")) {
    return false;
  }
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

function firstTemplateValue(templates) {
  for (const value of Object.values(templates || {})) {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }
  return "";
}

function buildPrintedOverlayFallback(asset) {
  const identityRaw = String(asset?.asset_type || "").trim();
  if (!identityRaw) {
    const meta = asset?.metadata || {};
    const source = meta?.source || {};
    const deckIdentity = String(source?.deck?.identity || source?.parent?.identity || "").trim();
    if (deckIdentity) {
      return `${OVERLAY_BASE}/overlays/${deckIdentity.toLowerCase()}.png`;
    }
  }
  if (identityRaw.toLowerCase().startsWith("card_")) {
    const meta = asset?.metadata || {};
    const cardOverlay = resolveCardOverlay(meta);
    if (cardOverlay) {
      return cardOverlay;
    }
  }
  if (!identityRaw) {
    return "";
  }
  const identity = identityRaw.toLowerCase();
  return `${OVERLAY_BASE}/overlays/${identity}.png`;
}

function isPrintedComponentAsset(asset) {
  const meta = asset?.metadata || {};
  const source = meta?.source || {};
  if (isCardAssetType(asset)) {
    return true;
  }
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

function isCardAssetType(asset) {
  const assetType = String(asset?.asset_type || "").toLowerCase();
  return assetType.startsWith("card_");
}
