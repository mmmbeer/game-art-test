import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { getGameByUuidForUser } from "../db/games.js";
import { getAssetsByGameIdWithIds, getAssetsByUuidsForGameId } from "../db/assets.js";
import { createTest, insertTestAssets } from "../db/tests.js";
import {
  buildTestPool,
  resolveSampleSize,
  sampleAssets,
} from "../services/testSelection.js";
import { buildPublicTestUrl } from "../utils/publicUrls.js";

const router = Router();

router.post("/preview", requireAuth, async (req, res) => {
  const gameUuid = String(req.body?.game_uuid || "");
  const assetUuids = Array.isArray(req.body?.asset_uuids)
    ? req.body.asset_uuids.map((value) => String(value))
    : [];
  const { user } = req.auth;

  if (assetUuids.length === 0) {
    return res.status(400).json({ error: "Select at least one asset." });
  }

  try {
    const game = await getGameByUuidForUser({ userId: user.id, gameUuid });
    if (!game) {
      return res.status(404).json({ error: "Game not found." });
    }

    const assets = await getAssetsByGameIdWithIds(game.id);
    const selectedAssets = await getAssetsByUuidsForGameId(game.id, assetUuids);
    if (selectedAssets.length !== assetUuids.length) {
      return res.status(400).json({ error: "Invalid asset selection." });
    }
    const { pool, meta } = buildTestPool({ assets, selectedAssets });
    const sampleSize = Math.min(resolveSampleSize(req.body?.sample_size), pool.length);
    const selection = sampleAssets(pool, sampleSize);

    return res.status(200).json({
      game: { uuid: game.uuid, name: game.name },
      pool_count: pool.length,
      sample_size: sampleSize,
      meta,
      assets: selection.map((asset) => serializeAsset(asset)),
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Preview failed." });
  }
});

router.post("/start", requireAuth, async (req, res) => {
  const gameUuid = String(req.body?.game_uuid || "");
  const assetUuids = Array.isArray(req.body?.asset_uuids)
    ? req.body.asset_uuids.map((value) => String(value))
    : [];
  const { user } = req.auth;

  if (!gameUuid) {
    return res.status(400).json({ error: "Game is required." });
  }

  if (assetUuids.length === 0) {
    return res.status(400).json({ error: "Select at least one asset." });
  }

  try {
    const game = await getGameByUuidForUser({ userId: user.id, gameUuid });
    if (!game) {
      return res.status(404).json({ error: "Game not found." });
    }

    const assets = await getAssetsByGameIdWithIds(game.id);
    const selectedAssets = await getAssetsByUuidsForGameId(game.id, assetUuids);
    if (selectedAssets.length !== assetUuids.length) {
      return res.status(400).json({ error: "Invalid asset selection." });
    }
    const { pool } = buildTestPool({ assets, selectedAssets });
    const sampleSize = Math.min(resolveSampleSize(req.body?.sample_size), pool.length);
    const selection = sampleAssets(pool, sampleSize);

    if (selection.length === 0) {
      return res.status(400).json({ error: "No assets available for this selection." });
    }

    const test = await createTest({ userId: user.id, gameId: game.id, status: "active" });
    await insertTestAssets({ testId: test.id, assetIds: selection.map((asset) => asset.id) });

    return res.status(201).json({
      test: {
        uuid: test.uuid,
        status: test.status,
        created_at: test.created_at,
        public_url: buildPublicTestUrl(req, test.uuid),
      },
      assets: selection.map((asset) => serializeAsset(asset)),
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Test creation failed." });
  }
});

export default router;

function serializeAsset(asset) {
  return {
    uuid: asset.uuid,
    asset_type: asset.asset_type,
    image_url: asset.image_url,
    dpi: asset.dpi,
  };
}
