import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import env from "./config/env.js";
import healthRoutes from "./routes/health.js";
import authRoutes from "./routes/auth.js";
import gamesRoutes from "./routes/games.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, "..", "public");
const basePath = normalizeBasePath(env.app.basePath);

app.use(express.json({ limit: "100kb" }));
app.use(cookieParser());
app.use(basePath, express.static(publicDir));
app.use(`${basePath}/auth/tgc`, authRoutes);
app.use(`${basePath}/games`, gamesRoutes);
app.use(basePath, healthRoutes);

export default app;

function normalizeBasePath(input) {
  if (!input) {
    return "";
  }
  let base = input.trim();
  if (!base.startsWith("/")) {
    base = `/${base}`;
  }
  if (base.length > 1 && base.endsWith("/")) {
    base = base.slice(0, -1);
  }
  return base;
}
