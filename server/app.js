import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import env from "./config/env.js";
import healthRoutes from "./routes/health.js";
import authRoutes from "./routes/auth.js";
import gamesRoutes from "./routes/games.js";
import testsRoutes from "./routes/tests.js";
import testerRoutes from "./routes/tester.js";
import imageProxyRoutes from "./routes/imageProxy.js";
import { createRequestActivityTracker } from "./lifecycle.js";

const app = express();
const requestActivity = createRequestActivityTracker();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, "..", "public");
const basePath = normalizeBasePath(env.app.basePath);

app.locals.requestActivity = requestActivity;
app.use(requestActivity.middleware);
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: false, limit: "100kb" }));
app.use(cookieParser());
mountStatic(basePath);
mountApiRoutes("");
if (basePath) {
  mountApiRoutes(basePath);
}

export default app;

function mountStatic(prefix) {
  app.use(
    prefix,
    express.static(publicDir, {
      etag: true,
      maxAge: env.nodeEnv === "production" ? "1d" : 0,
    })
  );
}

function mountApiRoutes(prefix) {
  app.use(`${prefix}/auth/tgc`, authRoutes);
  app.use(`${prefix}/games`, gamesRoutes);
  app.use(`${prefix}/tests`, testsRoutes);
  app.use(`${prefix}/t`, testerRoutes);
  app.use(prefix, imageProxyRoutes);
  app.use(prefix, healthRoutes);
}

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
