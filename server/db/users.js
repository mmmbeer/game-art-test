import { randomUUID } from "crypto";
import pool from "./pool.js";

export async function findUserByTgcId(tgcUserId) {
  const [rows] = await pool.query(
    "SELECT id, uuid, tgc_user_id, display_name FROM users WHERE tgc_user_id = ?",
    [tgcUserId]
  );
  return rows[0] || null;
}

export async function createUser({ tgcUserId, displayName }) {
  const uuid = randomUUID();
  await pool.query(
    "INSERT INTO users (uuid, tgc_user_id, display_name, created_at) VALUES (?, ?, ?, NOW())",
    [uuid, tgcUserId, displayName]
  );
  const [rows] = await pool.query(
    "SELECT id, uuid, tgc_user_id, display_name FROM users WHERE uuid = ?",
    [uuid]
  );
  return rows[0];
}

export async function updateUserDisplayName(id, displayName) {
  await pool.query("UPDATE users SET display_name = ? WHERE id = ?", [displayName, id]);
}