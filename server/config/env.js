import dotenv from "dotenv";

dotenv.config();

function parseInteger(name, fallback, { min } = {}) {
  const value = Number.parseInt(process.env[name] || "", 10);
  const parsed = Number.isFinite(value) ? value : fallback;
  return Number.isFinite(min) ? Math.max(min, parsed) : parsed;
}

const env = {
  port: parseInteger("PORT", 3000, { min: 0 }),
  nodeEnv: process.env.NODE_ENV || "development",
  db: {
    host: process.env.DB_HOST || "",
    name: process.env.DB_NAME || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    connectionLimit: parseInteger("DB_CONNECTION_LIMIT", 5, { min: 1 }),
  },
  tgc: {
    apiBaseUrl: process.env.TGC_API_BASE_URL || "https://www.thegamecrafter.com/api",
    apiKeyId: process.env.TGC_API_KEY_ID || "",
    privateKey: process.env.TGC_PRIVATE_KEY || "",
  },
  session: {
    cookieName: process.env.SESSION_COOKIE_NAME || "tgc_art_test_session",
  },
  app: {
    basePath: process.env.APP_BASE_PATH || "",
    server: process.env.APP_SERVER || "",
    idleTimeoutMs: parseInteger("APP_IDLE_TIMEOUT_MS", 15 * 60 * 1000, { min: 0 }),
    shutdownTimeoutMs: parseInteger("APP_SHUTDOWN_TIMEOUT_MS", 10 * 1000, { min: 1000 }),
  },
  tester: {
    minVotesPerAsset: parseInteger("TEST_MIN_VOTES_PER_ASSET", 10, { min: 1 }),
  },
  tests: {
    defaultSampleSize: parseInteger("TEST_DEFAULT_SAMPLE_SIZE", 10, { min: 1 }),
  },
};

export default env;
