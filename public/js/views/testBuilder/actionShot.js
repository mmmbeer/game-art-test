import { showToast } from "../../toast.js";
import { resolveAssetName, isDeckType, isCardType } from "./state.js";

const actionShotModal = document.getElementById("actionShotModal");
const actionShotStage = document.getElementById("actionShotStage");
const actionShotCanvas = document.getElementById("actionShotCanvas");
const actionShotAssetsScroll = document.getElementById("actionShotAssetsScroll");
const actionShotSubtitle = document.getElementById("actionShotSubtitle");
const actionShotFooterMeta = document.getElementById("actionShotFooterMeta");
const actionShotSave = document.getElementById("actionShotSave");
const displaySelect = document.getElementById("actionShotDisplay");
const backgroundSelect = document.getElementById("actionShotBackgroundType");
const backgroundColorInput = document.getElementById("actionShotBackgroundColor");
const backgroundColor2Input = document.getElementById("actionShotBackgroundColor2");
const backgroundImageInput = document.getElementById("actionShotBackgroundImage");
const effectsSelect = document.getElementById("actionShotEffects");
const dimensionsSelect = document.getElementById("actionShotDimensions");
const trimRange = document.getElementById("actionShotTrim");
const cornerRange = document.getElementById("actionShotCorner");
const scaleRange = document.getElementById("actionShotScale");
const borderRange = document.getElementById("actionShotBorder");
const borderColorInput = document.getElementById("actionShotBorderColor");
const shadowRange = document.getElementById("actionShotShadow");
const clearButton = document.getElementById("actionShotClear");

const dimensionPresets = {
  "landscape-1024": { width: 1024, height: 683, label: "Landscape 1024 x 683 (3:2)" },
  "portrait-1600": { width: 1600, height: 2200, label: "Portrait 1600 x 2200" },
  "landscape-2200": { width: 2200, height: 1600, label: "Landscape 2200 x 1600" },
  "square-1800": { width: 1800, height: 1800, label: "Square 1800 x 1800" },
  "banner-2400": { width: 2400, height: 1350, label: "Wide 2400 x 1350" },
  "tall-1200": { width: 1200, height: 2000, label: "Tall 1200 x 2000" },
};

const defaultSettings = {
  displayType: "single",
  backgroundType: "solid",
  backgroundColor: "#101827",
  backgroundColor2: "#2f3b55",
  effects: "none",
  dimensions: "landscape-1024",
  trim: 40,
  corner: 5,
  scale: 1,
  border: 0,
  borderColor: "#f6f7fb",
  shadow: 0.25,
};

const state = {
  game: null,
  type: "",
  cardPool: [],
  selectedCards: [],
  selectedCardUuids: new Set(),
  backgroundImage: null,
  settings: { ...defaultSettings },
};

let ctx = null;
let renderQueued = false;

export function initActionShotStudio() {
  if (!actionShotModal || !actionShotCanvas || !actionShotStage) {
    return {
      openStudio: () => {},
    };
  }

  ctx = actionShotCanvas.getContext("2d");

  bindControls();

  actionShotModal.addEventListener("hidden.bs.modal", () => {
    resetStudio();
  });

  return {
    openStudio: ({ type, game, assetsByType, deckCardsByAssetUuid }) => {
      if (!isDeckType(type) && !isCardType(type)) {
        showToast("Action shot renderer is only available for cards.", "warning");
        return;
      }

      state.game = game || null;
      state.type = type;
      state.cardPool = collectCardsForType({ type, assetsByType, deckCardsByAssetUuid });
      state.selectedCards = [];
      state.selectedCardUuids = new Set();
      state.backgroundImage = null;
      state.settings = { ...defaultSettings };

      syncControls();
      renderCardList();
      updateSubtitle();
      applyDimensions();
      queueRender();

      const modal = bootstrap.Modal.getOrCreateInstance(actionShotModal);
      modal.show();
    },
  };
}

