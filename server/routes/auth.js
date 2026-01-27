import { Router } from "express";
import env from "../config/env.js";
import { createSessionFromSso, fetchUser } from "../services/tgcClient.js";
import { createUser, findUserByTgcId, updateUserDisplayName } from "../db/users.js";
import { createSession as createLocalSession } from "../db/sessions.js";

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

export default router;

function resolveAppRoot() {
  if (!env.app.basePath || env.app.basePath === "/") {
    return "/";
  }
  return `${env.app.basePath}/`;
}

function buildPostbackUrl(req) {
  const base = env.app.server ? env.app.server.replace(/\/$/, "") : inferRequestOrigin(req);
  if (!base) {
    return "";
  }
  return `${base}${env.app.basePath || ""}/auth/tgc/sso/callback`;
}

function inferRequestOrigin(req) {
  const host = req.get("host");
  if (!host) {
    return "";
  }
  const proto = req.get("x-forwarded-proto") || req.protocol || "https";
  return `${proto}://${host}`;
}
