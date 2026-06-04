CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  uuid CHAR(36) NOT NULL,
  tgc_user_id VARCHAR(64) NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  created_at DATETIME NOT NULL,
  UNIQUE KEY uq_users_uuid (uuid),
  UNIQUE KEY uq_users_tgc_user_id (tgc_user_id)
);

CREATE TABLE user_sessions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  uuid CHAR(36) NOT NULL,
  user_id INT NOT NULL,
  tgc_session_id VARCHAR(64) NOT NULL,
  created_at DATETIME NOT NULL,
  last_seen_at DATETIME NOT NULL,
  UNIQUE KEY uq_user_sessions_uuid (uuid),
  INDEX idx_user_sessions_user_id (user_id)
);

CREATE TABLE games (
  id INT AUTO_INCREMENT PRIMARY KEY,
  uuid CHAR(36) NOT NULL,
  tgc_game_id VARCHAR(64) NOT NULL,
  user_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  UNIQUE KEY uq_games_uuid (uuid),
  UNIQUE KEY uq_games_user_tgc_game (user_id, tgc_game_id),
  INDEX idx_games_user_name (user_id, name)
);

CREATE TABLE assets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  uuid CHAR(36) NOT NULL,
  tgc_asset_id VARCHAR(64) NOT NULL,
  game_id INT NOT NULL,
  asset_type VARCHAR(64) NOT NULL,
  image_url TEXT NOT NULL,
  dpi INT NOT NULL,
  metadata JSON NOT NULL,
  UNIQUE KEY uq_assets_uuid (uuid),
  UNIQUE KEY uq_assets_game_tgc_type (game_id, tgc_asset_id, asset_type),
  INDEX idx_assets_game_type_id (game_id, asset_type, id)
);

CREATE TABLE tests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  uuid CHAR(36) NOT NULL,
  user_id INT NOT NULL,
  game_id INT NOT NULL,
  status VARCHAR(32) NOT NULL,
  created_at DATETIME NOT NULL,
  stopped_at DATETIME NULL,
  UNIQUE KEY uq_tests_uuid (uuid),
  INDEX idx_tests_user_uuid (user_id, uuid),
  INDEX idx_tests_user_game_status_created (user_id, game_id, status, created_at),
  INDEX idx_tests_status_created (status, created_at)
);

CREATE TABLE test_assets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  test_id INT NOT NULL,
  asset_id INT NOT NULL,
  order_index INT NOT NULL,
  UNIQUE KEY uq_test_assets_test_asset (test_id, asset_id),
  INDEX idx_test_assets_test_order (test_id, order_index),
  INDEX idx_test_assets_asset_id (asset_id)
);

CREATE TABLE votes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  test_asset_id INT NOT NULL,
  tester_uuid CHAR(36) NOT NULL,
  professionalism INT NOT NULL,
  appeal INT NOT NULL,
  understandability INT NOT NULL,
  comment TEXT NULL,
  comment_marks JSON NULL,
  created_at DATETIME NOT NULL,
  UNIQUE KEY uq_votes_test_asset_tester (test_asset_id, tester_uuid),
  INDEX idx_votes_test_asset (test_asset_id)
);
