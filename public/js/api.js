export async function fetchJson(path, options = {}) {
  const response = await fetch(path, {
    credentials: "include",
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  return { response, data };
}
