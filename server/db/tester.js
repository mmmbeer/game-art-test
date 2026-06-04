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

export async function getRandomTestAssetCandidates({
  testUuid,
  minVotes,
  testerUuid = "",
  excludeAssetUuids = [],
  limit = 12,
}) {
  const filteredExclude = Array.isArray(excludeAssetUuids)
    ? excludeAssetUuids.filter(Boolean).slice(0, 100)
    : [];
  const excludeSql = filteredExclude.length
    ? `AND assets.uuid NOT IN (${filteredExclude.map(() => "?").join(", ")})`
    : "";
  const testerVoteSql = testerUuid
    ? "LEFT JOIN votes tester_votes ON tester_votes.test_asset_id = test_assets.id AND tester_votes.tester_uuid = ?"
    : "";
  const testerHavingSql = testerUuid ? "AND COUNT(tester_votes.id) = 0" : "";
  const params = testerUuid
    ? [testerUuid, testUuid, ...filteredExclude, minVotes, limit]
    : [testUuid, ...filteredExclude, minVotes, limit];
  const [rows] = await pool.query(
    `SELECT
        test_assets.id AS test_asset_id,
        assets.uuid AS asset_uuid,
        assets.asset_type,
        assets.image_url,
        assets.dpi,
        assets.metadata,
        COUNT(votes.id) AS vote_count
     FROM tests
     JOIN test_assets ON test_assets.test_id = tests.id
     JOIN assets ON assets.id = test_assets.asset_id
     LEFT JOIN votes ON votes.test_asset_id = test_assets.id
     ${testerVoteSql}
     WHERE tests.uuid = ?
       ${excludeSql}
       AND assets.asset_type NOT LIKE '%download%'
       AND COALESCE(JSON_UNQUOTE(JSON_EXTRACT(assets.metadata, '$.relationship')), '') NOT LIKE '%download%'
       AND COALESCE(JSON_UNQUOTE(JSON_EXTRACT(assets.metadata, '$.source.object_type')), '') NOT LIKE '%download%'
       AND COALESCE(JSON_UNQUOTE(JSON_EXTRACT(assets.metadata, '$.source.type')), '') NOT LIKE '%download%'
     GROUP BY test_assets.id
     HAVING COUNT(votes.id) < ?
        ${testerHavingSql}
     ORDER BY RAND()
     LIMIT ?`,
    params
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

export async function getRemainingTestAssetCandidateCount({ testUuid, minVotes, testerUuid = "" }) {
  const testerVoteSql = testerUuid
    ? "LEFT JOIN votes tester_votes ON tester_votes.test_asset_id = test_assets.id AND tester_votes.tester_uuid = ?"
    : "";
  const testerHavingSql = testerUuid ? "AND COUNT(tester_votes.id) = 0" : "";
  const params = testerUuid ? [testerUuid, testUuid, minVotes] : [testUuid, minVotes];
  const [rows] = await pool.query(
    `SELECT COUNT(*) AS remaining_assets
     FROM (
       SELECT test_assets.id
       FROM tests
       JOIN test_assets ON test_assets.test_id = tests.id
       JOIN assets ON assets.id = test_assets.asset_id
       LEFT JOIN votes ON votes.test_asset_id = test_assets.id
       ${testerVoteSql}
       WHERE tests.uuid = ?
         AND assets.asset_type NOT LIKE '%download%'
         AND COALESCE(JSON_UNQUOTE(JSON_EXTRACT(assets.metadata, '$.relationship')), '') NOT LIKE '%download%'
         AND COALESCE(JSON_UNQUOTE(JSON_EXTRACT(assets.metadata, '$.source.object_type')), '') NOT LIKE '%download%'
         AND COALESCE(JSON_UNQUOTE(JSON_EXTRACT(assets.metadata, '$.source.type')), '') NOT LIKE '%download%'
       GROUP BY test_assets.id
       HAVING COUNT(votes.id) < ?
          ${testerHavingSql}
     ) candidates`,
    params
  );
  return Number(rows[0]?.remaining_assets || 0);
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

export async function recordVoteIfEligible({
  testUuid,
  assetUuid,
  testerUuid,
  minVotes,
  professionalism,
  appeal,
  understandability,
  comment,
  commentMarks,
}) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    const [assetRows] = await connection.query(
      `SELECT test_assets.id AS test_asset_id, tests.id AS test_id
       FROM tests
       JOIN test_assets ON test_assets.test_id = tests.id
       JOIN assets ON assets.id = test_assets.asset_id
       WHERE tests.uuid = ? AND assets.uuid = ? AND tests.status = 'active'
       LIMIT 1
       FOR UPDATE`,
      [testUuid, assetUuid]
    );
    const match = assetRows[0] || null;
    if (!match) {
      await connection.rollback();
      return { status: "missing" };
    }
    const [voteRows] = await connection.query(
      "SELECT COUNT(*) AS vote_count FROM votes WHERE test_asset_id = ?",
      [match.test_asset_id]
    );
    const voteCount = Number(voteRows[0]?.vote_count || 0);
    if (voteCount >= minVotes) {
      await connection.rollback();
      return { status: "full", voteCount };
    }

    const createdAt = new Date();
    try {
      await connection.query(
        `INSERT INTO votes
          (test_asset_id, tester_uuid, professionalism, appeal, understandability, comment, comment_marks, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          match.test_asset_id,
          testerUuid,
          professionalism,
          appeal,
          understandability,
          comment || null,
          commentMarks?.length ? JSON.stringify(commentMarks) : null,
          createdAt,
        ]
      );
    } catch (error) {
      if (isDuplicateVoteError(error)) {
        await connection.rollback();
        return { status: "duplicate", voteCount };
      }
      throw error;
    }

    await connection.commit();
    return {
      status: "recorded",
      testId: match.test_id,
      testAssetId: match.test_asset_id,
      voteCount,
      nextVoteCount: voteCount + 1,
      created_at: createdAt,
    };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
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

function isDuplicateVoteError(error) {
  return error?.code === "ER_DUP_ENTRY" || Number(error?.errno) === 1062;
}