function bindControls() {
  if (displaySelect) {
    displaySelect.addEventListener("change", () => {
      state.settings.displayType = displaySelect.value;
      queueRender();
    });
  }

  if (backgroundSelect) {
    backgroundSelect.addEventListener("change", () => {
      state.settings.backgroundType = backgroundSelect.value;
      queueRender();
    });
  }

  if (backgroundColorInput) {
    backgroundColorInput.addEventListener("input", () => {
      state.settings.backgroundColor = backgroundColorInput.value;
      queueRender();
    });
  }

  if (backgroundColor2Input) {
    backgroundColor2Input.addEventListener("input", () => {
      state.settings.backgroundColor2 = backgroundColor2Input.value;
      queueRender();
    });
  }

  if (backgroundImageInput) {
    backgroundImageInput.addEventListener("change", async () => {
      const file = backgroundImageInput.files?.[0];
      if (!file) {
        state.backgroundImage = null;
        queueRender();
        return;
      }
      try {
        const objectUrl = URL.createObjectURL(file);
        state.backgroundImage = await loadImage(objectUrl);
        URL.revokeObjectURL(objectUrl);
        queueRender();
      } catch (error) {
        state.backgroundImage = null;
        showToast("Unable to load background image.", "warning");
      }
    });
  }

  if (effectsSelect) {
    effectsSelect.addEventListener("change", () => {
      state.settings.effects = effectsSelect.value;
      queueRender();
    });
  }

  if (dimensionsSelect) {
    dimensionsSelect.addEventListener("change", () => {
      state.settings.dimensions = dimensionsSelect.value;
      applyDimensions();
      queueRender();
    });
  }

  if (trimRange) {
    trimRange.addEventListener("input", () => {
      state.settings.trim = Number.parseInt(trimRange.value, 10) || 0;
      queueRender();
    });
  }

  if (cornerRange) {
    cornerRange.addEventListener("input", () => {
      state.settings.corner = Number.parseFloat(cornerRange.value) || 0;
      queueRender();
    });
  }

  if (scaleRange) {
    scaleRange.addEventListener("input", () => {
      state.settings.scale = Number.parseFloat(scaleRange.value) || 1;
      queueRender();
    });
  }

  if (borderRange) {
    borderRange.addEventListener("input", () => {
      state.settings.border = Number.parseFloat(borderRange.value) || 0;
      queueRender();
    });
  }

  if (borderColorInput) {
    borderColorInput.addEventListener("input", () => {
      state.settings.borderColor = borderColorInput.value;
      queueRender();
    });
  }

  if (shadowRange) {
    shadowRange.addEventListener("input", () => {
      state.settings.shadow = Number.parseFloat(shadowRange.value) || 0;
      queueRender();
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      state.selectedCards = [];
      state.selectedCardUuids = new Set();
      renderCardList();
      queueRender();
    });
  }

  if (actionShotSave) {
    actionShotSave.addEventListener("click", () => {
      saveActionShot();
    });
  }
}

function resetStudio() {
  state.game = null;
  state.type = "";
  state.cardPool = [];
  state.selectedCards = [];
  state.selectedCardUuids = new Set();
  state.backgroundImage = null;
  state.settings = { ...defaultSettings };
  if (actionShotAssetsScroll) {
    actionShotAssetsScroll.innerHTML = "";
  }
}

function syncControls() {
  if (displaySelect) {
    displaySelect.value = state.settings.displayType;
  }
  if (backgroundSelect) {
    backgroundSelect.value = state.settings.backgroundType;
  }
  if (backgroundColorInput) {
    backgroundColorInput.value = state.settings.backgroundColor;
  }
  if (backgroundColor2Input) {
    backgroundColor2Input.value = state.settings.backgroundColor2;
  }
  if (effectsSelect) {
    effectsSelect.value = state.settings.effects;
  }
  if (dimensionsSelect) {
    dimensionsSelect.value = state.settings.dimensions;
  }
  if (trimRange) {
    trimRange.value = String(state.settings.trim);
  }
  if (cornerRange) {
    cornerRange.value = String(state.settings.corner);
  }
  if (scaleRange) {
    scaleRange.value = String(state.settings.scale);
  }
  if (borderRange) {
    borderRange.value = String(state.settings.border);
  }
  if (borderColorInput) {
    borderColorInput.value = state.settings.borderColor;
  }
  if (shadowRange) {
    shadowRange.value = String(state.settings.shadow);
  }
  if (backgroundImageInput) {
    backgroundImageInput.value = "";
  }
}

function updateSubtitle() {
  if (!actionShotSubtitle) {
    return;
  }
  const gameName = state.game?.name || "Game";
  actionShotSubtitle.textContent = `${gameName} • ${state.type}`;
}

