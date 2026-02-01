import {
  extractItems,
  fetchDeck,
  fetchFile,
  fetchGame,
  listGameRelationship,
  listDeckRelationship,
  listRelationshipByUrl,
} from "./tgcClient.js";

const EXCLUDED_ID_FIELDS = new Set([
  "id",
  "game_id",
  "designer_id",
  "user_id",
  "session_id",
  "folder_id",
  "part_id",
  "sku_id",
  "api_key_id",
  "review_id",
  "order_id",
  "cart_id",
  "wishlist_id",
  "address_id",
  "webhook_id",
  "shipping_address_id",
]);

export async function discoverGameAssets({ tgcGameId, sessionId }) {
  const gameResult = await fetchGame({ gameId: tgcGameId, sessionId, includeRelationships: true });
  const relationshipEntries = extractRelationshipEntries(gameResult);
  const assets = [];
  const fileCache = new Map();

  for (const relationship of relationshipEntries) {
    if (!relationship.key) {
      continue;
    }
    let items = relationship.items || [];
    let response;
    try {
      if (!items.length) {
        response = relationship.href
          ? await listRelationshipByUrl({
              url: relationship.href,
              sessionId,
              includeRelationships: true,
            })
          : await listGameRelationship({
              gameId: tgcGameId,
              relationship: relationship.key,
              sessionId,
              includeRelationships: true,
            });
        items = extractItems(response);
      }
    } catch (error) {
      const message = String(error?.message || "");
      if (message.toLowerCase().includes("resource not found")) {
        continue;
      }
      throw error;
    }

    for (const item of items) {
      if (isCardItem(item, relationship.key)) {
        const normalizedCards = await normalizeCardAssets({
          item,
          sessionId,
          fileCache,
        });
        normalizedCards.forEach((cardAsset) => assets.push(cardAsset));
      } else {
        const normalized = await normalizeAsset({
          relationship: relationship.key,
          item,
          sessionId,
          fileCache,
        });
        if (normalized) {
          assets.push(normalized);
        }
      }

      if (isDeckItem(item, relationship.key)) {
        const { items: deckCards, deckIdentity } = await fetchDeckCards({
          deckId: item.id,
          sessionId,
        });
        for (const card of deckCards) {
          const normalizedCards = await normalizeCardAssets({
            item: card,
            sessionId,
            fileCache,
            deckIdentity,
          });
          normalizedCards.forEach((cardAsset) => assets.push(cardAsset));
        }
      }
    }
  }

  return assets;
}

function extractRelationshipEntries(gameResult) {
  const relationships =
    gameResult?._relationships || gameResult?.relationships || gameResult?.relationship || {};
  return Object.entries(relationships)
    .map(([key, value]) => ({ key, value }))
    .filter(({ value }) => {
      if (!value) {
        return false;
      }
      if (typeof value === "string") {
        return true;
      }
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      if (Array.isArray(value.items)) {
        return value.items.length > 0;
      }
      return false;
    })
    .map(({ key, value }) => ({
      key,
      href: typeof value === "string" ? value : "",
      items: Array.isArray(value?.items) ? value.items : Array.isArray(value) ? value : [],
    }));
}

function isDeckItem(item, relationshipKey) {
  const type = String(item?.object_type || relationshipKey || "");
  return type.toLowerCase().includes("deck");
}

function isCardItem(item, relationshipKey) {
  const type = String(item?.object_type || relationshipKey || "");
  return type.toLowerCase().includes("card");
}

async function normalizeCardAssets({ item, sessionId, fileCache, deckIdentity = "" }) {
  const assets = [];
  const faceId = item.face_id || item.face?.id;
  const backId = item.back_id || item.back?.id;
  const faceAsset = await buildCardAsset({
    item,
    sessionId,
    fileCache,
    fileId: faceId,
    side: "face",
    deckIdentity,
  });
  if (faceAsset) {
    assets.push(faceAsset);
  }
  const backAsset = await buildCardAsset({
    item,
    sessionId,
    fileCache,
    fileId: backId,
    side: "back",
    deckIdentity,
  });
  if (backAsset) {
    assets.push(backAsset);
  }
  if (!assets.length) {
    const fallback = await normalizeAsset({
      relationship: "card",
      item,
      sessionId,
      fileCache,
    });
    if (fallback) {
      assets.push(fallback);
    }
  }
  return assets;
}

async function buildCardAsset({ item, sessionId, fileCache, fileId, side, deckIdentity }) {
  if (!fileId) {
    return null;
  }
  const file = await getFile({ fileId, sessionId, fileCache });
  if (!file) {
    return null;
  }
  const imageUrl = file.file_uri || file.preview_uri || "";
  if (!imageUrl) {
    return null;
  }
  const dpi = resolveDpi([pickFileDetails(file)]) || 0;
  return {
    tgc_asset_id: item.id,
    asset_type: `card_${side}`,
    image_url: imageUrl,
    dpi,
    metadata: {
      relationship: "card",
      side,
      file_ids: [fileId],
      files: [pickFileDetails(file)],
      source: {
        ...item,
        deck: deckIdentity ? { identity: deckIdentity } : item?.deck,
      },
    },
  };
}

