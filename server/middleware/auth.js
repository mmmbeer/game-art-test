import env from "../config/env.js";
import { getSessionByUuid, touchSession } from "../db/sessions.js";

const SESSION_TOUCH_INTERVAL_MS = 10 * 60 * 1000;

export async function requireAuth(req, res, next) {
  const sessionUuid = req.cookies?.[env.session.cookieName];
  if (!sessionUuid) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const session = await getSessionByUuid(sessionUuid);
  if (!session) {
    return res.status(401).json({ error: "Invalid session" });
  }

  if (shouldTouchSession(session.last_seen_at)) {
    await touchSession(sessionUuid);
  }
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

function shouldTouchSession(lastSeenAt) {
  if (!lastSeenAt) {
    return true;
  }
  const lastSeenTime = new Date(lastSeenAt).getTime();
  if (!Number.isFinite(lastSeenTime)) {
    return true;
  }
  return Date.now() - lastSeenTime >= SESSION_TOUCH_INTERVAL_MS;
}
