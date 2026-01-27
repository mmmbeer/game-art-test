import { initThemeToggle } from "./theme.js";
import { initGamesView } from "./views/games.js";
import { initAssetsView } from "./views/assets.js";
import { getSelectedGameUuid } from "./state.js";

const landingView = document.getElementById("landingView");
const gamesView = document.getElementById("gamesView");
const assetsView = document.getElementById("assetsView");
const appTitle = document.querySelector(".app-title");

function setView(view) {
  if (view === "games") {
    landingView.classList.add("d-none");
    gamesView.classList.remove("d-none");
    assetsView.classList.add("d-none");
    appTitle.textContent = "Select a Game";
  } else if (view === "assets") {
    landingView.classList.add("d-none");
    gamesView.classList.add("d-none");
    assetsView.classList.remove("d-none");
    appTitle.textContent = "Browse Assets";
  } else {
    landingView.classList.remove("d-none");
    gamesView.classList.add("d-none");
    assetsView.classList.add("d-none");
    appTitle.textContent = "TGC Art Test Platform";
  }
}

const assetsViewApi = initAssetsView({
  onBack: () => setView("games"),
  onAuthLost: () => setView("landing"),
});

const gamesViewApi = initGamesView({
  onBrowseAssets: (game) => {
    setView("assets");
    assetsViewApi.loadAssets(game);
  },
  onAuthLost: () => setView("landing"),
});

initThemeToggle();

const selectedGameUuid = getSelectedGameUuid();
setView(selectedGameUuid ? "games" : "landing");

(async () => {
  const loaded = await gamesViewApi.loadGames();
  if (loaded) {
    setView("games");
  }
})();
