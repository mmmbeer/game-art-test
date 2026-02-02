import { fetchJson } from "../api.js";
import { showToast } from "../toast.js";
import { getSelectedGameUuid, setSelectedGameUuid } from "../state.js";
import { initLazyImages } from "../lazyImages.js";

const userDisplay = document.getElementById("userDisplay");
const gamesList = document.getElementById("gamesList");
const gameSearch = document.getElementById("gameSearch");
const designerFilter = document.getElementById("designerFilter");
const clearFilters = document.getElementById("clearFilters");
const gamesLoading = document.getElementById("gamesLoading");
const openDashboard = document.getElementById("openDashboard");

let games = [];
let designers = [];
let currentFilter = {
  query: "",
  designerUuid: "",
};

export function initGamesView({ onBrowseAssets, onOpenDashboard, onAuthLost }) {
  gamesList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-game-uuid]");
    if (!button) {
      return;
    }
    const uuid = button.dataset.gameUuid;
    const game = games.find((item) => item.uuid === uuid);
    if (!game) {
      showToast("Selected game not found.", "danger");
      return;
    }
    setSelectedGameUuid(uuid);
    renderGames();
    onBrowseAssets({ ...game, designer_name: resolveDesignerName(game.designer_uuid) });
  });

  gameSearch.addEventListener("input", debounce((event) => {
    currentFilter.query = event.target.value.trim().toLowerCase();
    renderGames();
  }, 160));

  designerFilter.addEventListener("change", (event) => {
    currentFilter.designerUuid = event.target.value;
    renderGames();
  });

  clearFilters.addEventListener("click", () => {
    gameSearch.value = "";
    designerFilter.value = "";
    currentFilter = { query: "", designerUuid: "" };
    renderGames();
  });

  if (openDashboard) {
    openDashboard.addEventListener("click", () => {
      onOpenDashboard?.();
    });
  }

  return {
    loadGames: async () => {
      gamesLoading.classList.remove("d-none");
      gamesList.innerHTML = "";
      try {
        const { response, data } = await fetchJson("games");
        if (response.status === 401) {
          showToast("Session expired. Please sign in again.", "warning");
          onAuthLost();
          return false;
        }
        if (!response.ok) {
          showToast(data.error || "Unable to load games.", "danger");
          onAuthLost();
          return false;
        }
        games = Array.isArray(data.games) ? data.games : [];
        designers = Array.isArray(data.designers) ? data.designers : [];
        userDisplay.textContent = data.user?.display_name
          ? `Logged in as ${data.user.display_name}`
          : "Logged in";
        renderDesignerFilter();
        renderGames();
        return true;
      } finally {
        gamesLoading.classList.add("d-none");
      }
    },
    getGameByUuid: (uuid) => {
      const game = games.find((item) => item.uuid === uuid);
      if (!game) {
        return null;
      }
      return { ...game, designer_name: resolveDesignerName(game.designer_uuid) };
    },
  };
}

function renderDesignerFilter() {
  designerFilter.innerHTML = "<option value=\"\">All designers</option>";
  designers
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((designer) => {
      const option = document.createElement("option");
      option.value = designer.uuid;
      option.textContent = designer.name;
      designerFilter.appendChild(option);
    });
}

