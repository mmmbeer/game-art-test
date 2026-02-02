export function loadVoteHistory(storageKey) {
  if (!storageKey) {
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

export function getTesterId(storageKey) {
  if (!storageKey) {
    return "";
  }
  try {
    const existing = localStorage.getItem(storageKey);
    if (isValidUuid(existing)) {
      return existing;
    }
    const created = createUuid();
    localStorage.setItem(storageKey, created);
    return created;
  } catch (error) {
    return "";
  }
}

export function addVoteToHistory({ storageKey, votedAssets, assetUuid }) {
  if (!storageKey || !assetUuid) {
    return votedAssets;
  }
  if (!votedAssets.includes(assetUuid)) {
    votedAssets.push(assetUuid);
    localStorage.setItem(storageKey, JSON.stringify(votedAssets));
  }
  return votedAssets;
}

export function loadAssetHistory(storageKey) {
  if (!storageKey) {
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

export function addAssetToHistory({ storageKey, assetUuids, assetUuid }) {
  if (!storageKey || !assetUuid) {
    return assetUuids;
  }
  if (!assetUuids.includes(assetUuid)) {
    assetUuids.push(assetUuid);
    localStorage.setItem(storageKey, JSON.stringify(assetUuids));
  }
  return assetUuids;
}

function isValidUuid(value) {
  if (typeof value !== "string") {
    return false;
  }
  return (
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      value
    )
  );
}

function createUuid() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const bytes = new Uint8Array(16);
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < bytes.length; i += 1) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0"));
  return [
    hex.slice(0, 4).join(""),
    hex.slice(4, 6).join(""),
    hex.slice(6, 8).join(""),
    hex.slice(8, 10).join(""),
    hex.slice(10, 16).join(""),
  ].join("-");
}
