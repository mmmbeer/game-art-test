export function isDownloadableAsset(asset) {
  const type = String(asset?.asset_type || "").toLowerCase();
  if (type.includes("download")) {
    return true;
  }
  const metadata = asset?.metadata || {};
  const relationship = String(metadata?.relationship || "").toLowerCase();
  if (relationship.includes("download")) {
    return true;
  }
  const source = metadata?.source || {};
  const sourceType = String(source?.object_type || source?.type || "").toLowerCase();
  return sourceType.includes("download");
}
