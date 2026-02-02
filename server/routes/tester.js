import { Router } from "express";
import path from "path";
import env from "../config/env.js";
import {
  getTestByUuid,
  getTestAssetTotals,
  getTestAssetCandidates,
  getTestAssetId,
  getVoteCountForTestAsset,
  insertVote,
} from "../db/tester.js";
import { completeTestIfSatisfied } from "../db/tests.js";
import { resolveOverlayUrl } from "../services/overlay.js";
import { isDownloadableAsset } from "../services/assetRules.js";

const router = Router();
const publicFile = path.resolve(process.cwd(), "public", "tester.html");

router.get("/:uuid/next", async (req, res) => {
  return handleNextAsset(req, res, []);
});

router.post("/:uuid/next", async (req, res) => {
  const exclude = Array.isArray(req.body?.exclude_asset_uuids)
    ? req.body.exclude_asset_uuids.map((value) => String(value))
    : [];
  return handleNextAsset(req, res, exclude);
});

router.post("/:uuid/vote", async (req, res) => {
  const testUuid = String(req.params.uuid || "");
  const assetUuid = String(req.body?.asset_uuid || "");
  const professionalism = Number.parseInt(req.body?.professionalism, 10);
  const appeal = Number.parseInt(req.body?.appeal, 10);
  const understandability = Number.parseInt(req.body?.understandability, 10);
  const comment = typeof req.body?.comment === "string" ? req.body.comment.trim() : "";
  const commentMarks = normalizeCommentMarks(req.body?.comment_marks, comment);

  if (!testUuid || !assetUuid) {
    return res.status(400).json({ error: "Invalid vote request." });
  }

  if (![professionalism, appeal, understandability].every((value) => value >= 1 && value <= 5)) {
    return res.status(400).json({ error: "Ratings must be between 1 and 5." });
  }

  try {
    const test = await getTestByUuid(testUuid);
    if (!test) {
      return res.status(404).json({ error: "Test not found." });
    }
    if (test.status !== "active") {
      return res.status(409).json({ error: "This test is not accepting votes." });
    }

    const testAssetId = await getTestAssetId({ testUuid, assetUuid });
    if (!testAssetId) {
      return res.status(404).json({ error: "Asset not found in this test." });
    }

    const minVotes = env.tester.minVotesPerAsset;
    const voteCount = await getVoteCountForTestAsset(testAssetId);
    if (voteCount >= minVotes) {
      return res.status(409).json({ error: "This asset already has enough votes." });
    }

    await insertVote({
      testAssetId,
      professionalism,
      appeal,
      understandability,
      comment,
      commentMarks,
    });

    await completeTestIfSatisfied({ testId: test.id, minVotes });

    return res.status(201).json({
      status: "recorded",
      next_vote_count: voteCount + 1,
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Unable to record vote." });
  }
});

router.get("/:uuid", async (req, res) => {
  if (!req.originalUrl.endsWith("/")) {
    return res.redirect(308, `${req.originalUrl}/`);
  }
  return res.sendFile(publicFile);
});

export default router;

async function handleNextAsset(req, res, excludeAssetUuids) {
  const testUuid = String(req.params.uuid || "");
  if (!testUuid) {
    return res.status(400).json({ error: "Test is required." });
  }

  try {
    const test = await getTestByUuid(testUuid);
    if (!test) {
      return res.status(404).json({ error: "Test not found." });
    }
    if (test.status !== "active") {
      return res.status(409).json({ error: "This test is not active." });
    }

    const minVotes = env.tester.minVotesPerAsset;
    const candidates = await getTestAssetCandidates({ testUuid, minVotes });
    const eligibleCandidates = candidates.filter(
      (asset) => !isDownloadableAsset(asset)
    );
    const totalAssets = await getTestAssetTotals(testUuid);
    const filtered = eligibleCandidates.filter(
      (asset) => !excludeAssetUuids.includes(asset.asset_uuid)
    );

    if (!filtered.length) {
      return res.status(200).json({
        done: true,
        test: {
          uuid: test.uuid,
          status: test.status,
          game_name: test.game_name,
          designer_name: test.designer_name,
        },
        progress: {
          total_assets: totalAssets,
          remaining_assets: eligibleCandidates.length,
          min_votes: minVotes,
        },
      });
    }

    const selection = filtered[Math.floor(Math.random() * filtered.length)];
    const overlayUrl = resolveOverlayUrl(selection);
    return res.status(200).json({
      test: {
        uuid: test.uuid,
        status: test.status,
        game_name: test.game_name,
        designer_name: test.designer_name,
      },
      asset: {
        uuid: selection.asset_uuid,
        asset_type: selection.asset_type,
        image_url: selection.image_url,
        overlay_url: overlayUrl,
        dpi: selection.dpi,
        metadata: selection.metadata,
        vote_count: selection.vote_count,
      },
      progress: {
        total_assets: totalAssets,
        remaining_assets: eligibleCandidates.length,
        min_votes: minVotes,
      },
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || "Unable to load asset." });
  }
}

function normalizeCommentMarks(input, comment) {
  if (!comment) {
    return [];
  }
  if (!Array.isArray(input)) {
    return [];
  }
  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return input
    .map((mark) => ({
      id: typeof mark?.id === "string" ? mark.id : "",
      x: Number(mark?.x),
      y: Number(mark?.y),
      color: typeof mark?.color === "string" ? mark.color : "",
    }))
    .filter(
      (mark) =>
        uuidPattern.test(mark.id) &&
        Number.isFinite(mark.x) &&
        Number.isFinite(mark.y) &&
        mark.x >= 0 &&
        mark.x <= 1 &&
        mark.y >= 0 &&
        mark.y <= 1 &&
        mark.color.length > 0
    )
    .slice(0, 40);
}
