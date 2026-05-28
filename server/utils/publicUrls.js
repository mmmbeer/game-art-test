import env from "../config/env.js";

export function buildPublicTestUrl(req, testUuid) {
  const base = resolvePublicBaseUrl(req);
  const basePath = env.app.basePath ? normalizeBasePath(env.app.basePath) : "";
  return `${base}${basePath}/t/${testUuid}/`;
}

function resolvePublicBaseUrl(req) {
  const configured = normalizeOrigin(env.app.server);
  if (configured) {
    return configured;
  }

  const forwardedProto = req.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const forwardedHost = req.get("x-forwarded-host")?.split(",")[0]?.trim();
  const proto = forwardedProto || req.protocol || "https";
  const host = forwardedHost || req.get("host") || "";
  const requestOrigin = normalizeOrigin(`${proto}://${host}`);

  if (requestOrigin) {
    return requestOrigin;
  }

  throw new Error("Unable to build public test URL without APP_SERVER or request host.");
}

function normalizeOrigin(input) {
  if (!input) {
    return "";
  }
  try {
    const url = new URL(input.trim());
    if (!url.hostname || url.hostname === "t") {
      return "";
    }
    return url.origin;
  } catch (error) {
    return "";
  }
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
