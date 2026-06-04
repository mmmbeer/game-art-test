import { randomUUID } from "crypto";
import pool from "./pool.js";

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
  const [existingRows] = await pool.query(
    "SELECT id, tgc_asset_id, asset_type FROM assets WHERE game_id = ?",
    [gameId]
  );
  const existingMap = new Map(
    existingRows.map((row) => [`${row.tgc_asset_id}:${row.asset_type}`, row.id])
  );

  for (const asset of assets) {
    const key = `${asset.tgc_asset_id}:${asset.asset_type}`;
    const existingId = existingMap.get(key);
    const metadata = JSON.stringify(asset.metadata || {});
    if (existingId) {
      await pool.query(
        "UPDATE assets SET image_url = ?, dpi = ?, metadata = ? WHERE id = ?",
        [asset.image_url, asset.dpi, metadata, existingId]
      );
      continue;
    }

    await pool.query(
      "INSERT INTO assets (uuid, tgc_asset_id, game_id, asset_type, image_url, dpi, metadata) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        randomUUID(),
        asset.tgc_asset_id,
        gameId,
        asset.asset_type,
        asset.image_url,
        asset.dpi,
        metadata,
      ]
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
