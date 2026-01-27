import { randomUUID } from "crypto";
import pool from "./pool.js";

export async function createSession({ userId, tgcSessionId }) {
  const uuid = randomUUID();
  await pool.query(
    "INSERT INTO user_sessions (uuid, user_id, tgc_session_id, created_at, last_seen_at) VALUES (?, ?, ?, NOW(), NOW())",
    [uuid, userId, tgcSessionId]
  );
  return uuid;
}

export async function getSessionByUuid(sessionUuid) {
  const [rows] = await pool.query(
    "SELECT us.uuid, us.tgc_session_id, u.id AS user_id, u.uuid AS user_uuid, u.tgc_user_id, u.display_name " +
      "FROM user_sessions us JOIN users u ON us.user_id = u.id WHERE us.uuid = ?",
    [sessionUuid]
  );
  return rows[0] || null;
}

export async function touchSession(sessionUuid) {
  await pool.query("UPDATE user_sessions SET last_seen_at = NOW() WHERE uuid = ?", [sessionUuid]);
}