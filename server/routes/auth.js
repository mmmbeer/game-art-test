import { Router } from "express";
import env from "../config/env.js";
import { createSession, fetchUser } from "../services/tgcClient.js";
import { createUser, findUserByTgcId, updateUserDisplayName } from "../db/users.js";
import { createSession as createLocalSession } from "../db/sessions.js";

const router = Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }
  if (!env.tgc.apiKeyId) {
    return res.status(500).json({ error: "Server missing TGC API key id" });
  }

  try {
    const session = await createSession({ username, password });
    const tgcUserId = session.user_id;
    const userInfo = await fetchUser({ tgcUserId, sessionId: session.id });
    const displayName = userInfo.display_name || userInfo.name || username;

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

    return res.status(200).json({
      user: {
        uuid: user.uuid,
        display_name: user.display_name,
      },
    });
  } catch (error) {
    return res.status(401).json({ error: error.message || "Login failed" });
  }
});

export default router;
