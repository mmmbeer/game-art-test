const testerVoteRegistry = new Map();

export function hasTesterVoted(testAssetId, testerUuid) {
  if (!testAssetId || !testerUuid) {
    return false;
  }
  const voters = testerVoteRegistry.get(testAssetId);
  return Boolean(voters && voters.has(testerUuid));
}

export function registerTesterVote(testAssetId, testerUuid) {
  if (!testAssetId || !testerUuid) {
    return;
  }
  let voters = testerVoteRegistry.get(testAssetId);
  if (!voters) {
    voters = new Set();
    testerVoteRegistry.set(testAssetId, voters);
  }
  voters.add(testerUuid);
}

export function filterCandidatesForTester(candidates, testerUuid) {
  if (!testerUuid) {
    return candidates;
  }
  return candidates.filter(
    (candidate) => !hasTesterVoted(candidate.test_asset_id, testerUuid)
  );
}