function renderGames() {
  gamesList.innerHTML = "";
  const selected = getSelectedGameUuid();
  const filtered = games.filter((game) => {
    const matchesQuery = currentFilter.query
      ? game.name.toLowerCase().includes(currentFilter.query)
      : true;
    const matchesDesigner = currentFilter.designerUuid
      ? game.designer_uuid === currentFilter.designerUuid
      : true;
    return matchesQuery && matchesDesigner;
  });
  filtered.sort((a, b) => {
    if (a.uuid === selected && b.uuid !== selected) {
      return -1;
    }
    if (b.uuid === selected && a.uuid !== selected) {
      return 1;
    }
    return a.name.localeCompare(b.name);
  });

  if (!filtered.length) {
    gamesList.innerHTML = "<p class=\"text-muted\">No games match your filters.</p>";
    return;
  }

  filtered.forEach((game) => {
    const card = document.createElement("div");
    const isSelected = selected === game.uuid;
    const imageUrl = game.shop_image_url;
    card.className = `game-item ${isSelected ? "is-selected" : ""}`;
    card.innerHTML = `
      <div class="game-thumb image-frame">
        ${
          imageUrl
            ? `<img data-src="${imageUrl}" alt="${game.name}" loading="lazy" decoding="async">`
            : "<span class=\"game-thumb-placeholder\">PLACEHOLDER</span>"
        }
        ${renderTestStars(game)}
      </div>
      <div class="game-body">
        <div class="game-top">
          <div class="game-title">
            <p class="game-name">${game.name}</p>
          </div>
          <button class="btn btn-primary btn-sm" type="button" data-game-uuid="${game.uuid}">
            Select
          </button>
        </div>
        <p class="game-meta">${resolveDesignerName(game.designer_uuid) || "Designer unavailable"}</p>
        <div class="game-pills">
          ${renderPills(game)}
        </div>
        ${renderActiveTestLinks(game)}
      </div>
    `;
    gamesList.appendChild(card);
  });

  initLazyImages(gamesList);
}

function resolveDesignerName(designerUuid) {
  if (!designerUuid) {
    return "";
  }
  const match = designers.find((designer) => designer.uuid === designerUuid);
  return match?.name || "";
}

function renderPills(game) {
  const pills = [];
  const counts = game.asset_type_counts || {};
  const entries = Object.entries(counts)
    .filter(([, count]) => Number(count) > 0)
    .sort((a, b) => b[1] - a[1]);

  if (!entries.length) {
    pills.push("<span class=\"pill pill-muted\">No assets yet</span>");
  } else {
    entries.forEach(([type, count]) => {
      pills.push(`<span class="pill pill-muted">${type}: ${count}</span>`);
    });
  }
  return pills.join("");
}

function renderActiveTestLinks(game) {
  const tests = getGameTests(game);
  const activeTests = tests.filter((test) => (test.status || "active") === "active");
  if (!activeTests.length) {
    return "";
  }
  const newest = sortTestsByDate(activeTests)[0];
  return `
    <div class="game-test-links">
      <a class="btn btn-outline-light btn-sm" href="${newest.public_url}" target="_blank" rel="noopener">
        Public test
      </a>
      ${activeTests.length > 1 ? `<span class="text-muted small">+${activeTests.length - 1} more</span>` : ""}
    </div>
  `;
}

function debounce(fn, delay) {
  let timer = null;
  return (...args) => {
    if (timer) {
      window.clearTimeout(timer);
    }
    timer = window.setTimeout(() => fn(...args), delay);
  };
}

function getGameTests(game) {
  if (Array.isArray(game.tests) && game.tests.length) {
    return game.tests;
  }
  return Array.isArray(game.active_tests) ? game.active_tests : [];
}

function sortTestsByDate(tests) {
  return tests.slice().sort((a, b) => {
    const aTime = a.created_at ? new Date(a.created_at).getTime() : 0;
    const bTime = b.created_at ? new Date(b.created_at).getTime() : 0;
    return bTime - aTime;
  });
}

function renderTestStars(game) {
  const tests = getGameTests(game);
  if (!tests.length) {
    return "";
  }
  const stars = sortTestsByDate(tests).map((test) => {
    const status = test.status || "active";
    const isCompleted = status === "completed";
    const icon = isCompleted ? "assets/icons/star-solid.svg" : "assets/icons/star-outline.svg";
    const label = isCompleted ? "Completed test" : status === "paused" ? "Paused test" : "In progress test";
    const href = `?view=dashboard&test=${test.uuid}`;
    return `
      <a class="game-test-star ${isCompleted ? "is-complete" : "is-active"}" href="${href}" aria-label="${label}">
        <img src="${icon}" alt="">
      </a>
    `;
  });
  return `<div class="game-test-stars">${stars.join("")}</div>`;
}
