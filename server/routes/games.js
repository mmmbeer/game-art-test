import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import {
  extractItems,
  fetchDesigner,
  fetchGame,
  fetchUser,
  listDesignerGames,
} from "../services/tgcClient.js";
import { getGameByUuidForUser, getGamesByUserId, syncGamesForUser } from "../db/games.js";
import { discoverGameAssets } from "../services/tgcAssets.js";
import { getAssetsByGameId, upsertAssetsForGame } from "../db/assets.js";
import { createDeterministicUuid } from "../utils/uuid.js";

const router = Router();

function extractRelationshipItems(userResult, key) {
  const relationships = userResult?.relationships || userResult?.relationship || {};
  const rel = relationships?.[key];
  if (!rel) {
    return [];
  }
  if (Array.isArray(rel.items)) {
    return rel.items;
  }
  if (Array.isArray(rel)) {
    return rel;
  }
  return [];
}

function normalizeGames(gameItems) {
  return gameItems
    .map((game) => ({
      tgc_game_id: game.id,
      name: (game.name || "").trim(),
    }))
    .filter((game) => game.tgc_game_id && game.name);
}

function ensureGameDesignerId(game, designerId) {
  if (!game) {
    return null;
  }
  const updated = { ...game };
  if (!updated.designer_id && designerId) {
    updated.designer_id = designerId;
  }
  return updated;
}

async function hydrateGameDesignerId(game, sessionId) {
  if (game.designer_id) {
    return game;
  }
  const detail = await fetchGame({ gameId: game.id, sessionId });
  return {
    ...game,
    designer_id: detail?.designer_id || null,
  };
}

async function buildDesignerMap(designerItems, sessionId) {
  const map = new Map();
  for (const designer of designerItems) {
    if (!designer?.id) {
      continue;
    }
    const existing = map.get(designer.id);
    if (existing) {
      continue;
    }
    let name = (designer.name || "").trim();
    if (!name) {
      try {
        const detail = await fetchDesigner({ designerId: designer.id, sessionId });
        name = (detail?.name || "").trim();
      } catch (error) {
        name = `Designer ${designer.id}`;
      }
    }
    map.set(designer.id, {
      uuid: createDeterministicUuid(`designer:${designer.id}`),
      tgc_designer_id: designer.id,
      name,
    });
  }
  return map;
}

async function addMissingDesigners(designerMap, games, sessionId) {
  for (const game of games) {
    if (!game?.designer_id || designerMap.has(game.designer_id)) {
      continue;
    }
    let name = "";
    try {
      const detail = await fetchDesigner({ designerId: game.designer_id, sessionId });
      name = (detail?.name || "").trim();
    } catch (error) {
      name = "";
    }
    designerMap.set(game.designer_id, {
      uuid: createDeterministicUuid(`designer:${game.designer_id}`),
      tgc_designer_id: game.designer_id,
      name: name || `Designer ${game.designer_id}`,
    });
  }
}

router.get("/", requireAuth, async (req, res) => {
  const { tgcSessionId, user } = req.auth;

  try {
    const userResult = await fetchUser({
      tgcUserId: user.tgcUserId,
      sessionId: tgcSessionId,
      includeRelationships: true,
    });

    const designers = extractRelationshipItems(userResult, "designers");
    const designerMap = await buildDesignerMap(designers, tgcSessionId);
    const designerGames = [];

    for (const designer of designers) {
      if (!designer?.id) {
        continue;
      }
      const response = await listDesignerGames({
        designerId: designer.id,
        sessionId: tgcSessionId,
      });
      const items = extractItems(response).map((game) => ensureGameDesignerId(game, designer.id));
      designerGames.push(...items);
    }

    let gameItems = extractRelationshipItems(userResult, "games");
    if (gameItems.length === 0 && Array.isArray(userResult.games)) {
      gameItems = userResult.games;
    }

    const hydratedGames = [];
    for (const game of gameItems) {
      if (!game?.id) {
        continue;
      }
      hydratedGames.push(await hydrateGameDesignerId(game, tgcSessionId));
    }

    const combinedMap = new Map();
    for (const game of [...designerGames, ...hydratedGames]) {
      if (!game?.id) {
        continue;
      }
      combinedMap.set(game.id, game);
    }
    await addMissingDesigners(designerMap, combinedMap.values(), tgcSessionId);

    const normalized = normalizeGames(Array.from(combinedMap.values()));
    await syncGamesForUser(user.id, normalized);

    const storedGames = await getGamesByUserId(user.id);
    const gameDesignerMap = new Map(
      Array.from(combinedMap.values()).map((game) => [game.id, game.designer_id || null])
    );
    const designersPayload = Array.from(designerMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return res.status(200).json({
      user: {
        uuid: user.uuid,
        display_name: user.displayName,
      },
      designers: designersPayload.map((designer) => ({
        uuid: designer.uuid,
        name: designer.name,
      })),
      games: storedGames.map((game) => ({
        uuid: game.uuid,
        name: game.name,
        designer_uuid: resolveDesignerUuid(gameDesignerMap.get(game.tgc_game_id), designerMap),
      })),
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Failed to fetch games" });
  }
});

router.get("/:uuid/assets", requireAuth, async (req, res) => {
  const { tgcSessionId, user } = req.auth;
  const gameUuid = req.params.uuid;

  try {
    const game = await getGameByUuidForUser({ userId: user.id, gameUuid });
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }

    const discoveredAssets = await discoverGameAssets({
      tgcGameId: game.tgc_game_id,
      sessionId: tgcSessionId,
    });
    await upsertAssetsForGame(game.id, discoveredAssets);

    const storedAssets = await getAssetsByGameId(game.id);
    const grouped = groupAssetsByType(storedAssets);

    return res.status(200).json({
      game: {
        uuid: game.uuid,
        name: game.name,
      },
      asset_types: grouped.types,
      assets: grouped.assets,
      assets_by_type: grouped.assetsByType,
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Failed to fetch assets" });
  }
});

export default router;

function resolveDesignerUuid(tgcDesignerId, designerMap) {
  if (!tgcDesignerId) {
    return null;
  }
  return designerMap.get(tgcDesignerId)?.uuid || createDeterministicUuid(`designer:${tgcDesignerId}`);
}

function groupAssetsByType(assets) {
  const assetsByType = {};
  for (const asset of assets) {
    if (!assetsByType[asset.asset_type]) {
      assetsByType[asset.asset_type] = [];
    }
    assetsByType[asset.asset_type].push(asset);
  }
  const types = Object.entries(assetsByType).map(([type, items]) => ({
    type,
    count: items.length,
  }));
  return { assetsByType, assets, types };
}
