export function buildDefaultSelection(byType) {
  const map = new Map();
  Object.entries(byType || {}).forEach(([type, assets]) => {
    map.set(type, new Set((assets || []).map((asset) => asset.uuid)));
  });
  return map;
}

export function getSelectedAssets(selectionState) {
  const selected = [];
  selectionState.forEach((set) => set.forEach((uuid) => selected.push(uuid)));
  return selected;
}

export function resolveTypeCounts({ type, assetCount, assetsByType, selectionState }) {
  const assets = assetsByType[type] || [];
  const selected = selectionState.get(type) || new Set();
  if (!isDeckType(type)) {
    return { selectedCount: selected.size, totalCount: assetCount };
  }
  const totalCount = assets.reduce((sum, asset) => sum + resolveCardCount(asset, 1), 0);
  const selectedCount = assets
    .filter((asset) => selected.has(asset.uuid))
    .reduce((sum, asset) => sum + resolveCardCount(asset, 1), 0);
  return { selectedCount, totalCount };
}

export function isTypePartiallySelected({ type, assetsByType, selectionState }) {
  const assets = assetsByType[type] || [];
  const selected = selectionState.get(type) || new Set();
  return selected.size > 0 && selected.size < assets.length;
}

export function isTypeFullySelected({ type, assetsByType, selectionState }) {
  const assets = assetsByType[type] || [];
  const selected = selectionState.get(type) || new Set();
  return assets.length > 0 && selected.size === assets.length;
}

export function resolveAssetName(asset) {
  const source = asset?.metadata?.source || {};
  const name =
    (source.name || "").trim() ||
    (source.title || "").trim() ||
    (source.object_name || "").trim();
  return name || asset.asset_type;
}

export function resolveCardCount(asset, fallback = 0) {
  if (!asset || typeof asset !== "object") {
    return fallback;
  }
  const source = asset.metadata?.source || {};
  const count =
    Number(source.card_count) ||
    Number(source.cards_count) ||
    Number(source.card_total) ||
    0;
  return count || fallback;
}

export function isDeckType(type) {
  return String(type || "").toLowerCase().includes("deck");
}

export function isCardType(type) {
  return String(type || "").toLowerCase().includes("card");
}

export function getPreviewAssetsForType({ type, assetsByType, deckCardsByAssetUuid }) {
  const items = assetsByType[type] || [];
  const previewItems = [];
  items.forEach((asset) => {
    previewItems.push(asset);
    if (String(type || '').toLowerCase().includes('deck')) {
      const cards = deckCardsByAssetUuid?.[asset.uuid] || [];
      cards.forEach((card) => previewItems.push(card));
    }
  });
  return previewItems;
}
