import { initThemeToggle } from "./theme.js";
import { initGamesView } from "./views/games.js";
import { initAssetsView } from "./views/assets.js";
import { initDashboardView } from "./views/dashboard.js";
import { getSelectedGameUuid, setSelectedGameUuid } from "./state.js";
import { fetchJson } from "./api.js";
import { getFallbackTips, loadLoadingTips, renderLoadingTip } from "./loadingTips.js";

const landingView = document.getElementById("landingView");
const loadingView = document.getElementById("loadingView");
const gamesView = document.getElementById("gamesView");
const assetsView = document.getElementById("assetsView");
const dashboardView = document.getElementById("dashboardView");
const appPageTitle = document.getElementById("appPageTitle");
const appSubpageTitle = document.getElementById("appSubpageTitle");
const appTitleSep = document.getElementById("appTitleSep");
const appBackButton = document.getElementById("appBackButton");
const appTitleButton = document.getElementById("appTitleButton");
const appTestsButton = document.getElementById("appTestsButton");
const appTestsMenu = document.getElementById("appTestsMenu");
const appTestsDropdown = document.getElementById("appTestsDropdown");
const loadingTip = document.getElementById("loadingTip");
const loadingStatus = document.getElementById("loadingStatus");
const publicTestsList = document.getElementById("publicTestsList");
const publicTestsStatus = document.getElementById("publicTestsStatus");

let activeBackAction = null;
let currentView = "";
let titleExpandTimer = null;
let loadingTipTimer = null;
let loadingTips = [];
let loadingTipIndex = 0;
let publicTestsLoaded = false;

appBackButton?.addEventListener("click", () => {
  activeBackAction?.();
});

appTitleButton?.addEventListener("click", () => {
  appTitleButton.classList.add("is-expanded");
  if (titleExpandTimer) {
    window.clearTimeout(titleExpandTimer);
  }
  titleExpandTimer = window.setTimeout(() => {
    appTitleButton.classList.remove("is-expanded");
  }, 2400);
});

appTitleButton?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }
  event.preventDefault();
  appTitleButton.click();
});

