import express from "express";
import { Readable } from "stream";

const router = express.Router();

const ALLOWED_HOSTS = new Set(["s3.amazonaws.com"]);
const ALLOWED_PATH_PREFIXES = ["/files.thegamecrafter.com/"];

router.get("/image-proxy", async (req, res) => {
  const urlParam = String(req.query.url || "").trim();
  if (!urlParam) {
    return res.status(400).json({ error: "Missing url parameter." });
  }

  let target;
  try {
    target = new URL(urlParam);
  } catch (error) {
    return res.status(400).json({ error: "Invalid url parameter." });
  }

  if (!ALLOWED_HOSTS.has(target.hostname)) {
    return res.status(403).json({ error: "Host not allowed." });
  }

  const pathAllowed = ALLOWED_PATH_PREFIXES.some((prefix) => target.pathname.startsWith(prefix));
  if (!pathAllowed) {
    return res.status(403).json({ error: "Path not allowed." });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(target, {
      signal: controller.signal,
      headers: {
        "User-Agent": "TGC-Art-Test-Proxy/1.0",
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Unable to fetch image." });
    }

    const contentType = response.headers.get("content-type") || "application/octet-stream";
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=86400");

    if (!response.body) {
      return res.status(502).json({ error: "No image data received." });
    }

    Readable.fromWeb(response.body).pipe(res);
  } catch (error) {
    const status = error?.name === "AbortError" ? 504 : 502;
    res.status(status).json({ error: "Image proxy failed." });
  } finally {
    clearTimeout(timeout);
  }
});

export default router;
