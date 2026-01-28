import { initThemeToggle } from "./theme.js";
import { initGamesView } from "./views/games.js";
import { initAssetsView } from "./views/assets.js";
import { getSelectedGameUuid, setSelectedGameUuid } from "./state.js";

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
  onBack: () => {
    setView("games");
    updateUrlForView("games");
  },
  onAuthLost: () => {
    setView("landing");
    updateUrlForView("landing");
  },
});

const gamesViewApi = initGamesView({
  onBrowseAssets: (game) => {
    setView("assets");
    assetsViewApi.loadAssets(game);
    setSelectedGameUuid(game.uuid);
    updateUrlForView("assets", game.uuid);
  },
  onAuthLost: () => {
    setView("landing");
    updateUrlForView("landing");
  },
});

initThemeToggle();

const urlGameUuid = getGameUuidFromUrl();
const selectedGameUuid = getSelectedGameUuid();
setView(urlGameUuid ? "assets" : selectedGameUuid ? "games" : "landing");

(async () => {
  const loaded = await gamesViewApi.loadGames();
  if (!loaded) {
    return;
  }

  if (urlGameUuid) {
    const game = gamesViewApi.getGameByUuid(urlGameUuid);
    if (game) {
      setView("assets");
      setSelectedGameUuid(game.uuid);
      updateUrlForView("assets", game.uuid);
      assetsViewApi.loadAssets(game);
      return;
    }
    updateUrlForView("games");
  }
  setView("games");
})();

function getGameUuidFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view");
  const game = params.get("game");
  if (view === "assets" && game) {
    return game;
  }
  return "";
}

function updateUrlForView(view, gameUuid = "") {
  const url = new URL(window.location.href);
  if (view === "assets" && gameUuid) {
    url.searchParams.set("view", "assets");
    url.searchParams.set("game", gameUuid);
  } else {
    url.searchParams.delete("view");
    url.searchParams.delete("game");
  }
  window.history.replaceState({ view, gameUuid }, "", url);
}
