import { fetchJson } from "../api.js";
import { showToast } from "../toast.js";
import { initTestBuilder } from "./testBuilder/index.js";

const backToGames = document.getElementById("backToGames");
const assetGameTitle = document.getElementById("assetGameTitle");
const assetGameDesigner = document.getElementById("assetGameDesigner");
const assetMetrics = document.getElementById("assetMetrics");
const refreshAssets = document.getElementById("refreshAssets");
const assetStatus = document.getElementById("assetStatus");
const assetsLoading = document.getElementById("assetsLoading");

let activeGame = null;
let groupedAssets = [];
let assetsByType = {};
let testBuilderApi = null;

export function initAssetsView({ onBack, onAuthLost }) {
  if (!testBuilderApi) {
    testBuilderApi = initTestBuilder({ onAuthLost });
  }
  backToGames.addEventListener("click", () => {
    onBack();
  });

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
  assetGameTitle.textContent = game.name;
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
    testBuilderApi?.setAssets({
      game,
      assetTypes: groupedAssets,
      assetsByType,
      deckCardsByAssetUuid: data.deck_cards_by_asset_uuid || {},
    });
    if (showToastOnSuccess) {
      showToast("Assets refreshed.", "success");
    }
  } finally {
    assetsLoading.classList.add("d-none");
  }
}