function collectCardsForType({ type, assetsByType, deckCardsByAssetUuid }) {
  const items = assetsByType?.[type] || [];
  const byUuid = new Map();

  if (isDeckType(type)) {
    items.forEach((deck) => {
      const cards = deckCardsByAssetUuid?.[deck.uuid] || [];
      cards.forEach((card) => {
        if (card?.uuid && !byUuid.has(card.uuid)) {
          byUuid.set(card.uuid, card);
        }
      });
    });
  } else {
    items.forEach((card) => {
      if (card?.uuid && !byUuid.has(card.uuid)) {
        byUuid.set(card.uuid, card);
      }
    });
  }

  return Array.from(byUuid.values());
}

function renderCardList() {
  if (!actionShotAssetsScroll) {
    return;
  }
  if (!state.cardPool.length) {
    actionShotAssetsScroll.innerHTML = "<p class=\"text-muted mb-0\">No cards available.</p>";
    return;
  }
  actionShotAssetsScroll.innerHTML = "";
  state.cardPool.forEach((card) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "action-shot-card";
    button.dataset.cardUuid = card.uuid;
    if (state.selectedCardUuids.has(card.uuid)) {
      button.classList.add("is-active");
    }
    const imageUrl = resolveCardImage(card);
    const name = resolveAssetName(card);
    button.innerHTML = `
      <span class="action-shot-thumb image-frame">
        ${imageUrl ? `<img src="${imageUrl}" alt="${name}" loading="lazy">` : ""}
      </span>
      <span class="action-shot-card-name">${name}</span>
    `;
    button.addEventListener("click", () => toggleCard(card, button));
    actionShotAssetsScroll.appendChild(button);
  });
}

function resolveCardImage(asset) {
  return asset?.metadata?.preview_urls?.[0] || asset?.image_url || "";
}

function toggleCard(card, button) {
  if (!card?.uuid) {
    return;
  }
  if (state.selectedCardUuids.has(card.uuid)) {
    state.selectedCardUuids.delete(card.uuid);
    state.selectedCards = state.selectedCards.filter((item) => item.uuid !== card.uuid);
    button?.classList.remove("is-active");
    queueRender();
    return;
  }
  const entry = {
    uuid: card.uuid,
    name: resolveAssetName(card),
    imageUrl: resolveCardImage(card),
    image: null,
    loading: false,
  };
  state.selectedCardUuids.add(card.uuid);
  state.selectedCards.push(entry);
  button?.classList.add("is-active");
  loadCardImage(entry);
}

async function loadCardImage(entry) {
  if (!entry?.imageUrl || entry.loading) {
    queueRender();
    return;
  }
  entry.loading = true;
  try {
    entry.image = await loadImage(resolveProxyUrl(entry.imageUrl));
  } catch (error) {
    showToast("Unable to load a card image.", "warning");
  } finally {
    entry.loading = false;
    queueRender();
  }
}

function queueRender() {
  if (renderQueued) {
    return;
  }
  renderQueued = true;
  requestAnimationFrame(() => {
    renderQueued = false;
    renderCanvas();
  });
}

function applyDimensions() {
  const preset = dimensionPresets[state.settings.dimensions] || dimensionPresets["portrait-1600"];
  if (!preset || !actionShotCanvas || !actionShotStage) {
    return;
  }
  actionShotCanvas.width = preset.width;
  actionShotCanvas.height = preset.height;
  actionShotStage.style.setProperty("--action-shot-aspect", `${preset.width} / ${preset.height}`);
  updateFooterMeta();
}

function updateFooterMeta() {
  if (!actionShotFooterMeta) {
    return;
  }
  const preset = dimensionPresets[state.settings.dimensions] || dimensionPresets["portrait-1600"];
  const total = state.selectedCards.length;
  actionShotFooterMeta.textContent = `${total} card${total === 1 ? "" : "s"} • ${preset.width} x ${preset.height}`;
}

function renderCanvas() {
  if (!ctx || !actionShotCanvas) {
    return;
  }
  const width = actionShotCanvas.width;
  const height = actionShotCanvas.height;
  ctx.clearRect(0, 0, width, height);
  drawBackground(ctx, width, height);

  const cards = state.selectedCards.filter((card) => card.image);
  updateFooterMeta();

  if (!cards.length) {
    drawEmptyState(ctx, width, height);
    return;
  }

  const displayType = state.settings.displayType;
  const drawCards =
    displayType === "single" ? cards.slice(-1) : cards.slice(0, Math.min(cards.length, 5));

  if (displayType === "fan") {
    renderFan(ctx, drawCards, width, height);
  } else if (displayType === "angle") {
    renderAngle(ctx, drawCards, width, height);
  } else {
    renderSingle(ctx, drawCards[drawCards.length - 1], width, height);
  }
}