function setView(view) {
  if (currentView === "assets" && view !== "assets") {
    assetsViewApi?.reset?.();
  }
  if (view === "games") {
    landingView.classList.add("d-none");
    loadingView.classList.add("d-none");
    gamesView.classList.remove("d-none");
    assetsView.classList.add("d-none");
    dashboardView.classList.add("d-none");
    stopLoadingTips();
    setPageTitle("Select a Game");
    setSubpageTitle("");
    setBackVisible(false);
  } else if (view === "assets") {
    landingView.classList.add("d-none");
    loadingView.classList.add("d-none");
    gamesView.classList.add("d-none");
    assetsView.classList.remove("d-none");
    dashboardView.classList.add("d-none");
    stopLoadingTips();
    setPageTitle("Browse Assets");
    setSubpageTitle("");
    setBackVisible(true);
  } else if (view === "dashboard") {
    landingView.classList.add("d-none");
    loadingView.classList.add("d-none");
    gamesView.classList.add("d-none");
    assetsView.classList.add("d-none");
    dashboardView.classList.remove("d-none");
    stopLoadingTips();
    setPageTitle("Command Center");
    setSubpageTitle("");
    setBackVisible(true);
  } else if (view === "loading") {
    landingView.classList.add("d-none");
    loadingView.classList.remove("d-none");
    gamesView.classList.add("d-none");
    assetsView.classList.add("d-none");
    dashboardView.classList.add("d-none");
    startLoadingTips();
    setPageTitle("Loading Games");
    setSubpageTitle("");
    setBackVisible(false);
  } else {
    landingView.classList.remove("d-none");
    loadingView.classList.add("d-none");
    gamesView.classList.add("d-none");
    assetsView.classList.add("d-none");
    dashboardView.classList.add("d-none");
    stopLoadingTips();
    loadPublicTests();
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
  setView("loading");
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
  updateTitleTooltip();
}

function setSubpageTitle(title) {
  if (appSubpageTitle) {
    appSubpageTitle.textContent = title || "";
  }
  if (appTitleSep) {
    appTitleSep.classList.toggle("is-hidden", !title);
  }
  updateTitleTooltip();
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
initHeaderTests();

function updateTitleTooltip() {
  if (!appTitleButton) {
    return;
  }
  const title = appPageTitle?.textContent?.trim() || "";
  const subpage = appSubpageTitle?.textContent?.trim() || "";
  const fullTitle = subpage ? `${title}: ${subpage}` : title;
  appTitleButton.setAttribute("title", fullTitle);
  appTitleButton.setAttribute("aria-label", fullTitle);
}

function initHeaderTests() {
  if (!appTestsButton || !appTestsMenu || !appTestsDropdown) {
    return;
  }

  const dropdown = window.bootstrap?.Dropdown?.getOrCreateInstance?.(appTestsButton);

  appTestsButton.addEventListener("show.bs.dropdown", () => {
    refreshHeaderTests();
  });

  if (dropdown && window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches) {
    appTestsDropdown.addEventListener("mouseenter", () => {
      dropdown.show();
    });
    appTestsDropdown.addEventListener("mouseleave", () => {
      dropdown.hide();
    });
  }
}

async function refreshHeaderTests() {
  if (!appTestsMenu) {
    return;
  }
  appTestsMenu.innerHTML = "<span class=\"dropdown-item-text text-muted\">Loading tests...</span>";
  try {
    const { response, data } = await fetchJson("tests/overview");
    if (response.status === 401) {
      appTestsMenu.innerHTML = "<span class=\"dropdown-item-text text-muted\">Sign in to see active tests.</span>";
      return;
    }
    if (!response.ok) {
      appTestsMenu.innerHTML = "<span class=\"dropdown-item-text text-muted\">Unable to load tests.</span>";
      return;
    }
    const tests = Array.isArray(data.tests) ? data.tests : [];
    const active = tests.filter((test) => (test.status || "active") === "active");
    renderHeaderTests(active);
  } catch (error) {
    appTestsMenu.innerHTML = "<span class=\"dropdown-item-text text-muted\">Unable to load tests.</span>";
  }
}

function renderHeaderTests(activeTests) {
  if (!appTestsMenu) {
    return;
  }
  appTestsMenu.innerHTML = "";
  if (!activeTests.length) {
    appTestsMenu.innerHTML = "<span class=\"dropdown-item-text text-muted\">No active tests.</span>";
    return;
  }

  const header = document.createElement("div");
  header.className = "dropdown-header";
  header.textContent = "Active tests";
  appTestsMenu.appendChild(header);

  activeTests.forEach((test) => {
    const link = document.createElement("a");
    link.className = "dropdown-item";
    link.href = `?view=dashboard&test=${test.uuid}`;

    const item = document.createElement("div");
    item.className = "app-tests-item";

    const title = document.createElement("div");
    title.className = "app-tests-title";
    title.textContent = test.game?.name || "Untitled game";

    const meta = document.createElement("div");
    meta.className = "app-tests-meta";
    meta.textContent = `Test ${test.uuid.slice(0, 8)}...`;

    item.appendChild(title);
    item.appendChild(meta);
    link.appendChild(item);
    appTestsMenu.appendChild(link);
  });
}

async function startLoadingTips() {
  if (loadingStatus) {
    loadingStatus.textContent = "Contacting The Game Crafter...";
  }
  if (!loadingTips.length) {
    loadingTips = await loadLoadingTips();
    loadingTipIndex = Math.floor(Math.random() * Math.max(loadingTips.length, 1));
    if (currentView !== "loading") {
      return;
    }
  }
  showNextLoadingTip();
  if (!loadingTipTimer) {
    loadingTipTimer = window.setInterval(showNextLoadingTip, 4800);
  }
}

function stopLoadingTips() {
  if (loadingTipTimer) {
    window.clearInterval(loadingTipTimer);
    loadingTipTimer = null;
  }
}

function showNextLoadingTip() {
  if (!loadingTip) {
    return;
  }
  const tips = loadingTips.length ? loadingTips : getFallbackTips();
  renderLoadingTip(loadingTip, tips[loadingTipIndex % tips.length]);
  loadingTipIndex += 1;
}

async function loadPublicTests() {
  if (publicTestsLoaded || !publicTestsList) {
    return;
  }
  publicTestsLoaded = true;
  if (publicTestsStatus) {
    publicTestsStatus.textContent = "Loading...";
  }
  publicTestsList.innerHTML = "<p class=\"text-muted mb-0\">Loading public art tests...</p>";

  try {
    const { response, data } = await fetchJson("tests/public");
    if (!response.ok) {
      throw new Error(data.error || "Unable to load public tests.");
    }
    renderPublicTests(Array.isArray(data.tests) ? data.tests : []);
  } catch (error) {
    publicTestsLoaded = false;
    if (publicTestsStatus) {
      publicTestsStatus.textContent = "Unavailable";
    }
    publicTestsList.innerHTML = "<p class=\"text-muted mb-0\">Public tests are unavailable right now.</p>";
  }
}

function renderPublicTests(tests) {
  publicTestsList.innerHTML = "";
  if (publicTestsStatus) {
    publicTestsStatus.textContent = tests.length ? `${tests.length} open` : "None open";
  }
  if (!tests.length) {
    publicTestsList.innerHTML = "<p class=\"text-muted mb-0\">No public art tests are open right now.</p>";
    return;
  }

  tests.forEach((test) => {
    const row = document.createElement("article");
    row.className = "landing-public-test";

    const body = document.createElement("div");
    const title = document.createElement("p");
    title.className = "landing-public-test-title";
    title.textContent = test.game_name || "Untitled game";

    const meta = document.createElement("p");
    meta.className = "landing-public-test-meta";
    const totalAssets = Number(test.total_assets || 0);
    const totalVotes = Number(test.total_votes || 0);
    const designer = test.designer_name || "Designer unavailable";
    meta.textContent = `${designer} · ${totalAssets} assets · ${totalVotes} votes`;

    const link = document.createElement("a");
    link.className = "btn btn-outline-light btn-sm";
    link.href = test.public_url || `t/${test.uuid}/`;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Open test";

    body.appendChild(title);
    body.appendChild(meta);
    row.appendChild(body);
    row.appendChild(link);
    publicTestsList.appendChild(row);
  });
}
