CREATE TABLE user_sessions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  uuid CHAR(36) NOT NULL,
  user_id INT NOT NULL,
  tgc_session_id VARCHAR(64) NOT NULL,
  created_at DATETIME NOT NULL,
  last_seen_at DATETIME NOT NULL
);
