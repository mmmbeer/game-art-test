import { renderAssetsForType, renderSelectedAssets, renderPreviewRow } from "./ui.js";
import { isTypePartiallySelected, resolveTypeCounts } from "./state.js";

export function setExpandedState({ type, assetsWrap, previewRow, previewToggle, expanded, assetsByType }) {
  if (expanded) {
    assetsWrap.classList.add("is-open");
    previewToggle.innerHTML = "Preview Assets <span class=\"chevron\">v</span>";
    previewRow.innerHTML = renderPreviewRow({ type, assetsByType, expanded: true });
    loadPreviewImages(previewRow);
  } else {
    assetsWrap.classList.remove("is-open");
    previewToggle.innerHTML = "Preview Assets <span class=\"chevron\">></span>";
    previewRow.innerHTML = renderPreviewRow({ type, assetsByType, expanded: false });
  }
}

export function refreshTypeSelectionUI({ type, assetsByType, selectionState, testTypeSelection }) {
  const option = testTypeSelection.querySelector(`.test-type-option input[value=\"${type}\"]`);
  const assets = assetsByType[type] || [];
  const selected = selectionState.get(type) || new Set();
  if (option) {
    option.checked = selected.size === assets.length && assets.length > 0;
    option.indeterminate = isTypePartiallySelected({ type, assetsByType, selectionState });
    const meta = option.closest(".test-type-option")?.querySelector(".test-type-meta");
    if (meta) {
      const counts = resolveTypeCounts({
        type,
        assetCount: assets.length,
        assetsByType,
        selectionState,
      });
      meta.textContent = `${counts.selectedCount}/${counts.totalCount}`;
    }
  }
  const container = testTypeSelection.querySelector(`[data-type-assets=\"${type}\"]`);
  if (container) {
    container.innerHTML = renderAssetsForType({ type, assetsByType, selectionState });
  }
  const selectedList = testTypeSelection.querySelector(`[data-type-selected=\"${type}\"]`);
  if (selectedList) {
    selectedList.innerHTML = renderSelectedAssets({ type, assetsByType, selectionState });
  }

  const previewRow = testTypeSelection.querySelector(`[data-type-preview=\"${type}\"]`);
  const previewToggle = testTypeSelection.querySelector(`[data-preview-toggle=\"${type}\"]`);
  const assetsWrap = testTypeSelection.querySelector(`[data-type-assets=\"${type}\"]`);
  if (previewRow && previewToggle && assetsWrap) {
    previewRow.innerHTML = renderPreviewRow({ type, assetsByType, expanded: assetsWrap.classList.contains("is-open") });
    if (assetsWrap.classList.contains("is-open")) {
      loadPreviewImages(previewRow);
      previewToggle.innerHTML = "Preview Assets <span class=\"chevron\">v</span>";
    } else {
      previewToggle.innerHTML = "Preview Assets <span class=\"chevron\">></span>";
    }
  }
}

export function loadPreviewImages(container) {
  container.querySelectorAll("img[data-src]").forEach((img) => {
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  });
}
