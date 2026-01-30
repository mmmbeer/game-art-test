import { initThemeToggle } from "./theme.js";
import { initGamesView } from "./views/games.js";
import { initAssetsView } from "./views/assets.js";
import { initDashboardView } from "./views/dashboard.js";
import { getSelectedGameUuid, setSelectedGameUuid } from "./state.js";

const landingView = document.getElementById("landingView");
const gamesView = document.getElementById("gamesView");
const assetsView = document.getElementById("assetsView");
const dashboardView = document.getElementById("dashboardView");
const appTitle = document.querySelector(".app-title");

function setView(view) {
  if (view === "games") {
    landingView.classList.add("d-none");
    gamesView.classList.remove("d-none");
    assetsView.classList.add("d-none");
    dashboardView.classList.add("d-none");
    appTitle.textContent = "Select a Game";
  } else if (view === "assets") {
    landingView.classList.add("d-none");
    gamesView.classList.add("d-none");
    assetsView.classList.remove("d-none");
    dashboardView.classList.add("d-none");
    appTitle.textContent = "Browse Assets";
  } else if (view === "dashboard") {
    landingView.classList.add("d-none");
    gamesView.classList.add("d-none");
    assetsView.classList.add("d-none");
    dashboardView.classList.remove("d-none");
    appTitle.textContent = "Test Command Center";
  } else {
    landingView.classList.remove("d-none");
    gamesView.classList.add("d-none");
    assetsView.classList.add("d-none");
    dashboardView.classList.add("d-none");
    appTitle.textContent = "TGC Art Test Platform";
  }
}

let dashboardViewApi = null;

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
  onOpenDashboard: () => {
    setView("dashboard");
    updateUrlForView("dashboard");
    dashboardViewApi?.loadOverview();
  },
  onAuthLost: () => {
    setView("landing");
    updateUrlForView("landing");
  },
});

dashboardViewApi = initDashboardView({
  onBack: () => {
    setView("games");
    updateUrlForView("games");
  },
  onAuthLost: () => {
    setView("landing");
    updateUrlForView("landing");
  },
});

initThemeToggle();

const urlState = getViewStateFromUrl();
const urlGameUuid = urlState.gameUuid;
const selectedGameUuid = getSelectedGameUuid();
setView(
  urlState.view === "dashboard"
    ? "dashboard"
    : urlGameUuid
      ? "assets"
      : selectedGameUuid
        ? "games"
        : "landing"
);

(async () => {
  const loaded = await gamesViewApi.loadGames();
  if (!loaded) {
    return;
  }

  if (urlState.view === "dashboard") {
    setView("dashboard");
    updateUrlForView("dashboard");
    dashboardViewApi.loadOverview();
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

function getViewStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view");
  const game = params.get("game");
  return {
    view: view || "",
    gameUuid: view === "assets" && game ? game : "",
  };
}

function updateUrlForView(view, gameUuid = "") {
  const url = new URL(window.location.href);
  if (view === "assets" && gameUuid) {
    url.searchParams.set("view", "assets");
    url.searchParams.set("game", gameUuid);
  } else if (view === "dashboard") {
    url.searchParams.set("view", "dashboard");
    url.searchParams.delete("game");
  } else {
    url.searchParams.delete("view");
    url.searchParams.delete("game");
  }
  window.history.replaceState({ view, gameUuid }, "", url);
}
