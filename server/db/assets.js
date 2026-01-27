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
