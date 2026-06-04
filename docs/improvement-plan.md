Reviewed server-side code only. Ranked highest impact to lowest:

1. Stop syncing TGC games on every GET /games
   /C:/Users/Mike Wokasch/game-art-test/game-art-test/server/routes/games.js:125 fans out to TGC user, designer,
   designer games, game detail, designer detail, file detail, then writes games every request. This should be
   split into cached/dashboard read vs explicit refresh. Store last_synced_at or use a short TTL cache so normal
   dashboard loads hit MySQL only.
2. Reduce TGC API fan-out in game discovery
   /C:/Users/Mike Wokasch/game-art-test/game-art-test/server/services/tgcAssets.js:30 walks relationships
   serially and may fetch deck/card/file details one at a time. Add bounded concurrency, persist file/deck
   metadata between refreshes, and avoid fetching relationship URLs when embedded relationship items already
   contain usable file URLs.
3. Replace repeated global vote-count aggregate subqueries
   /C:/Users/Mike Wokasch/game-art-test/game-art-test/server/db/tests.js:73, /C:/Users/Mike Wokasch/game-art-
   test/game-art-test/server/db/tests.js:110, and /C:/Users/Mike Wokasch/game-art-test/game-art-test/server/db/
   tests.js:154 repeatedly compute vote counts via derived tables over test_assets and votes. Add indexed
   summary fields or a materialized test_asset_vote_counts table, or at minimum restrict subqueries to the user/
   game/test scope before grouping.
4. Eliminate per-auth-request session writes
   /C:/Users/Mike Wokasch/game-art-test/game-art-test/server/middleware/auth.js:15 calls touchSession for every
   authenticated request. That turns every asset/test/dashboard poll into a DB write. Update last_seen_at only
   if stale, for example every 5-15 minutes, or move it to a background/batched update.
5. Move duplicate-vote prevention out of process memory
   /C:/Users/Mike Wokasch/game-art-test/game-art-test/server/services/testerVoteRegistry.js:1 keeps an unbounded
   process-local Map. It leaks memory over time, fails across multiple Node processes, and resets on deploy.
   Persist tester_uuid or a hashed tester identity on votes with a uniqueness constraint per test_asset_id.
6. Collapse vote submission query sequence
   /C:/Users/Mike Wokasch/game-art-test/game-art-test/server/routes/tester.js:58 does test lookup, asset lookup,
   vote count, insert, then completion aggregate. This can become a transaction with one scoped eligibility
   query and one conditional insert. Completion can update only when the just-voted asset reaches the threshold
   instead of recomputing the whole test every vote.
7. Optimize /t/:uuid/next candidate loading
   /C:/Users/Mike Wokasch/game-art-test/game-art-test/server/routes/tester.js:126 loads all under-voted
   candidates, parses all metadata JSON, filters in JS, then randomly chooses one. Push downloadable filtering,
   tester exclusion, and random selection into SQL where possible, and fetch only one candidate plus lightweight
   progress counts.
8. Add real indexes and constraints
   /C:/Users/Mike Wokasch/game-art-test/game-art-test/sql/datamodel.sql:1 defines primary keys only. The current
   query patterns need indexes on UUIDs, foreign keys, and joins: user_sessions.uuid, users.tgc_user_id,
   games(user_id, uuid), games(user_id, tgc_game_id), assets(game_id, uuid), assets(game_id, tgc_asset_id,
   asset_type), tests(user_id, uuid), tests(user_id, game_id, status), test_assets(test_id, asset_id),
   votes(test_asset_id). This is likely a major DB performance win, but schema changes require explicit
   instruction per AGENTS.md.
9. Batch game and asset upserts
   /C:/Users/Mike Wokasch/game-art-test/game-art-test/server/db/games.js:20 and /C:/Users/Mike Wokasch/game-art-
   test/game-art-test/server/db/assets.js:44 update/insert rows one at a time. Use bulk INSERT ... ON DUPLICATE
   KEY UPDATE once proper unique keys exist.
10. Avoid proxying image bytes through Node when not required
    /C:/Users/Mike Wokasch/game-art-test/game-art-test/server/routes/imageProxy.js:9 streams remote S3 images
    through the app process. Prefer signed/direct TGC/S3 URLs where safe, or put CDN/reverse-proxy caching in
    front. If proxying stays, forward ETag/Last-Modified, support conditional requests, and consider longer
    immutable cache headers.
11. Reduce duplicate static middleware mounts
    /C:/Users/Mike Wokasch/game-art-test/game-art-test/server/app.js:23 mounts all routes at both root and
    APP_BASE_PATH when configured. If deployed only under one base path, avoid the double route/static stack.
12. Tune MySQL pool size to deployment reality
    /C:/Users/Mike Wokasch/game-art-test/game-art-test/server/db/pool.js:9 hardcodes connectionLimit: 10. Make
    this env-configurable. For a small single-process app, fewer connections reduce DB memory footprint; for API
    fan-out fixes, the ideal limit may be lower than 10.

  Highest priority implementation sequence: cache/split TGC sync, add indexes, remove per-request session writes,
  and fix vote/progress aggregate queries. Those target the largest repeated costs without changing the frontend.
