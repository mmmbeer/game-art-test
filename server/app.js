import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import healthRoutes from "./routes/health.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, "..", "public");

app.use(express.json({ limit: "100kb" }));
app.use(express.static(publicDir));
app.use(healthRoutes);

export default app;