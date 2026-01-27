const themeToggle = document.getElementById("themeToggle");
const loginView = document.getElementById("loginView");
const gamesView = document.getElementById("gamesView");
const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const gamesList = document.getElementById("gamesList");
const confirmGame = document.getElementById("confirmGame");
const userDisplay = document.getElementById("userDisplay");
const appTitle = document.querySelector(".app-title");

const THEME_KEY = "tgc-theme";
const GAME_KEY = "selected-game";

function showToast(message, variant = "info") {
  const host = document.getElementById("toastHost");
  const toast = document.createElement("div");
  toast.className = `toast align-items-center text-bg-${variant} border-0`;
  toast.role = "alert";
  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>
  `;
  host.appendChild(toast);
  const instance = new bootstrap.Toast(toast, { delay: 4000 });
  instance.show();
  toast.addEventListener("hidden.bs.toast", () => toast.remove());
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  setTheme(saved || "light");
}

function setView(view) {
  if (view === "games") {
    loginView.classList.add("d-none");
    gamesView.classList.remove("d-none");
    appTitle.textContent = "Select a Game";
  } else {
    loginView.classList.remove("d-none");
    gamesView.classList.add("d-none");
    appTitle.textContent = "Creator Login";
  }
}

function renderGames(games) {
  gamesList.innerHTML = "";
  const saved = localStorage.getItem(GAME_KEY);

  if (!games.length) {
    gamesList.innerHTML = "<p class=\"text-muted\">No games found for this account.</p>";
    confirmGame.disabled = true;
    return;
  }

  for (const game of games) {
    const id = `game-${game.uuid}`;
    const wrapper = document.createElement("div");
    wrapper.className = "game-item";
    wrapper.innerHTML = `
      <input type="radio" name="game" id="${id}" value="${game.uuid}">
      <label for="${id}">${game.name}</label>
    `;
    const input = wrapper.querySelector("input");
    if (saved && saved === game.uuid) {
      input.checked = true;
      confirmGame.disabled = false;
    }
    input.addEventListener("change", () => {
      localStorage.setItem(GAME_KEY, input.value);
      confirmGame.disabled = false;
    });
    gamesList.appendChild(wrapper);
  }
}

async function loadGames() {
  const response = await fetch("games", { credentials: "include" });
  if (response.status === 401) {
    setView("login");
    return;
  }
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    showToast(data.error || "Unable to load games", "danger");
    setView("login");
    return;
  }
  const data = await response.json();
  userDisplay.textContent = data.user?.display_name
    ? `Signed in as ${data.user.display_name}`
    : "Signed in";
  renderGames(data.games || []);
  setView("games");
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginButton.disabled = true;

  const formData = new FormData(loginForm);
  const payload = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  try {
    const response = await fetch("auth/tgc/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || "Login failed");
    }

    await loadGames();
  } catch (error) {
    showToast(error.message, "danger");
  } finally {
    loginButton.disabled = false;
  }
});

confirmGame.addEventListener("click", () => {
  const selected = localStorage.getItem(GAME_KEY);
  if (!selected) {
    showToast("Select a game to continue", "warning");
    return;
  }
  showToast("Game selected and saved.", "success");
});

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  setTheme(current === "light" ? "dark" : "light");
});

initTheme();
loadGames();
