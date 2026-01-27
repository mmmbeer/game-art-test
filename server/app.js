import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import healthRoutes from "./routes/health.js";
import authRoutes from "./routes/auth.js";
import gamesRoutes from "./routes/games.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, "..", "public");

app.use(express.json({ limit: "100kb" }));
app.use(cookieParser());
app.use(express.static(publicDir));
app.use("/auth/tgc", authRoutes);
app.use("/games", gamesRoutes);
app.use(healthRoutes);

export default app;
