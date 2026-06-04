ALTER TABLE users
  ADD UNIQUE KEY uq_users_uuid (uuid),
  ADD UNIQUE KEY uq_users_tgc_user_id (tgc_user_id);

ALTER TABLE user_sessions
  ADD UNIQUE KEY uq_user_sessions_uuid (uuid),
  ADD INDEX idx_user_sessions_user_id (user_id);

ALTER TABLE games
  ADD UNIQUE KEY uq_games_uuid (uuid),
  ADD UNIQUE KEY uq_games_user_tgc_game (user_id, tgc_game_id),
  ADD INDEX idx_games_user_name (user_id, name);

ALTER TABLE assets
  ADD UNIQUE KEY uq_assets_uuid (uuid),
  ADD UNIQUE KEY uq_assets_game_tgc_type (game_id, tgc_asset_id, asset_type),
  ADD INDEX idx_assets_game_type_id (game_id, asset_type, id);

ALTER TABLE tests
  ADD UNIQUE KEY uq_tests_uuid (uuid),
  ADD INDEX idx_tests_user_uuid (user_id, uuid),
  ADD INDEX idx_tests_user_game_status_created (user_id, game_id, status, created_at),
  ADD INDEX idx_tests_status_created (status, created_at);

ALTER TABLE test_assets
  ADD UNIQUE KEY uq_test_assets_test_asset (test_id, asset_id),
  ADD INDEX idx_test_assets_test_order (test_id, order_index),
  ADD INDEX idx_test_assets_asset_id (asset_id);