function drawEmptyState(ctx, width, height) {
  ctx.save();
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "600 24px sans-serif";
  ctx.fillText("Add cards below to start rendering.", width / 2, height / 2);
  ctx.restore();
}

function drawBackground(ctx, width, height) {
  const mode = state.settings.backgroundType;
  if (mode === "gradient") {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, state.settings.backgroundColor);
    gradient.addColorStop(1, state.settings.backgroundColor2);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    return;
  }
  if (mode === "image" && state.backgroundImage) {
    drawCoverImage(ctx, state.backgroundImage, 0, 0, width, height);
    return;
  }
  ctx.fillStyle = state.settings.backgroundColor;
  ctx.fillRect(0, 0, width, height);
}

function drawCoverImage(ctx, image, x, y, width, height) {
  const scale = Math.max(width / image.width, height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  const drawX = x + (width - drawWidth) / 2;
  const drawY = y + (height - drawHeight) / 2;
  ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
}

function renderSingle(ctx, card, width, height) {
  if (!card?.image) {
    return;
  }
  const size = computeCardSize(card.image, width, height, 0.78);
  const x = width / 2 - size.width / 2;
  const y = height / 2 - size.height / 2;
  drawCard(ctx, card.image, x, y, size.width, size.height, 0, 0);
}

function renderFan(ctx, cards, width, height) {
  if (!cards.length) {
    return;
  }
  const base = cards[0];
  const baseSize = base?.image ? computeCardSize(base.image, width, height, 0.68) : null;
  const size = baseSize || { width: width * 0.4, height: height * 0.6 };
  const spread = Math.min(26, 8 + cards.length * 4);
  const start = -spread / 2;
  const step = cards.length > 1 ? spread / (cards.length - 1) : 0;
  cards.forEach((card, index) => {
    if (!card.image) {
      return;
    }
    const cardSize = computeCardSize(card.image, width, height, 0.68);
    const angle = (start + step * index) * (Math.PI / 180);
    const offsetX = (index - (cards.length - 1) / 2) * size.width * 0.15;
    const offsetY = Math.abs(index - (cards.length - 1) / 2) * size.height * 0.04;
    const x = width / 2 - cardSize.width / 2 + offsetX;
    const y = height / 2 - cardSize.height / 2 + offsetY;
    drawCard(ctx, card.image, x, y, cardSize.width, cardSize.height, angle, 0);
  });
}

function renderAngle(ctx, cards, width, height) {
  if (!cards.length) {
    return;
  }
  const base = cards[0];
  const baseSize = base?.image ? computeCardSize(base.image, width, height, 0.7) : null;
  const size = baseSize || { width: width * 0.4, height: height * 0.6 };
  const offset = Math.min(size.width * 0.18, 120);
  cards.forEach((card, index) => {
    if (!card.image) {
      return;
    }
    const cardSize = computeCardSize(card.image, width, height, 0.7);
    const x = width / 2 - cardSize.width / 2 + index * offset * 0.6;
    const y = height / 2 - cardSize.height / 2 + index * offset * 0.15;
    const angle = (-12 + index * 6) * (Math.PI / 180);
    drawCard(ctx, card.image, x, y, cardSize.width, cardSize.height, angle, -0.18);
  });
}

function computeCardSize(image, width, height, heightRatio) {
  const trim = clampTrim(image, state.settings.trim);
  const srcWidth = Math.max(1, image.width - trim * 2);
  const srcHeight = Math.max(1, image.height - trim * 2);
  const maxHeight = height * heightRatio;
  const maxWidth = width * 0.78;
  let scale = maxHeight / srcHeight;
  if (srcWidth * scale > maxWidth) {
    scale = maxWidth / srcWidth;
  }
  scale *= state.settings.scale;
  const scaledWidth = srcWidth * scale;
  const scaledHeight = srcHeight * scale;
  const safeMaxWidth = width * 0.88;
  const safeMaxHeight = height * 0.88;
  let fitScale = 1;
  if (scaledWidth > safeMaxWidth || scaledHeight > safeMaxHeight) {
    fitScale = Math.min(safeMaxWidth / scaledWidth, safeMaxHeight / scaledHeight);
  }
  return {
    width: scaledWidth * fitScale,
    height: scaledHeight * fitScale,
  };
}

function clampTrim(image, trim) {
  const maxTrim = Math.floor(Math.min(image.width, image.height) / 3);
  return Math.max(0, Math.min(trim, maxTrim));
}

function drawCard(ctx, image, x, y, width, height, rotation, skewX) {
  const trim = clampTrim(image, state.settings.trim);
  const srcX = trim;
  const srcY = trim;
  const srcWidth = Math.max(1, image.width - trim * 2);
  const srcHeight = Math.max(1, image.height - trim * 2);
  const radius = Math.min(width, height) * (state.settings.corner / 100);
  const borderWidth = Math.max(0, state.settings.border || 0);
  const shadowStrength = Math.max(0, Math.min(state.settings.shadow || 0, 1));

  ctx.save();
  ctx.translate(x + width / 2, y + height / 2);
  ctx.rotate(rotation);
  if (skewX) {
    ctx.transform(1, 0, skewX, 1, 0, 0);
  }
  if (shadowStrength > 0.01) {
    ctx.shadowColor = `rgba(8, 12, 20, ${0.45 * shadowStrength})`;
    ctx.shadowBlur = 26 * shadowStrength;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 12 * shadowStrength;
  }
  drawRoundedImage(
    ctx,
    image,
    srcX,
    srcY,
    srcWidth,
    srcHeight,
    -width / 2,
    -height / 2,
    width,
    height,
    radius
  );
  if (borderWidth > 0.25) {
    ctx.shadowColor = "transparent";
    ctx.lineWidth = borderWidth;
    ctx.strokeStyle = state.settings.borderColor || "#f6f7fb";
    drawRoundedRectPath(ctx, -width / 2, -height / 2, width, height, radius);
    ctx.stroke();
  }
  if (state.settings.effects === "reflection") {
    ctx.shadowColor = "transparent";
    drawReflection(
      ctx,
      image,
      srcX,
      srcY,
      srcWidth,
      srcHeight,
      -width / 2,
      -height / 2,
      width,
      height,
      radius
    );
  }
  ctx.restore();
}

function drawRoundedImage(ctx, image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, radius) {
  ctx.save();
  const r = Math.min(radius, dWidth / 2, dHeight / 2);
  drawRoundedRectPath(ctx, dx, dy, dWidth, dHeight, r);
  ctx.clip();
  ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  ctx.restore();
}

function drawRoundedRectPath(ctx, dx, dy, dWidth, dHeight, radius) {
  const r = Math.min(radius, dWidth / 2, dHeight / 2);
  ctx.beginPath();
  ctx.moveTo(dx + r, dy);
  ctx.arcTo(dx + dWidth, dy, dx + dWidth, dy + dHeight, r);
  ctx.arcTo(dx + dWidth, dy + dHeight, dx, dy + dHeight, r);
  ctx.arcTo(dx, dy + dHeight, dx, dy, r);
  ctx.arcTo(dx, dy, dx + dWidth, dy, r);
  ctx.closePath();
}

function drawReflection(ctx, image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, radius) {
  const gap = Math.max(6, dHeight * 0.04);
  ctx.save();
  ctx.globalAlpha = 0.22;
  ctx.scale(1, -1);
  drawRoundedImage(
    ctx,
    image,
    sx,
    sy,
    sWidth,
    sHeight,
    dx,
    -dy - dHeight - gap - dHeight,
    dWidth,
    dHeight,
    radius
  );
  ctx.restore();
}

function saveActionShot() {
  if (!actionShotCanvas) {
    return;
  }
  if (!state.selectedCards.length) {
    showToast("Add at least one card before saving.", "warning");
    return;
  }
  actionShotCanvas.toBlob((blob) => {
    if (!blob) {
      showToast("Unable to export image. Check image permissions.", "warning");
      return;
    }
    const name = buildFileName();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("Action shot saved.", "success");
  }, "image/png");
}

function buildFileName() {
  const gameName = (state.game?.name || "action-shot")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const typeName = String(state.type || "cards")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const timestamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
  return `${gameName}-${typeName}-action-shot-${timestamp}.png`;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("image load failed"));
    img.src = src;
  });
}

function resolveProxyUrl(url) {
  if (!url) {
    return url;
  }
  try {
    const target = new URL(url, window.location.href);
    if (target.origin === window.location.origin) {
      return target.toString();
    }
    const proxyUrl = new URL("image-proxy", window.location.href);
    proxyUrl.searchParams.set("url", target.toString());
    return proxyUrl.toString();
  } catch (error) {
    return url;
  }
}
