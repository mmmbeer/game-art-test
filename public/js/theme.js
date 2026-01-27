import { setStoredTheme, getStoredTheme } from "./state.js";

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  setStoredTheme(theme);
}

function initTheme() {
  const saved = getStoredTheme();
  setTheme(saved || "light");
}

export function initThemeToggle() {
  initTheme();
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(current === "light" ? "dark" : "light");
  });
}
