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
