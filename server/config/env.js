import dotenv from "dotenv";

dotenv.config();

const env = {
  port: Number.parseInt(process.env.PORT || "3000", 10),
  nodeEnv: process.env.NODE_ENV || "development",
  db: {
    host: process.env.DB_HOST || "",
    name: process.env.DB_NAME || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
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
  },
};

export default env;
