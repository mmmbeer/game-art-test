import { Router } from "express";
import env from "../config/env.js";

const router = Router();

router.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: env.nodeEnv,
  });
});

export default router;