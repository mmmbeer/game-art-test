import { Router } from "express";
import env from "../config/env.js";
import { createSessionFromSso, fetchUser } from "../services/tgcClient.js";
import { createUser, findUserByTgcId, updateUserDisplayName } from "../db/users.js";
import { createSession as createLocalSession, deleteSession } from "../db/sessions.js";

const router = Router();

router.get("/sso/start", (req, res) => {
  if (!env.tgc.apiKeyId) {
    return res.status(500).send("Server missing TGC API key id");
  }
  const postbackUri = buildPostbackUrl(req);
  if (!postbackUri) {
    return res.status(500).send("Server missing APP_SERVER for SSO");
  }
  const permissions = ["view_my_account", "view_my_games"];
  const url = new URL("https://www.thegamecrafter.com/sso");
  url.searchParams.set("api_key_id", env.tgc.apiKeyId);
  url.searchParams.set("postback_uri", postbackUri);
  permissions.forEach((permission) => url.searchParams.append("permission", permission));
  return res.redirect(url.toString());
});

router.get("/sso/callback", async (req, res) => {
  if (!env.tgc.privateKey) {
    return res.status(500).send("Server missing TGC private key");
  }
  const ssoId = req.query?.sso_id;
  if (!ssoId) {
    return res.status(400).send("Missing SSO id");
  }

  try {
    const session = await createSessionFromSso({ ssoId, privateKey: env.tgc.privateKey });
    const tgcUserId = session.user_id;
    const userInfo = await fetchUser({ tgcUserId, sessionId: session.id });
    const displayName = userInfo.display_name || userInfo.name || "TGC User";

    let user = await findUserByTgcId(tgcUserId);
    if (!user) {
      user = await createUser({ tgcUserId, displayName });
    } else if (user.display_name !== displayName) {
      await updateUserDisplayName(user.id, displayName);
      user.display_name = displayName;
    }

    const sessionUuid = await createLocalSession({
      userId: user.id,
      tgcSessionId: session.id,
    });

    res.cookie(env.session.cookieName, sessionUuid, {
      httpOnly: true,
      sameSite: "lax",
      secure: env.nodeEnv === "production",
    });

    return res.redirect(resolveAppRoot());
  } catch (error) {
    return res.status(401).send(error.message || "Login failed");
  }
});

router.get("/logout", async (req, res) => {
  const sessionUuid = req.cookies?.[env.session.cookieName];
  if (sessionUuid) {
    await deleteSession(sessionUuid);
  }
  res.clearCookie(env.session.cookieName, {
    httpOnly: true,
    sameSite: "lax",
    secure: env.nodeEnv === "production",
  });
  return res.redirect(resolveAppRoot());
});

export default router;

function resolveAppRoot() {
  const basePath = normalizeBasePath(env.app.basePath);
  if (!basePath) {
    return "/";
  }
  return `${basePath}/`;
}

function buildPostbackUrl(req) {
  const base = env.app.server ? env.app.server.replace(/\/$/, "") : inferRequestOrigin(req);
  if (!base) {
    return "";
  }
  return `${base}${normalizeBasePath(env.app.basePath)}/auth/tgc/sso/callback`;
}

function inferRequestOrigin(req) {
  const host = req.get("host");
  if (!host) {
    return "";
  }
  const proto = req.get("x-forwarded-proto") || req.protocol || "https";
  return `${proto}://${host}`;
}

function normalizeBasePath(input) {
  if (!input || input === "/") {
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
