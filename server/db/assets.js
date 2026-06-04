import { randomUUID } from "crypto";
import pool from "./pool.js";

const UPSERT_BATCH_SIZE = 250;

export async function getAssetsByGameId(gameId) {
  const [rows] = await pool.query(
    "SELECT uuid, tgc_asset_id, asset_type, image_url, dpi, metadata FROM assets WHERE game_id = ? ORDER BY asset_type, id",
    [gameId]
  );
  return rows.map((row) => ({
    ...row,
    metadata: parseJson(row.metadata),
  }));
}

export async function getAssetsByGameIdWithIds(gameId) {
  const [rows] = await pool.query(
    "SELECT id, uuid, tgc_asset_id, asset_type, image_url, dpi, metadata FROM assets WHERE game_id = ? ORDER BY asset_type, id",
    [gameId]
  );
  return rows.map((row) => ({
    ...row,
    metadata: parseJson(row.metadata),
  }));
}

export async function getAssetsByUuidsForGameId(gameId, uuids) {
  if (!Array.isArray(uuids) || uuids.length === 0) {
    return [];
  }
  const placeholders = uuids.map(() => "?").join(", ");
  const [rows] = await pool.query(
    `SELECT id, uuid, tgc_asset_id, asset_type, image_url, dpi, metadata
     FROM assets
     WHERE game_id = ? AND uuid IN (${placeholders})
     ORDER BY asset_type, id`,
    [gameId, ...uuids]
  );
  return rows.map((row) => ({
    ...row,
    metadata: parseJson(row.metadata),
  }));
}

export async function upsertAssetsForGame(gameId, assets) {
  if (!Array.isArray(assets) || assets.length === 0) {
    return;
  }
  const rows = assets.map((asset) => [
    randomUUID(),
    asset.tgc_asset_id,
    gameId,
    asset.asset_type,
    asset.image_url,
    asset.dpi,
    JSON.stringify(asset.metadata || {}),
  ]);
  for (const batch of chunk(rows, UPSERT_BATCH_SIZE)) {
    await pool.query(
      `INSERT INTO assets
        (uuid, tgc_asset_id, game_id, asset_type, image_url, dpi, metadata)
       VALUES ?
       ON DUPLICATE KEY UPDATE
         image_url = VALUES(image_url),
         dpi = VALUES(dpi),
         metadata = VALUES(metadata)`,
      [batch]
    );
  }
}

export async function getAssetSummaryByUserId(userId) {
  const [totalRows] = await pool.query(
    "SELECT g.id AS game_id, COUNT(a.id) AS asset_count FROM games g LEFT JOIN assets a ON a.game_id = g.id WHERE g.user_id = ? GROUP BY g.id",
    [userId]
  );
  const [typeRows] = await pool.query(
    "SELECT g.id AS game_id, a.asset_type, COUNT(*) AS asset_count FROM games g JOIN assets a ON a.game_id = g.id WHERE g.user_id = ? GROUP BY g.id, a.asset_type",
    [userId]
  );

  const summary = new Map();
  for (const row of totalRows) {
    summary.set(row.game_id, {
      assetCount: Number(row.asset_count) || 0,
      typeCounts: {},
    });
  }
  for (const row of typeRows) {
    if (!summary.has(row.game_id)) {
      summary.set(row.game_id, { assetCount: 0, typeCounts: {} });
    }
    const entry = summary.get(row.game_id);
    entry.typeCounts[row.asset_type] = Number(row.asset_count) || 0;
  }
  return summary;
}

export async function getAssetPreviewByUserId(userId) {
  const [rows] = await pool.query(
    `SELECT g.id AS game_id, MIN(a.image_url) AS image_url
     FROM games g
     JOIN assets a ON a.game_id = g.id
     WHERE g.user_id = ?
     GROUP BY g.id`,
    [userId]
  );
  return new Map(rows.map((row) => [row.game_id, row.image_url || ""]));
}

function parseJson(value) {
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

function chunk(items, size) {
  const batches = [];
  for (let index = 0; index < items.length; index += size) {
    batches.push(items.slice(index, index + size));
  }
  return batches;
}
