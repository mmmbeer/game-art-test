import env from "../config/env.js";

const baseUrl = env.tgc.apiBaseUrl.replace(/\/$/, "");

async function request(path, { method = "GET", params = {} } = {}) {
  const url = path.startsWith("http") ? new URL(path) : new URL(`${baseUrl}${path}`);
  const bodyParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") {
      return;
    }
    bodyParams.append(key, value);
  });

  const options = { method };
  if (method === "GET") {
    url.search = bodyParams.toString();
  } else {
    options.headers = { "Content-Type": "application/x-www-form-urlencoded" };
    options.body = bodyParams.toString();
  }

  const response = await fetch(url, options);
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message = data?.error?.message || data?.error || "TGC request failed";
    throw new Error(message);
  }

  if (data?.error) {
    const message = data.error.message || data.error || "TGC request failed";
    throw new Error(message);
  }

  return data?.result || data;
}

export async function createSession({ username, password }) {
  if (!env.tgc.apiKeyId) {
    throw new Error("Missing TGC API key id");
  }
  return request("/session", {
    method: "POST",
    params: {
      username,
      password,
      api_key_id: env.tgc.apiKeyId,
    },
  });
}

export async function createSessionFromSso({ ssoId, privateKey }) {
  if (!ssoId) {
    throw new Error("Missing SSO id");
  }
  if (!privateKey) {
    throw new Error("Missing TGC private key");
  }
  return request(`/session/sso/${ssoId}`, {
    method: "POST",
    params: {
      private_key: privateKey,
    },
  });
}

export async function fetchUser({ tgcUserId, sessionId, includeRelationships = false }) {
  return request(`/user/${tgcUserId}`, {
    method: "GET",
    params: {
      session_id: sessionId,
      _include_relationships: includeRelationships ? 1 : undefined,
    },
  });
}

export async function fetchGame({ gameId, sessionId, includeRelationships = false }) {
  return request(`/game/${gameId}`, {
    method: "GET",
    params: {
      session_id: sessionId,
      _include_relationships: includeRelationships ? 1 : undefined,
    },
  });
}

export async function listGameRelationship({ gameId, relationship, sessionId, includeRelationships = false }) {
  return request(`/game/${gameId}/${relationship}`, {
    method: "GET",
    params: {
      session_id: sessionId,
      _include_relationships: includeRelationships ? 1 : undefined,
    },
  });
}

export async function listDesignerGames({ designerId, sessionId }) {
  return request(`/designer/${designerId}/games`, {
    method: "GET",
    params: {
      session_id: sessionId,
    },
  });
}

export async function listRelationshipByUrl({ url, sessionId, includeRelationships = false }) {
  return request(url, {
    method: "GET",
    params: {
      session_id: sessionId,
      _include_relationships: includeRelationships ? 1 : undefined,
    },
  });
}

export async function listUserRelationship({
  tgcUserId,
  relationship,
  sessionId,
  includeRelationships = false,
}) {
  return request(`/user/${tgcUserId}/${relationship}`, {
    method: "GET",
    params: {
      session_id: sessionId,
      _include_relationships: includeRelationships ? 1 : undefined,
    },
  });
}

export async function fetchDesigner({ designerId, sessionId }) {
  return request(`/designer/${designerId}`, {
    method: "GET",
    params: {
      session_id: sessionId,
    },
  });
}

export async function fetchFile({ fileId, sessionId }) {
  return request(`/file/${fileId}`, {
    method: "GET",
    params: {
      session_id: sessionId,
    },
  });
}

export function extractItems(result) {
  if (!result) {
    return [];
  }
  if (Array.isArray(result.items)) {
    return result.items;
  }
  if (Array.isArray(result)) {
    return result;
  }
  if (result.items && Array.isArray(result.items)) {
    return result.items;
  }
  return [];
}
