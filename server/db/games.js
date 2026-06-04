import { randomUUID } from "crypto";
import pool from "./pool.js";

const UPSERT_BATCH_SIZE = 500;

export async function getGamesByUserId(userId) {
  const [rows] = await pool.query(
    "SELECT id, uuid, tgc_game_id, name FROM games WHERE user_id = ? ORDER BY name",
    [userId]
  );
  return rows;
}

export async function getGameByUuidForUser({ userId, gameUuid }) {
  const [rows] = await pool.query(
    "SELECT id, uuid, tgc_game_id, name FROM games WHERE user_id = ? AND uuid = ?",
    [userId, gameUuid]
  );
  return rows[0] || null;
}

export async function syncGamesForUser(userId, games) {
  if (!Array.isArray(games) || games.length === 0) {
    return;
  }
  const rows = games.map((game) => [randomUUID(), game.tgc_game_id, userId, game.name]);
  for (const batch of chunk(rows, UPSERT_BATCH_SIZE)) {
    await pool.query(
      `INSERT INTO games (uuid, tgc_game_id, user_id, name)
       VALUES ?
       ON DUPLICATE KEY UPDATE name = VALUES(name)`,
      [batch]
    );
  }
}

function chunk(items, size) {
  const batches = [];
  for (let index = 0; index < items.length; index += size) {
    batches.push(items.slice(index, index + size));
  }
  return batches;
}
