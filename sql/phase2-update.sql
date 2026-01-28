ALTER TABLE tests
  ADD COLUMN title VARCHAR(80) NULL AFTER status,
  ADD COLUMN end_date DATE NULL AFTER created_at,
  ADD COLUMN sample_size INT NULL AFTER end_date,
  ADD COLUMN min_votes_per_asset INT NULL AFTER sample_size;

CREATE INDEX idx_tests_game_status ON tests (game_id, status);
