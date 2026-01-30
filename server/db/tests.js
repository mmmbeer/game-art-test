import { randomUUID } from "crypto";
import pool from "./pool.js";

export async function createTest({ userId, gameId, status }) {
  const uuid = randomUUID();
  const createdAt = new Date();
  const [result] = await pool.query(
    "INSERT INTO tests (uuid, user_id, game_id, status, created_at) VALUES (?, ?, ?, ?, ?)",
    [uuid, userId, gameId, status, createdAt]
  );
  return {
    id: result.insertId,
    uuid,
    status,
    created_at: createdAt,
  };
}

export async function insertTestAssets({ testId, assetIds }) {
  if (!Array.isArray(assetIds) || assetIds.length === 0) {
    return;
  }
  const rows = assetIds.map((assetId, index) => [testId, assetId, index]);
  await pool.query(
    "INSERT INTO test_assets (test_id, asset_id, order_index) VALUES ?",
    [rows]
  );
}

export async function getTestSummaryByUserId(userId) {
  const [rows] = await pool.query(
    `SELECT game_id,
        COUNT(*) AS test_count,
        SUM(status = 'active') AS active_count
     FROM tests
     WHERE user_id = ?
     GROUP BY game_id`,
    [userId]
  );
  const map = new Map();
  rows.forEach((row) => {
    map.set(row.game_id, {
      testCount: Number(row.test_count || 0),
      activeCount: Number(row.active_count || 0),
    });
  });
  return map;
}

export async function getActiveTestsByUserId(userId) {
  const [rows] = await pool.query(
    `SELECT id, uuid, game_id, status, created_at
     FROM tests
     WHERE user_id = ? AND status = 'active'
     ORDER BY created_at DESC`,
    [userId]
  );
  const map = new Map();
  rows.forEach((row) => {
    if (!map.has(row.game_id)) {
      map.set(row.game_id, []);
    }
    map.get(row.game_id).push({
      id: row.id,
      uuid: row.uuid,
      status: row.status,
      created_at: row.created_at,
    });
  });
  return map;
}

export async function getTestsWithProgressForGame({ userId, gameId, minVotes }) {
  const [rows] = await pool.query(
    `SELECT
        tests.id,
        tests.uuid,
        tests.status,
        tests.created_at,
        tests.stopped_at,
        COUNT(test_assets.id) AS total_assets,
        SUM(CASE WHEN COALESCE(vote_counts.vote_count, 0) >= ? THEN 1 ELSE 0 END) AS completed_assets,
        SUM(COALESCE(vote_counts.vote_count, 0)) AS total_votes
     FROM tests
     LEFT JOIN test_assets ON test_assets.test_id = tests.id
     LEFT JOIN (
        SELECT test_assets.id AS test_asset_id, COUNT(votes.id) AS vote_count
        FROM test_assets
        LEFT JOIN votes ON votes.test_asset_id = test_assets.id
        GROUP BY test_assets.id
     ) vote_counts ON vote_counts.test_asset_id = test_assets.id
     WHERE tests.user_id = ? AND tests.game_id = ?
     GROUP BY tests.id
     ORDER BY tests.created_at DESC`,
    [minVotes, userId, gameId]
  );

  return rows.map((row) => ({
    id: row.id,
    uuid: row.uuid,
    status: row.status,
    created_at: row.created_at,
    stopped_at: row.stopped_at,
    total_assets: Number(row.total_assets || 0),
    completed_assets: Number(row.completed_assets || 0),
    total_votes: Number(row.total_votes || 0),
  }));
}

export async function getTestsOverviewByUserId({ userId, minVotes }) {
  const [rows] = await pool.query(
    `SELECT
        tests.id,
        tests.uuid,
        tests.status,
        tests.created_at,
        tests.stopped_at,
        games.uuid AS game_uuid,
        games.name AS game_name,
        COUNT(test_assets.id) AS total_assets,
        SUM(CASE WHEN COALESCE(vote_counts.vote_count, 0) >= ? THEN 1 ELSE 0 END) AS completed_assets,
        SUM(COALESCE(vote_counts.vote_count, 0)) AS total_votes
     FROM tests
     JOIN games ON games.id = tests.game_id
     LEFT JOIN test_assets ON test_assets.test_id = tests.id
     LEFT JOIN (
        SELECT test_assets.id AS test_asset_id, COUNT(votes.id) AS vote_count
        FROM test_assets
        LEFT JOIN votes ON votes.test_asset_id = test_assets.id
        GROUP BY test_assets.id
     ) vote_counts ON vote_counts.test_asset_id = test_assets.id
     WHERE tests.user_id = ?
     GROUP BY tests.id
     ORDER BY tests.created_at DESC`,
    [minVotes, userId]
  );

  return rows.map((row) => ({
    id: row.id,
    uuid: row.uuid,
    status: row.status,
    created_at: row.created_at,
    stopped_at: row.stopped_at,
    game_uuid: row.game_uuid,
    game_name: row.game_name,
    total_assets: Number(row.total_assets || 0),
    completed_assets: Number(row.completed_assets || 0),
    total_votes: Number(row.total_votes || 0),
  }));
}

