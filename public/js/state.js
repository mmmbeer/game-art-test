const THEME_KEY = "tgc-theme";
const GAME_KEY = "selected-game";

export function getStoredTheme() {
  return localStorage.getItem(THEME_KEY);
}

export function setStoredTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

export function getSelectedGameUuid() {
  return localStorage.getItem(GAME_KEY);
}

export function setSelectedGameUuid(uuid) {
  if (!uuid) {
    localStorage.removeItem(GAME_KEY);
    return;
  }
  localStorage.setItem(GAME_KEY, uuid);
}
