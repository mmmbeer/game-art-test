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