export async function getTestByUuidForUser({ userId, testUuid }) {
  const [rows] = await pool.query(
    `SELECT tests.id,
        tests.uuid,
        tests.status,
        tests.created_at,
        tests.stopped_at,
        games.id AS game_id,
        games.uuid AS game_uuid,
        games.name AS game_name
     FROM tests
     JOIN games ON games.id = tests.game_id
     WHERE tests.user_id = ? AND tests.uuid = ?
     LIMIT 1`,
    [userId, testUuid]
  );
  return rows[0] || null;
}

export async function updateTestStatus({ testId, status, stoppedAt }) {
  await pool.query(
    "UPDATE tests SET status = ?, stopped_at = ? WHERE id = ?",
    [status, stoppedAt || null, testId]
  );
}

export async function restartTest({ testId }) {
  await pool.query(
    `DELETE votes FROM votes
     JOIN test_assets ON test_assets.id = votes.test_asset_id
     WHERE test_assets.test_id = ?`,
    [testId]
  );
  await pool.query(
    "UPDATE tests SET status = 'active', stopped_at = NULL WHERE id = ?",
    [testId]
  );
}

export async function getTestAssetProgressByTestId(testId) {
  const [rows] = await pool.query(
    `SELECT
        test_assets.id AS test_asset_id,
        assets.uuid AS asset_uuid,
        assets.asset_type,
        assets.image_url,
        assets.dpi,
        assets.metadata,
        COUNT(votes.id) AS vote_count,
        AVG(votes.professionalism) AS avg_professionalism,
        AVG(votes.appeal) AS avg_appeal,
        AVG(votes.understandability) AS avg_understandability,
        MAX(votes.created_at) AS last_vote_at
     FROM test_assets
     JOIN assets ON assets.id = test_assets.asset_id
     LEFT JOIN votes ON votes.test_asset_id = test_assets.id
     WHERE test_assets.test_id = ?
     GROUP BY test_assets.id
     ORDER BY test_assets.order_index ASC`,
    [testId]
  );

  return rows.map((row) => ({
    test_asset_id: row.test_asset_id,
    asset_uuid: row.asset_uuid,
    asset_type: row.asset_type,
    image_url: row.image_url,
    dpi: row.dpi,
    metadata: parseMetadata(row.metadata),
    vote_count: Number(row.vote_count || 0),
    avg_professionalism: Number(row.avg_professionalism || 0),
    avg_appeal: Number(row.avg_appeal || 0),
    avg_understandability: Number(row.avg_understandability || 0),
    last_vote_at: row.last_vote_at || null,
  }));
}

export async function getTestAssetsByTestId(testId) {
  const [rows] = await pool.query(
    `SELECT
        assets.uuid AS asset_uuid,
        assets.asset_type,
        assets.image_url,
        assets.dpi,
        assets.metadata
     FROM test_assets
     JOIN assets ON assets.id = test_assets.asset_id
     WHERE test_assets.test_id = ?
     ORDER BY test_assets.order_index ASC`,
    [testId]
  );
  return rows.map((row) => ({
    asset_uuid: row.asset_uuid,
    asset_type: row.asset_type,
    image_url: row.image_url,
    dpi: row.dpi,
    metadata: parseMetadata(row.metadata),
  }));
}

export async function getTestVotesByTestId(testId) {
  const [rows] = await pool.query(
    `SELECT
        assets.uuid AS asset_uuid,
        votes.professionalism,
        votes.appeal,
        votes.understandability,
        votes.comment,
        votes.created_at
     FROM test_assets
     JOIN assets ON assets.id = test_assets.asset_id
     JOIN votes ON votes.test_asset_id = test_assets.id
     WHERE test_assets.test_id = ?
     ORDER BY votes.created_at DESC`,
    [testId]
  );
  return rows.map((row) => ({
    asset_uuid: row.asset_uuid,
    professionalism: Number(row.professionalism || 0),
    appeal: Number(row.appeal || 0),
    understandability: Number(row.understandability || 0),
    comment: row.comment || "",
    created_at: row.created_at,
  }));
}

export async function completeTestIfSatisfied({ testId, minVotes }) {
  const [rows] = await pool.query(
    `SELECT
        COUNT(test_assets.id) AS total_assets,
        SUM(CASE WHEN COALESCE(vote_counts.vote_count, 0) >= ? THEN 1 ELSE 0 END) AS completed_assets
     FROM test_assets
     LEFT JOIN (
        SELECT test_assets.id AS test_asset_id, COUNT(votes.id) AS vote_count
        FROM test_assets
        LEFT JOIN votes ON votes.test_asset_id = test_assets.id
        WHERE test_assets.test_id = ?
        GROUP BY test_assets.id
     ) vote_counts ON vote_counts.test_asset_id = test_assets.id
     WHERE test_assets.test_id = ?`,
    [minVotes, testId, testId]
  );

  const totalAssets = Number(rows[0]?.total_assets || 0);
  const completedAssets = Number(rows[0]?.completed_assets || 0);
  if (totalAssets > 0 && completedAssets >= totalAssets) {
    const stoppedAt = new Date();
    await pool.query(
      "UPDATE tests SET status = 'completed', stopped_at = ? WHERE id = ? AND status != 'completed'",
      [stoppedAt, testId]
    );
    return { completed: true, stopped_at: stoppedAt };
  }
  return { completed: false };
}

function parseMetadata(value) {
  if (!value) {
    return {};
  }
  if (typeof value === "object") {
    return value;
  }
  try {
    return JSON.parse(value);
  } catch (error) {
    return {};
  }
}
