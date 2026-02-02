import { initThemeToggle } from "./theme.js";
import { initGamesView } from "./views/games.js";
import { initAssetsView } from "./views/assets.js";
import { initDashboardView } from "./views/dashboard.js";
import { getSelectedGameUuid, setSelectedGameUuid } from "./state.js";

const landingView = document.getElementById("landingView");
const gamesView = document.getElementById("gamesView");
const assetsView = document.getElementById("assetsView");
const dashboardView = document.getElementById("dashboardView");
const appPageTitle = document.getElementById("appPageTitle");
const appSubpageTitle = document.getElementById("appSubpageTitle");
const appTitleSep = document.getElementById("appTitleSep");
const appBackButton = document.getElementById("appBackButton");

let activeBackAction = null;
let currentView = "";

appBackButton?.addEventListener("click", () => {
  activeBackAction?.();
});

function setView(view) {
  if (currentView === "assets" && view !== "assets") {
    assetsViewApi?.reset?.();
  }
  if (view === "games") {
    landingView.classList.add("d-none");
    gamesView.classList.remove("d-none");
    assetsView.classList.add("d-none");
    dashboardView.classList.add("d-none");
    setPageTitle("Select a Game");
    setSubpageTitle("");
    setBackVisible(false);
  } else if (view === "assets") {
    landingView.classList.add("d-none");
    gamesView.classList.add("d-none");
    assetsView.classList.remove("d-none");
    dashboardView.classList.add("d-none");
    setPageTitle("Browse Assets");
    setSubpageTitle("");
    setBackVisible(true);
  } else if (view === "dashboard") {
    landingView.classList.add("d-none");
    gamesView.classList.add("d-none");
    assetsView.classList.add("d-none");
    dashboardView.classList.remove("d-none");
    setPageTitle("Command Center");
    setSubpageTitle("");
    setBackVisible(true);
  } else {
    landingView.classList.remove("d-none");
    gamesView.classList.add("d-none");
    assetsView.classList.add("d-none");
    dashboardView.classList.add("d-none");
    setPageTitle("TGC Art Test Platform");
    setSubpageTitle("");
    setBackVisible(false);
  }
  currentView = view;
}

let dashboardViewApi = null;

const goBackToGames = () => {
  setView("games");
  updateUrlForView("games");
};

const assetsViewApi = initAssetsView({
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
    await dashboardViewApi.loadOverview();
    if (urlState.testUuid) {
      dashboardViewApi.selectTestByUuid(urlState.testUuid);
    }
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
  const test = params.get("test");
  return {
    view: view || "",
    gameUuid: view === "assets" && game ? game : "",
    testUuid: view === "dashboard" && test ? test : "",
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

function setPageTitle(title) {
  if (appPageTitle) {
    appPageTitle.textContent = title;
  }
}

function setSubpageTitle(title) {
  if (appSubpageTitle) {
    appSubpageTitle.textContent = title || "";
  }
  if (appTitleSep) {
    appTitleSep.classList.toggle("is-hidden", !title);
  }
}

function setBackVisible(visible) {
  if (!appBackButton) {
    return;
  }
  appBackButton.classList.toggle("is-hidden", !visible);
  activeBackAction = visible ? goBackToGames : null;
}

function initFilterToggles() {
  document.querySelectorAll("[data-filter-toggle]").forEach((toggle) => {
    const panelId = toggle.dataset.filterToggle;
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) {
      return;
    }
    toggle.addEventListener("click", () => {
      const isOpen = panel.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

document.addEventListener("app:set-subpage", (event) => {
  setSubpageTitle(event.detail?.title || "");
});

initFilterToggles();
