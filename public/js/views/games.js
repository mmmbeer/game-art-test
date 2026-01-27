import { fetchJson } from "../api.js";
import { showToast } from "../toast.js";
import { getSelectedGameUuid, setSelectedGameUuid } from "../state.js";

const userDisplay = document.getElementById("userDisplay");
const gamesList = document.getElementById("gamesList");
const gameSearch = document.getElementById("gameSearch");
const designerFilter = document.getElementById("designerFilter");
const clearFilters = document.getElementById("clearFilters");
const confirmGame = document.getElementById("confirmGame");
const selectedGamePanel = document.getElementById("selectedGamePanel");
const selectedGameName = document.getElementById("selectedGameName");
const selectedGameMeta = document.getElementById("selectedGameMeta");
const gamesLoading = document.getElementById("gamesLoading");

let games = [];
let designers = [];
let currentFilter = {
  query: "",
  designerUuid: "",
};

export function initGamesView({ onBrowseAssets, onAuthLost }) {
  confirmGame.addEventListener("click", () => {
    const selected = getSelectedGameUuid();
    if (!selected) {
      showToast("Select a game to continue.", "warning");
      return;
    }
    const game = games.find((item) => item.uuid === selected);
    if (!game) {
      showToast("Selected game not found.", "danger");
      return;
    }
    onBrowseAssets({ ...game, designer_name: resolveDesignerName(game.designer_uuid) });
  });

  gamesList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-game-uuid]");
    if (!button) {
      return;
    }
    const uuid = button.dataset.gameUuid;
    setSelectedGameUuid(uuid);
    renderSelectedGame();
    renderGames();
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
      selectedGamePanel.classList.add("d-none");
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
        renderSelectedGame();
        renderGames();
        return true;
      } finally {
        gamesLoading.classList.add("d-none");
      }
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

function renderSelectedGame() {
  const selected = getSelectedGameUuid();
  const game = games.find((item) => item.uuid === selected);
  if (!game) {
    selectedGamePanel.classList.add("d-none");
    selectedGameName.textContent = "";
    selectedGameMeta.textContent = "";
    return;
  }
  const designerName = resolveDesignerName(game.designer_uuid);
  selectedGamePanel.classList.remove("d-none");
  selectedGameName.textContent = game.name;
  selectedGameMeta.textContent = designerName ? `Designer: ${designerName}` : "Designer unavailable";
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

  if (!filtered.length) {
    gamesList.innerHTML = "<p class=\"text-muted\">No games match your filters.</p>";
    return;
  }

  filtered.forEach((game) => {
    const button = document.createElement("button");
    const isSelected = selected === game.uuid;
    button.type = "button";
    button.className = `game-item ${isSelected ? "is-selected" : ""}`;
    button.dataset.gameUuid = game.uuid;
    button.innerHTML = `
      <div>
        <p class="game-name">${game.name}</p>
        <p class="game-meta">${resolveDesignerName(game.designer_uuid) || "Designer unavailable"}</p>
      </div>
      <span class="game-select">${isSelected ? "Selected" : "Select"}</span>
    `;
    gamesList.appendChild(button);
  });
}

function resolveDesignerName(designerUuid) {
  if (!designerUuid) {
    return "";
  }
  const match = designers.find((designer) => designer.uuid === designerUuid);
  return match?.name || "";
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
