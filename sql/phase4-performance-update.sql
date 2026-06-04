ALTER TABLE votes
  ADD COLUMN tester_uuid CHAR(36) NULL AFTER test_asset_id;

UPDATE votes
SET tester_uuid = UUID()
WHERE tester_uuid IS NULL;

ALTER TABLE votes
  MODIFY tester_uuid CHAR(36) NOT NULL,
  ADD UNIQUE KEY uq_votes_test_asset_tester (test_asset_id, tester_uuid),
  ADD INDEX idx_votes_test_asset (test_asset_id);
