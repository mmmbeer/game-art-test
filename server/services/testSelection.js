const DEFAULT_SAMPLE_SIZE = 10;

export function normalizeSelectedTypes(input) {
  if (!Array.isArray(input)) {
    return [];
  }
  return input
    .map((value) => String(value || "").trim())
    .filter((value) => value.length > 0);
}

export function resolveSampleSize(input, fallback = DEFAULT_SAMPLE_SIZE) {
  const parsed = Number.parseInt(input, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }
  return Math.min(parsed, 50);
}

export function buildTestPool({ assets, selectedTypes }) {
  const selection = new Set(selectedTypes);
  const poolMap = new Map();
  const tgcAssetMap = new Map(assets.map((asset) => [asset.tgc_asset_id, asset]));
  let deckSelections = 0;
  let deckCardAdds = 0;

  for (const asset of assets) {
    if (!selection.has(asset.asset_type)) {
      continue;
    }
    if (isDeckAsset(asset)) {
      deckSelections += 1;
      const deckCards = resolveDeckCards(asset, assets, tgcAssetMap);
      deckCards.forEach((card) => {
        if (!poolMap.has(card.id)) {
          poolMap.set(card.id, card);
          deckCardAdds += 1;
        }
      });
      continue;
    }
    poolMap.set(asset.id, asset);
  }

  if (deckSelections > 0 && deckCardAdds === 0) {
    const fallbackCards = assets.filter((asset) => isCardAsset(asset));
    fallbackCards.forEach((card) => poolMap.set(card.id, card));
    deckCardAdds = fallbackCards.length;
  }

  return {
    pool: Array.from(poolMap.values()),
    meta: {
      selected_type_count: selection.size,
      deck_selections: deckSelections,
      deck_card_adds: deckCardAdds,
    },
  };
}

export function sampleAssets(pool, sampleSize) {
  const cloned = pool.slice();
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[swapIndex]] = [cloned[swapIndex], cloned[i]];
  }
  return cloned.slice(0, sampleSize);
}

function isDeckAsset(asset) {
  const type = String(asset?.asset_type || "");
  if (type.toLowerCase().includes("deck")) {
    return true;
  }
  const source = asset?.metadata?.source || {};
  return Array.isArray(source.cards) || Number(source.card_count) > 0;
}

function isCardAsset(asset) {
  const type = String(asset?.asset_type || "");
  if (type.toLowerCase().includes("card")) {
    return true;
  }
  const source = asset?.metadata?.source || {};
  return String(source.object_type || "").toLowerCase() === "card";
}

function resolveDeckCards(deckAsset, allAssets, tgcAssetMap) {
  const cardIds = extractDeckCardIds(deckAsset);
  if (cardIds.size > 0) {
    return Array.from(cardIds)
      .map((id) => tgcAssetMap.get(id))
      .filter(Boolean);
  }
  const deckId = deckAsset?.tgc_asset_id;
  return allAssets.filter((asset) => {
    const source = asset?.metadata?.source || {};
    return isCardAsset(asset) && String(source.deck_id || "") === String(deckId || "");
  });
}

function extractDeckCardIds(deckAsset) {
  const source = deckAsset?.metadata?.source || {};
  const ids = new Set();
  const candidates = [];

  if (Array.isArray(source.cards)) {
    candidates.push(...source.cards);
  }
  if (Array.isArray(source.card_ids)) {
    candidates.push(...source.card_ids);
  }
  if (Array.isArray(source.card_id)) {
    candidates.push(...source.card_id);
  }
  if (typeof source.card_id === "string") {
    candidates.push(source.card_id);
  }

  candidates.forEach((card) => {
    if (typeof card === "string") {
      ids.add(card);
      return;
    }
    if (card && typeof card === "object" && typeof card.id === "string") {
      ids.add(card.id);
    }
  });

  return ids;
}
