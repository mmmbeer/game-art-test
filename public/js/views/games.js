import { fetchJson } from "../api.js";
import { showToast } from "../toast.js";
import { getSelectedGameUuid, setSelectedGameUuid } from "../state.js";

const userDisplay = document.getElementById("userDisplay");
const gamesList = document.getElementById("gamesList");
const gameSearch = document.getElementById("gameSearch");
const designerFilter = document.getElementById("designerFilter");
const clearFilters = document.getElementById("clearFilters");
const gamesLoading = document.getElementById("gamesLoading");

let games = [];
let designers = [];
let currentFilter = {
  query: "",
  designerUuid: "",
};

export function initGamesView({ onBrowseAssets, onAuthLost }) {
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
          ? `Signed in as ${data.user.display_name}`
          : "Signed in";
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
      <div class="game-thumb">
        ${imageUrl ? `<img src="${imageUrl}" alt="${game.name}">` : "<span>IMG</span>"}
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
      </div>
    `;
    gamesList.appendChild(card);
  });
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
  const totalCount = Number(game.asset_count) || 0;
  pills.push(`<span class="pill">${totalCount} assets</span>`);

  const counts = game.asset_type_counts || {};
  const entries = Object.entries(counts)
    .filter(([, count]) => Number(count) > 0)
    .sort((a, b) => b[1] - a[1]);

  const maxShown = 5;
  entries.slice(0, maxShown).forEach(([type, count]) => {
    pills.push(`<span class="pill pill-muted">${type}: ${count}</span>`);
  });
  if (entries.length > maxShown) {
    pills.push(`<span class="pill pill-muted">+${entries.length - maxShown} more</span>`);
  }
  return pills.join("");
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
