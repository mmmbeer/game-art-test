import { Router } from "express";
import env from "../config/env.js";
import { requireAuth } from "../middleware/auth.js";
import { getGameByUuidForUser } from "../db/games.js";
import { getAssetsByGameIdWithIds, getAssetsByUuidsForGameId } from "../db/assets.js";
import { createTest, insertTestAssets } from "../db/tests.js";
import {
  buildTestPool,
  normalizeSelectedTypes,
  resolveSampleSize,
  sampleAssets,
} from "../services/testSelection.js";

const router = Router();

router.post("/preview", requireAuth, async (req, res) => {
  const selectedTypes = normalizeSelectedTypes(req.body?.asset_types);
  if (selectedTypes.length === 0) {
    return res.status(400).json({ error: "Select at least one asset type." });
  }

  const gameUuid = String(req.body?.game_uuid || "");
  const { user } = req.auth;

  try {
    const game = await getGameByUuidForUser({ userId: user.id, gameUuid });
    if (!game) {
      return res.status(404).json({ error: "Game not found." });
    }

    const assets = await getAssetsByGameIdWithIds(game.id);
    const { pool, meta } = buildTestPool({ assets, selectedTypes });
    const sampleSize = Math.min(resolveSampleSize(req.body?.sample_size), pool.length);
    const selection = sampleAssets(pool, sampleSize);

    return res.status(200).json({
      game: { uuid: game.uuid, name: game.name },
      selected_types: selectedTypes,
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
  const selectedTypes = normalizeSelectedTypes(req.body?.asset_types);
  const gameUuid = String(req.body?.game_uuid || "");
  const assetUuids = Array.isArray(req.body?.asset_uuids)
    ? req.body.asset_uuids.map((value) => String(value))
    : [];
  const { user } = req.auth;

  if (!gameUuid) {
    return res.status(400).json({ error: "Game is required." });
  }

  if (selectedTypes.length === 0 && assetUuids.length === 0) {
    return res.status(400).json({ error: "Select at least one asset type." });
  }

  try {
    const game = await getGameByUuidForUser({ userId: user.id, gameUuid });
    if (!game) {
      return res.status(404).json({ error: "Game not found." });
    }

    let selection = [];
    if (assetUuids.length > 0) {
      const assets = await getAssetsByUuidsForGameId(game.id, assetUuids);
      if (assets.length !== assetUuids.length) {
        return res.status(400).json({ error: "Invalid asset selection." });
      }
      const assetMap = new Map(assets.map((asset) => [asset.uuid, asset]));
      selection = assetUuids.map((uuid) => assetMap.get(uuid)).filter(Boolean);
    } else {
      const assets = await getAssetsByGameIdWithIds(game.id);
      const { pool } = buildTestPool({ assets, selectedTypes });
      const sampleSize = Math.min(resolveSampleSize(req.body?.sample_size), pool.length);
      selection = sampleAssets(pool, sampleSize);
    }

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
        public_url: buildPublicUrl(req, test.uuid),
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

function buildPublicUrl(req, testUuid) {
  const base = env.app.server
    ? env.app.server.replace(/\/$/, "")
    : `${req.protocol}://${req.get("host")}`;
  const basePath = env.app.basePath ? normalizeBasePath(env.app.basePath) : "";
  return `${base}${basePath}/t/${testUuid}`;
}

function normalizeBasePath(input) {
  if (!input) {
    return "";
  }
  let base = input.trim();
  if (!base.startsWith("/")) {
    base = `/${base}`;
  }
  if (base.length > 1 && base.endsWith("/")) {
    base = base.slice(0, -1);
  }
  return base;
}
