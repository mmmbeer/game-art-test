import { randomUUID } from "crypto";
import pool from "./pool.js";

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
  const [existingRows] = await pool.query(
    "SELECT id, tgc_game_id FROM games WHERE user_id = ?",
    [userId]
  );
  const existingMap = new Map(existingRows.map((row) => [row.tgc_game_id, row.id]));

  for (const game of games) {
    const existingId = existingMap.get(game.tgc_game_id);
    if (existingId) {
      await pool.query("UPDATE games SET name = ? WHERE id = ?", [game.name, existingId]);
      continue;
    }

    await pool.query(
      "INSERT INTO games (uuid, tgc_game_id, user_id, name) VALUES (?, ?, ?, ?)",
      [randomUUID(), game.tgc_game_id, userId, game.name]
    );
  }
}