async function fetchDeckCards({ deckId, sessionId }) {
  let deckResult = null;
  try {
    deckResult = await fetchDeck({ deckId, sessionId, includeRelationships: true });
  } catch (error) {
    deckResult = null;
  }
  const deckIdentity =
    String(deckResult?.item?.identity || deckResult?.identity || "").trim();

  const relationshipEntries = extractRelationshipEntries(deckResult || {});
  const cardsRel = relationshipEntries.find((entry) => entry.key === "cards");
  let items = cardsRel?.items || [];
  if (!items.length) {
    try {
      if (cardsRel?.href) {
        const response = await listRelationshipByUrl({
          url: cardsRel.href,
          sessionId,
          includeRelationships: true,
        });
        items = extractItems(response);
      } else {
        const response = await listDeckRelationship({
          deckId,
          relationship: "cards",
          sessionId,
          includeRelationships: true,
        });
        items = extractItems(response);
      }
    } catch (error) {
      items = [];
    }
  }

  return { items, deckIdentity };
}

async function normalizeAsset({ relationship, item, sessionId, fileCache }) {
  if (!item || !item.id) {
    return null;
  }

  const { fileIds, directUrls, previews } = extractFileReferences(item);
  const fileDetails = [];
  const imageUrls = new Set(directUrls);
  const previewUrls = new Set(previews);

  for (const fileId of fileIds) {
    const file = await getFile({ fileId, sessionId, fileCache });
    if (!file) {
      continue;
    }
    if (file.file_uri) {
      imageUrls.add(file.file_uri);
    }
    if (file.preview_uri) {
      previewUrls.add(file.preview_uri);
    }
    fileDetails.push(pickFileDetails(file));
  }

  if (imageUrls.size === 0 && previewUrls.size === 0) {
    return null;
  }

  const imageUrl = imageUrls.values().next().value || previewUrls.values().next().value;
  const dpi = resolveDpi(fileDetails) || 0;

  return {
    tgc_asset_id: item.id,
    asset_type: item.object_type || relationship,
    image_url: imageUrl,
    dpi,
    metadata: {
      relationship,
      image_urls: Array.from(imageUrls),
      preview_urls: Array.from(previewUrls),
      file_ids: Array.from(fileIds),
      files: fileDetails,
      source: item,
    },
  };
}

function extractFileReferences(item) {
  const fileIds = new Set();
  const directUrls = new Set();
  const previews = new Set();

  for (const [key, value] of Object.entries(item)) {
    if (typeof value === "string") {
      if (key.endsWith("_uri") && value.startsWith("http")) {
        directUrls.add(value);
      } else if (key.endsWith("_id") && !EXCLUDED_ID_FIELDS.has(key)) {
        fileIds.add(value);
      }
      continue;
    }

    if (Array.isArray(value)) {
      for (const entry of value) {
        collectFileFromObject(entry, fileIds, directUrls, previews);
      }
      continue;
    }

    if (value && typeof value === "object") {
      collectFileFromObject(value, fileIds, directUrls, previews);
    }
  }

  return { fileIds, directUrls, previews };
}

function collectFileFromObject(value, fileIds, directUrls, previews) {
  if (!value || typeof value !== "object") {
    return;
  }
  if (typeof value.file_uri === "string" && value.file_uri.startsWith("http")) {
    directUrls.add(value.file_uri);
  }
  if (typeof value.preview_uri === "string" && value.preview_uri.startsWith("http")) {
    previews.add(value.preview_uri);
  }
  if (typeof value.id === "string" && value.object_type === "file") {
    fileIds.add(value.id);
  }
}

async function getFile({ fileId, sessionId, fileCache }) {
  if (fileCache.has(fileId)) {
    return fileCache.get(fileId);
  }
  try {
    const file = await fetchFile({ fileId, sessionId });
    fileCache.set(fileId, file);
    return file;
  } catch (error) {
    fileCache.set(fileId, null);
    return null;
  }
}

function pickFileDetails(file) {
  return {
    id: file.id,
    name: file.name,
    file_uri: file.file_uri,
    preview_uri: file.preview_uri,
    details: file.details,
    metadata: file.metadata || {},
  };
}

function resolveDpi(fileDetails) {
  for (const file of fileDetails) {
    const metadata = file.metadata || {};
    if (typeof metadata.dpi === "number") {
      return metadata.dpi;
    }
    if (typeof metadata.dpi === "string" && Number.isFinite(Number(metadata.dpi))) {
      return Number(metadata.dpi);
    }
    if (typeof metadata.resolution === "string") {
      const match = metadata.resolution.match(/(\d{2,4})\s*dpi/i);
      if (match) {
        return Number(match[1]);
      }
    }
  }
  return null;
}
