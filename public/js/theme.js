import { setStoredTheme, getStoredTheme } from "./state.js";

const themeToggle = document.getElementById("themeToggle");
const themeList = document.getElementById("themeList");

const themes = [
  { id: "tgc-lime-ink", name: "The Game Crafter Lime & Ink" },
  { id: "midnight-neon", name: "Midnight Neon" },
  { id: "parchment-brass", name: "Parchment & Brass" },
  { id: "candy-pop", name: "Candy Pop" },
  { id: "ocean-slate", name: "Ocean Slate" },
  { id: "desert-sunset", name: "Desert Sunset" },
  { id: "monochrome-minimal", name: "Monochrome Minimal" },
  { id: "cozy-cabin", name: "Cozy Cabin" },
  { id: "cyber-purple", name: "Cyber Purple" },
  { id: "pastel-lab", name: "Pastel Lab" },
];

const themeLookup = new Map(themes.map((theme) => [theme.id, theme]));
const defaultTheme = themes[0].id;

function updateThemeLabel(themeId) {
  const label = themeLookup.get(themeId)?.name || "Theme";
  if (themeToggle) {
    themeToggle.textContent = `Theme: ${label}`;
  }
}

function updateThemeSelection(themeId) {
  if (!themeList) {
    return;
  }
  themeList.querySelectorAll("[data-theme-value]").forEach((button) => {
    const isActive = button.dataset.themeValue === themeId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setTheme(themeId) {
  const resolvedTheme = themeLookup.has(themeId) ? themeId : defaultTheme;
  document.documentElement.setAttribute("data-theme", resolvedTheme);
  setStoredTheme(resolvedTheme);
  updateThemeSelection(resolvedTheme);
  updateThemeLabel(resolvedTheme);
}

function initTheme() {
  const saved = getStoredTheme();
  setTheme(saved || defaultTheme);
}

export function initThemeToggle() {
  initTheme();
  if (!themeList) {
    return;
  }
  themeList.addEventListener("click", (event) => {
    const target = event.target.closest("[data-theme-value]");
    if (!target) {
      return;
    }
    const themeId = target.dataset.themeValue;
    if (!themeId) {
      return;
    }
    setTheme(themeId);
  });
}
