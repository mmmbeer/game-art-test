import { fetchJson } from "../api.js";
import { showToast } from "../toast.js";
import { initTestBuilder } from "./testBuilder.js";

const backToGames = document.getElementById("backToGames");
const assetGameTitle = document.getElementById("assetGameTitle");
const assetGameDesigner = document.getElementById("assetGameDesigner");
const assetMetrics = document.getElementById("assetMetrics");
const refreshAssets = document.getElementById("refreshAssets");
const assetStatus = document.getElementById("assetStatus");
const assetGroups = document.getElementById("assetGroups");
const assetsLoading = document.getElementById("assetsLoading");
const assetPreviewModal = document.getElementById("assetPreviewModal");
const assetPreviewTitle = document.getElementById("assetPreviewTitle");
const assetPreviewImage = document.getElementById("assetPreviewImage");
const assetPreviewMeta = document.getElementById("assetPreviewMeta");

let activeGame = null;
let groupedAssets = [];
let assetsByType = {};
let lazyObserver = null;
let testBuilderApi = null;

const PAGE_SIZE = 24;

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

  assetGroups.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-load-more]");
    if (!button) {
      return;
    }
    const type = button.dataset.loadMore;
    renderGroupItems(type, true);
  });

  assetGroups.addEventListener("click", (event) => {
    const card = event.target.closest("button[data-asset-id]");
    if (!card) {
      return;
    }
    const type = card.dataset.assetType;
    const id = card.dataset.assetId;
    const asset = assetsByType?.[type]?.find((item) => item.uuid === id);
    if (!asset) {
      return;
    }
    openPreview(asset);
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
  assetGroups.innerHTML = "";
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
    assetStatus.textContent = "Tap a group to browse.";
    renderGroups();
    testBuilderApi?.setAssets({
      game,
      assetTypes: groupedAssets,
      assetsByType,
    });
    if (showToastOnSuccess) {
      showToast("Assets refreshed.", "success");
    }
  } finally {
    assetsLoading.classList.add("d-none");
  }
}

function renderGroups() {
  assetGroups.innerHTML = "";
  if (!groupedAssets.length) {
    assetGroups.innerHTML = "<p class=\"text-muted\">No printable assets found for this game.</p>";
    return;
  }

  groupedAssets
    .slice()
    .sort((a, b) => a.type.localeCompare(b.type))
    .forEach((group, index) => {
      const item = document.createElement("div");
      item.className = "accordion-item";
      item.innerHTML = `
        <h2 class="accordion-header" id="heading-${index}">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-${index}"
            aria-expanded="false"
            aria-controls="collapse-${index}"
          >
            <span class="asset-type">${group.type}</span>
            <span class="asset-count">${group.count} assets</span>
          </button>
        </h2>
        <div id="collapse-${index}" class="accordion-collapse collapse" aria-labelledby="heading-${index}">
          <div class="accordion-body">
            <div class="asset-grid" data-asset-type="${group.type}"></div>
            <div class="asset-actions" data-asset-actions="${group.type}"></div>
          </div>
        </div>
      `;
      assetGroups.appendChild(item);

      const collapse = item.querySelector(".accordion-collapse");
      collapse.addEventListener("show.bs.collapse", () => {
        renderGroupItems(group.type, false);
      });
    });
}

function renderGroupItems(type, append) {
  const container = assetGroups.querySelector(`.asset-grid[data-asset-type="${type}"]`);
  const actions = assetGroups.querySelector(`.asset-actions[data-asset-actions="${type}"]`);
  if (!container || !actions) {
    return;
  }
  const items = assetsByType[type] || [];
  const currentCount = append ? container.children.length : 0;
  if (!append) {
    container.innerHTML = "";
  }

  const nextItems = items.slice(currentCount, currentCount + PAGE_SIZE);
  nextItems.forEach((asset) => {
    const card = document.createElement("button");
    const preview = asset.metadata?.preview_urls?.[0] || asset.image_url;
    const cardCount = resolveCardCount(asset);
    card.type = "button";
    card.className = "asset-card";
    card.dataset.assetId = asset.uuid;
    card.dataset.assetType = asset.asset_type;
    card.innerHTML = `
      <div class="asset-thumb">
        <img data-src="${preview}" alt="${asset.asset_type}" loading="lazy">
      </div>
      <div class="asset-info">
        <p class="asset-title">${asset.asset_type}</p>
        <p class="asset-meta">
          DPI: ${asset.dpi || "n/a"}${cardCount ? ` • Cards: ${cardCount}` : ""}
        </p>
      </div>
    `;
    container.appendChild(card);
  });

  actions.innerHTML = "";
  if (currentCount + nextItems.length < items.length) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-outline-light w-100";
    button.dataset.loadMore = type;
    button.textContent = `Load more (${items.length - (currentCount + nextItems.length)} remaining)`;
    actions.appendChild(button);
  }

  applyLazyLoading(container);
}

function applyLazyLoading(container) {
  if (!container) {
    return;
  }
  if (lazyObserver) {
    lazyObserver.disconnect();
  }
  if ("IntersectionObserver" in window) {
    lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const img = entry.target;
        const src = img.dataset.src;
        if (src) {
          img.src = src;
          img.removeAttribute("data-src");
        }
        lazyObserver.unobserve(img);
      });
    }, { rootMargin: "120px" });

    container.querySelectorAll("img[data-src]").forEach((img) => lazyObserver.observe(img));
  } else {
    container.querySelectorAll("img[data-src]").forEach((img) => {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
    });
  }
}

function openPreview(asset) {
  const preview = asset.metadata?.image_urls?.[0] || asset.image_url;
  const cardCount = resolveCardCount(asset);
  assetPreviewTitle.textContent = asset.asset_type;
  assetPreviewImage.src = preview;
  assetPreviewImage.alt = asset.asset_type;
  assetPreviewMeta.innerHTML = `
    <p><strong>Asset ID:</strong> ${asset.tgc_asset_id}</p>
    <p><strong>DPI:</strong> ${asset.dpi || "n/a"}</p>
    ${cardCount ? `<p><strong>Cards:</strong> ${cardCount}</p>` : ""}
  `;
  const modal = bootstrap.Modal.getOrCreateInstance(assetPreviewModal);
  modal.show();
}

function resolveCardCount(asset) {
  if (!asset || typeof asset !== "object") {
    return 0;
  }
  const source = asset.metadata?.source || {};
  const direct =
    Number(source.card_count) ||
    Number(source.cards_count) ||
    Number(source.card_total) ||
    0;
  if (direct) {
    return direct;
  }
  if (Array.isArray(source.cards)) {
    return source.cards.length;
  }
  if (Array.isArray(source.card_ids)) {
    return source.card_ids.length;
  }
  if (Array.isArray(source.fronts)) {
    return source.fronts.length;
  }
  return 0;
}
