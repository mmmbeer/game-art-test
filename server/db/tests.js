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
