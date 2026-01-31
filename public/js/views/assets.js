import { fetchJson } from "../api.js";
import { showToast } from "../toast.js";
import { initTestBuilder } from "./testBuilder/index.js";

const assetGameDesigner = document.getElementById("assetGameDesigner");
const assetMetrics = document.getElementById("assetMetrics");
const refreshAssets = document.getElementById("refreshAssets");
const assetStatus = document.getElementById("assetStatus");
const assetsLoading = document.getElementById("assetsLoading");
const gameTestsList = document.getElementById("gameTestsList");

let activeGame = null;
let groupedAssets = [];
let assetsByType = {};
let testBuilderApi = null;

export function initAssetsView({ onAuthLost }) {
  if (!testBuilderApi) {
    testBuilderApi = initTestBuilder({ onAuthLost });
  }

  refreshAssets.addEventListener("click", () => {
    if (activeGame) {
      loadAssets(activeGame, { showToastOnSuccess: true, onAuthLost });
    }
  });

  return {
    loadAssets: (game) => {
      loadAssets(game, { showToastOnSuccess: false, onAuthLost });
    },
  };
}

async function loadAssets(game, { showToastOnSuccess, onAuthLost }) {
  activeGame = game;
  setHeaderSubpage(game.name);
  assetGameDesigner.textContent = game.designer_name
    ? `Designer: ${game.designer_name}`
    : "Designer unavailable";
  assetMetrics.textContent = Number.isFinite(Number(game.asset_count))
    ? `Known assets: ${game.asset_count}`
    : "";
  assetStatus.textContent = "Loading assets...";
  assetsLoading.classList.remove("d-none");

  try {
    const { response, data } = await fetchJson(`games/${game.uuid}/assets`);
    if (response.status === 401) {
      showToast("Session expired. Please sign in again.", "warning");
      onAuthLost();
      return;
    }
    if (!response.ok) {
      showToast(data.error || "Unable to load assets.", "danger");
      assetStatus.textContent = "Failed to load assets.";
      return;
    }

    groupedAssets = Array.isArray(data.asset_types) ? data.asset_types : [];
    assetsByType = data.assets_by_type || {};
    const assetCount = Array.isArray(data.assets) ? data.assets.length : 0;
    assetMetrics.textContent = `${assetCount} assets across ${groupedAssets.length} types`;
    assetStatus.textContent = "Assets ready for test builder.";
    renderTestsList(Array.isArray(data.tests) ? data.tests : []);
    testBuilderApi?.setAssets({
      game,
      assetTypes: groupedAssets,
      assetsByType,
      deckCardsByAssetUuid: data.deck_cards_by_asset_uuid || {},
      testDefaults: data.test_defaults || {},
    });
    if (showToastOnSuccess) {
      showToast("Assets refreshed.", "success");
    }
  } finally {
    assetsLoading.classList.add("d-none");
  }
}

function setHeaderSubpage(title) {
  document.dispatchEvent(new CustomEvent("app:set-subpage", { detail: { title } }));
}

function renderTestsList(tests) {
  if (!gameTestsList) {
    return;
  }
  if (!tests.length) {
    gameTestsList.innerHTML = "<p class=\"text-muted mb-0\">No tests created for this game yet.</p>";
    return;
  }
  gameTestsList.innerHTML = tests
    .map((test) => {
      const created = test.created_at ? new Date(test.created_at) : null;
      const createdLabel = created ? created.toLocaleDateString() : "Unknown date";
      const statusLabel = test.status ? test.status.toUpperCase() : "UNKNOWN";
      const progress = Number.isFinite(Number(test.progress_percent))
        ? `${test.progress_percent}%`
        : "0%";
      return `
        <div class="game-test-card">
          <div class="game-test-top">
            <div>
              <p class="game-test-title">Test ${test.uuid.slice(0, 8)}...</p>
              <p class="game-test-meta">Created ${createdLabel} • ${statusLabel}</p>
            </div>
            <a class="btn btn-outline-light btn-sm" href="${test.public_url}" target="_blank" rel="noopener">
              Public link
            </a>
          </div>
          <div class="game-test-progress">
            <span class="pill">${test.completed_assets}/${test.total_assets} assets complete</span>
            <span class="pill pill-muted">${test.total_votes} votes</span>
            <span class="pill pill-accent">${progress}</span>
          </div>
        </div>
      `;
    })
    .join("");
}
