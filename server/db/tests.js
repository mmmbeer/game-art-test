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
