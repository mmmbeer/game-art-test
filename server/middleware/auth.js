import env from "../config/env.js";
import { getSessionByUuid, touchSession } from "../db/sessions.js";

export async function requireAuth(req, res, next) {
  const sessionUuid = req.cookies?.[env.session.cookieName];
  if (!sessionUuid) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const session = await getSessionByUuid(sessionUuid);
  if (!session) {
    return res.status(401).json({ error: "Invalid session" });
  }

  await touchSession(sessionUuid);
  req.auth = {
    sessionUuid,
    tgcSessionId: session.tgc_session_id,
    user: {
      id: session.user_id,
      uuid: session.user_uuid,
      tgcUserId: session.tgc_user_id,
      displayName: session.display_name,
    },
  };

  return next();
}