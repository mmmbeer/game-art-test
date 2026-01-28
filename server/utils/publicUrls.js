import env from "../config/env.js";

export function buildPublicTestUrl(req, testUuid) {
  const base = env.app.server
    ? env.app.server.replace(/\/$/, "")
    : `${req.protocol}://${req.get("host")}`;
  const basePath = env.app.basePath ? normalizeBasePath(env.app.basePath) : "";
  return `${base}${basePath}/t/${testUuid}/`;
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
