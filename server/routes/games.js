import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { fetchUser, listDesignerGames, extractItems } from "../services/tgcClient.js";
import { getGamesByUserId, syncGamesForUser } from "../db/games.js";

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

router.get("/", requireAuth, async (req, res) => {
  const { tgcSessionId, user } = req.auth;

  try {
    const userResult = await fetchUser({
      tgcUserId: user.tgcUserId,
      sessionId: tgcSessionId,
      includeRelationships: true,
    });

    let gameItems = extractRelationshipItems(userResult, "games");
    if (gameItems.length === 0 && Array.isArray(userResult.games)) {
      gameItems = userResult.games;
    }

    if (gameItems.length === 0) {
      const designers = extractRelationshipItems(userResult, "designers");
      const designerGames = [];
      for (const designer of designers) {
        const response = await listDesignerGames({
          designerId: designer.id,
          sessionId: tgcSessionId,
        });
        designerGames.push(...extractItems(response));
      }
      gameItems = designerGames;
    }

    const normalized = normalizeGames(gameItems);
    await syncGamesForUser(user.id, normalized);

    const storedGames = await getGamesByUserId(user.id);

    return res.status(200).json({
      user: {
        uuid: user.uuid,
        display_name: user.displayName,
      },
      games: storedGames.map((game) => ({
        uuid: game.uuid,
        name: game.name,
      })),
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Failed to fetch games" });
  }
});

export default router;