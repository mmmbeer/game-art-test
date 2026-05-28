import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { getGameByUuidForUser } from "../db/games.js";
import { getAssetsByGameIdWithIds, getAssetsByUuidsForGameId } from "../db/assets.js";
import {
  createTest,
  insertTestAssets,
  getTestsOverviewByUserId,
  getTestByUuidForUser,
  updateTestStatus,
  restartTest,
  getTestAssetProgressByTestId,
  getTestAssetsByTestId,
  getTestVotesByTestId,
  getPublicActiveTests,
} from "../db/tests.js";
import {
  buildTestPool,
  resolveSampleSize,
  sampleAssets,
} from "../services/testSelection.js";
import { buildPublicTestUrl } from "../utils/publicUrls.js";
import env from "../config/env.js";

const router = Router();

router.get("/public", async (req, res) => {
  try {
    const tests = await getPublicActiveTests({
      minVotes: env.tester.minVotesPerAsset,
      limit: 30,
    });
    return res.status(200).json({
      tests: tests.map((test) => ({
        uuid: test.uuid,
        status: test.status,
        created_at: test.created_at,
        game_name: test.game_name,
        designer_name: test.designer_name,
        total_assets: test.total_assets,
        completed_assets: test.completed_assets,
        total_votes: test.total_votes,
        public_url: buildPublicTestUrl(req, test.uuid),
      })),
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Unable to load public tests." });
  }
});

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

router.get("/overview", requireAuth, async (req, res) => {
  const { user } = req.auth;
  try {
    const tests = await getTestsOverviewByUserId({
      userId: user.id,
      minVotes: env.tester.minVotesPerAsset,
    });
    return res.status(200).json({
      min_votes_per_asset: env.tester.minVotesPerAsset,
      tests: tests.map((test) => {
        const progress =
          test.total_assets > 0
            ? Math.round((test.completed_assets / test.total_assets) * 100)
            : 0;
        return {
          uuid: test.uuid,
          status: test.status,
          created_at: test.created_at,
          stopped_at: test.stopped_at,
          game: {
            uuid: test.game_uuid,
            name: test.game_name,
          },
          total_assets: test.total_assets,
          completed_assets: test.completed_assets,
          remaining_assets: Math.max(test.total_assets - test.completed_assets, 0),
          total_votes: test.total_votes,
          progress_percent: progress,
          public_url: buildPublicTestUrl(req, test.uuid),
        };
      }),
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Unable to load tests." });
  }
});

router.get("/:uuid/status", requireAuth, async (req, res) => {
  const testUuid = String(req.params.uuid || "");
  const { user } = req.auth;
  if (!testUuid) {
    return res.status(400).json({ error: "Test is required." });
  }

  try {
    const test = await getTestByUuidForUser({ userId: user.id, testUuid });
    if (!test) {
      return res.status(404).json({ error: "Test not found." });
    }
    const assets = await getTestAssetProgressByTestId(test.id);
    const totalAssets = assets.length;
    const completedAssets = assets.filter(
      (asset) => asset.vote_count >= env.tester.minVotesPerAsset
    ).length;
    const totalVotes = assets.reduce((sum, asset) => sum + asset.vote_count, 0);
    const progress =
      totalAssets > 0 ? Math.round((completedAssets / totalAssets) * 100) : 0;

    return res.status(200).json({
      test: {
        uuid: test.uuid,
        status: test.status,
        created_at: test.created_at,
        stopped_at: test.stopped_at,
        game: {
          uuid: test.game_uuid,
          name: test.game_name,
        },
        public_url: buildPublicTestUrl(req, test.uuid),
      },
      progress: {
        total_assets: totalAssets,
        completed_assets: completedAssets,
        remaining_assets: Math.max(totalAssets - completedAssets, 0),
        total_votes: totalVotes,
        min_votes_per_asset: env.tester.minVotesPerAsset,
        progress_percent: progress,
      },
      assets: assets.map((asset) => ({
        uuid: asset.asset_uuid,
        asset_type: asset.asset_type,
        image_url: asset.image_url,
        dpi: asset.dpi,
        metadata: asset.metadata,
        vote_count: asset.vote_count,
        avg_professionalism: asset.avg_professionalism,
        avg_appeal: asset.avg_appeal,
        avg_understandability: asset.avg_understandability,
        last_vote_at: asset.last_vote_at,
      })),
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Unable to load test status." });
  }
});

router.get("/:uuid/results", requireAuth, async (req, res) => {
  const testUuid = String(req.params.uuid || "");
  const { user } = req.auth;
  if (!testUuid) {
    return res.status(400).json({ error: "Test is required." });
  }

  try {
    const test = await getTestByUuidForUser({ userId: user.id, testUuid });
    if (!test) {
      return res.status(404).json({ error: "Test not found." });
    }
    const assets = await getTestAssetsByTestId(test.id);
    const votes = await getTestVotesByTestId(test.id);
    return res.status(200).json({
      test: {
        uuid: test.uuid,
        status: test.status,
        created_at: test.created_at,
        stopped_at: test.stopped_at,
        game: {
          uuid: test.game_uuid,
          name: test.game_name,
        },
        min_votes_per_asset: env.tester.minVotesPerAsset,
        public_url: buildPublicTestUrl(req, test.uuid),
      },
      assets: assets.map((asset) => ({
        uuid: asset.asset_uuid,
        asset_type: asset.asset_type,
        image_url: asset.image_url,
        dpi: asset.dpi,
        metadata: asset.metadata,
      })),
      votes,
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Unable to load test results." });
  }
});

router.post("/:uuid/pause", requireAuth, async (req, res) => {
  const testUuid = String(req.params.uuid || "");
  const { user } = req.auth;
  if (!testUuid) {
    return res.status(400).json({ error: "Test is required." });
  }
  try {
    const test = await getTestByUuidForUser({ userId: user.id, testUuid });
    if (!test) {
      return res.status(404).json({ error: "Test not found." });
    }
    const stoppedAt = new Date();
    await updateTestStatus({ testId: test.id, status: "paused", stoppedAt });
    return res.status(200).json({
      status: "paused",
      stopped_at: stoppedAt,
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Unable to pause test." });
  }
});

router.post("/:uuid/resume", requireAuth, async (req, res) => {
  const testUuid = String(req.params.uuid || "");
  const { user } = req.auth;
  if (!testUuid) {
    return res.status(400).json({ error: "Test is required." });
  }
  try {
    const test = await getTestByUuidForUser({ userId: user.id, testUuid });
    if (!test) {
      return res.status(404).json({ error: "Test not found." });
    }
    await updateTestStatus({ testId: test.id, status: "active", stoppedAt: null });
    return res.status(200).json({
      status: "active",
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Unable to resume test." });
  }
});

router.post("/:uuid/restart", requireAuth, async (req, res) => {
  const testUuid = String(req.params.uuid || "");
  const { user } = req.auth;
  if (!testUuid) {
    return res.status(400).json({ error: "Test is required." });
  }
  try {
    const test = await getTestByUuidForUser({ userId: user.id, testUuid });
    if (!test) {
      return res.status(404).json({ error: "Test not found." });
    }
    await restartTest({ testId: test.id });
    return res.status(200).json({
      status: "active",
      reset_votes: true,
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Unable to restart test." });
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
