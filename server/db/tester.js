import pool from "./pool.js";

export async function getTestByUuid(testUuid) {
  const [rows] = await pool.query(
    `SELECT tests.id,
        tests.uuid,
        tests.status,
        games.name AS game_name,
        users.display_name AS designer_name
     FROM tests
     JOIN games ON games.id = tests.game_id
     JOIN users ON users.id = tests.user_id
     WHERE tests.uuid = ?
     LIMIT 1`,
    [testUuid]
  );
  return rows[0] || null;
}

export async function getTestAssetTotals(testUuid) {
  const [rows] = await pool.query(
    `SELECT COUNT(*) AS total_assets
     FROM tests
     JOIN test_assets ON test_assets.test_id = tests.id
     WHERE tests.uuid = ?`,
    [testUuid]
  );
  return rows[0]?.total_assets || 0;
}

export async function getTestAssetCandidates({ testUuid, minVotes, testerUuid = "" }) {
  const [rows] = await pool.query(
    `SELECT
        test_assets.id AS test_asset_id,
        assets.uuid AS asset_uuid,
        assets.asset_type,
        assets.image_url,
        assets.dpi,
        assets.metadata,
        COUNT(votes.id) AS vote_count
        ${testerUuid ? ", COUNT(tester_votes.id) AS tester_vote_count" : ""}
     FROM tests
     JOIN test_assets ON test_assets.test_id = tests.id
     JOIN assets ON assets.id = test_assets.asset_id
     LEFT JOIN votes ON votes.test_asset_id = test_assets.id
     ${
       testerUuid
         ? "LEFT JOIN votes tester_votes ON tester_votes.test_asset_id = test_assets.id AND tester_votes.tester_uuid = ?"
         : ""
     }
     WHERE tests.uuid = ?
     GROUP BY test_assets.id
     HAVING COUNT(votes.id) < ?
        ${testerUuid ? "AND COUNT(tester_votes.id) = 0" : ""}`,
    testerUuid ? [testerUuid, testUuid, minVotes] : [testUuid, minVotes]
  );

  return rows.map((row) => ({
    test_asset_id: row.test_asset_id,
    asset_uuid: row.asset_uuid,
    asset_type: row.asset_type,
    image_url: row.image_url,
    dpi: row.dpi,
    metadata: parseMetadata(row.metadata),
    vote_count: Number(row.vote_count || 0),
  }));
}

export async function getTestAssetId({ testUuid, assetUuid }) {
  const [rows] = await pool.query(
    `SELECT test_assets.id AS test_asset_id
     FROM tests
     JOIN test_assets ON test_assets.test_id = tests.id
     JOIN assets ON assets.id = test_assets.asset_id
     WHERE tests.uuid = ? AND assets.uuid = ?
     LIMIT 1`,
    [testUuid, assetUuid]
  );
  return rows[0]?.test_asset_id || null;
}

export async function getVoteCountForTestAsset(testAssetId) {
  const [rows] = await pool.query(
    "SELECT COUNT(*) AS vote_count FROM votes WHERE test_asset_id = ?",
    [testAssetId]
  );
  return Number(rows[0]?.vote_count || 0);
}

export async function hasTesterVotedForTestAsset({ testAssetId, testerUuid }) {
  if (!testAssetId || !testerUuid) {
    return false;
  }
  const [rows] = await pool.query(
    "SELECT 1 FROM votes WHERE test_asset_id = ? AND tester_uuid = ? LIMIT 1",
    [testAssetId, testerUuid]
  );
  return Boolean(rows[0]);
}

export async function insertVote({
  testAssetId,
  testerUuid,
  professionalism,
  appeal,
  understandability,
  comment,
  commentMarks,
}) {
  const createdAt = new Date();
  await pool.query(
    `INSERT INTO votes
      (test_asset_id, tester_uuid, professionalism, appeal, understandability, comment, comment_marks, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      testAssetId,
      testerUuid,
      professionalism,
      appeal,
      understandability,
      comment || null,
      commentMarks?.length ? JSON.stringify(commentMarks) : null,
      createdAt,
    ]
  );
  return { created_at: createdAt };
}

function parseMetadata(value) {
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
