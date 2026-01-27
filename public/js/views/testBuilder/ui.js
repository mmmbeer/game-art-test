import { resolveAssetName, resolveCardCount } from "./state.js";

export function renderSelectedAssets({ type, assetsByType, selectionState }) {
  const items = assetsByType[type] || [];
  const selected = selectionState.get(type) || new Set();
  if (!selected.size) {
    return "<div class=\"type-selected-item\">No assets selected</div>";
  }
  const selectedItems = items.filter((asset) => selected.has(asset.uuid));
  return selectedItems
    .map((asset) => {
      const name = resolveAssetName(asset);
      const cardCount = resolveCardCount(asset);
      return `<div class=\"type-selected-item\">- ${name}${cardCount ? ` (${cardCount})` : ""}</div>`;
    })
    .join("");
}

export function renderAssetsForType({ type, assetsByType, selectionState }) {
  const items = assetsByType[type] || [];
  if (!items.length) {
    return "<p class=\"text-muted mb-0\">No assets in this type.</p>";
  }
  const selected = selectionState.get(type) || new Set();
  return items
    .map((asset) => {
      const name = resolveAssetName(asset);
      const cardCount = resolveCardCount(asset);
      return `
        <label class=\"type-asset-card\">
          <input type=\"checkbox\" data-asset-uuid=\"${asset.uuid}\" ${selected.has(asset.uuid) ? "checked" : ""}>
          <div>
            <div class=\"type-asset-name\">${name}${cardCount ? ` (${cardCount})` : ""}</div>
          </div>
          <span class=\"test-type-meta\">${selected.has(asset.uuid) ? "Selected" : ""}</span>
        </label>
      `;
    })
    .join("");
}

export function renderPreviewRow({ type, assetsByType, expanded }) {
  const items = assetsByType[type] || [];
  if (!items.length) {
    return "<div class=\"type-preview-empty\">No assets to preview.</div>";
  }
  return items
    .map((asset) => {
      const preview = asset.metadata?.preview_urls?.[0] || asset.image_url;
      return `
        <div class=\"type-preview-card\">
          <img ${expanded ? `src=\"${preview}\"` : `data-src=\"${preview}\"`} alt=\"${asset.asset_type}\">
        </div>
      `;
    })
    .join("");
}

export function buildTypeRow({
  entry,
  assetsByType,
  selectionState,
  selectedCount,
  totalCount,
  isExpanded,
  isFullySelected,
}) {
  const type = entry.type;
  const option = document.createElement("label");
  option.className = "test-type-option";
  option.innerHTML = `
    <input type=\"checkbox\" value=\"${type}\" ${isFullySelected ? "checked" : ""}>
    <span class=\"test-type-name\">${type} (${entry.count})</span>
    <span class=\"test-type-meta\">${selectedCount}/${totalCount}</span>
  `;

  const wrapper = document.createElement("div");
  wrapper.className = "test-type-block";
  wrapper.appendChild(option);

  const selectedList = document.createElement("div");
  selectedList.className = "type-selected";
  selectedList.dataset.typeSelected = type;
  selectedList.innerHTML = renderSelectedAssets({ type, assetsByType, selectionState });
  wrapper.appendChild(selectedList);

  const previewWrap = document.createElement("div");
  previewWrap.className = "type-preview";
  const previewToggle = document.createElement("button");
  previewToggle.type = "button";
  previewToggle.className = "type-preview-toggle";
  previewToggle.dataset.previewToggle = type;
  previewToggle.innerHTML = `Preview Assets <span class=\"chevron\">${isExpanded ? "v" : ">"}</span>`;
  const previewRow = document.createElement("div");
  previewRow.className = "type-preview-row";
  previewRow.dataset.typePreview = type;
  previewRow.innerHTML = renderPreviewRow({ type, assetsByType, expanded: false });
  previewWrap.appendChild(previewToggle);
  previewWrap.appendChild(previewRow);
  wrapper.appendChild(previewWrap);

  const assetsWrap = document.createElement("div");
  assetsWrap.className = "type-assets";
  assetsWrap.dataset.typeAssets = type;
  assetsWrap.innerHTML = renderAssetsForType({ type, assetsByType, selectionState });
  wrapper.appendChild(assetsWrap);

  return {
    wrapper,
    option,
    previewToggle,
    previewRow,
    assetsWrap,
    selectedList,
  };
}
