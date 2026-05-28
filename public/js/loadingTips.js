const fallbackTips = [
  {
    designer: "Reiner Knizia",
    tip: "A game is strongest when the rules are simple but the decisions remain rich.",
    sourceTitle: "Designer Interview: Reiner Knizia",
    sourceUrl: "https://boardgamegeek.com/blog/4429/blogpost/42393/designer-interview-reiner-knizia",
  },
  {
    designer: "Carla Kopp",
    tip: "Run playtests with a clear question so feedback solves the current design problem instead of becoming noise.",
    sourceTitle: "Carla Kopp on How to Run an Effective Playtest",
    sourceUrl: "https://boardgamedesignlab.com/category/bonus/",
  },
  {
    designer: "Mark Rosewater",
    tip: "Use constraints deliberately because restrictions force sharper, more creative card and system design.",
    sourceTitle: "Twenty Years, Twenty Lessons - Part 3",
    sourceUrl: "https://magic.wizards.com/en/news/making-magic/twenty-years-twenty-lessons-part-3-2016-06-13",
  },
];

let loadingTipsPromise = null;

export function getFallbackTips() {
  return fallbackTips;
}

export function loadLoadingTips() {
  if (!loadingTipsPromise) {
    loadingTipsPromise = fetch("data/tips.json", { credentials: "same-origin" })
      .then((response) => (response.ok ? response.json() : fallbackTips))
      .then((data) => normalizeTips(data))
      .catch(() => fallbackTips);
  }
  return loadingTipsPromise;
}

export function renderLoadingTip(target, tip) {
  if (!target) {
    return;
  }
  const normalized = normalizeTip(tip) || fallbackTips[0];
  target.replaceChildren();

  const quote = document.createElement("span");
  quote.className = "loading-tip-quote";
  quote.textContent = `"${normalized.tip}"`;
  target.appendChild(quote);

  const meta = document.createElement("span");
  meta.className = "loading-tip-meta";
  meta.appendChild(document.createTextNode(` ${normalized.designer || "Game designer"}`));

  if (normalized.sourceUrl) {
    meta.appendChild(document.createTextNode(" - "));
    const link = document.createElement("a");
    link.href = normalized.sourceUrl;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = normalized.sourceTitle || "Source";
    meta.appendChild(link);
  }

  target.appendChild(meta);
}

function normalizeTips(data) {
  const tips = Array.isArray(data)
    ? data.map((entry) => normalizeTip(entry)).filter(Boolean)
    : [];
  return tips.length ? tips : fallbackTips;
}

function normalizeTip(entry) {
  if (typeof entry === "string") {
    const tip = entry.trim();
    return tip ? { tip, designer: "", sourceTitle: "", sourceUrl: "" } : null;
  }
  if (!entry || typeof entry !== "object") {
    return null;
  }
  const tip = String(entry.tip || "").trim();
  if (!tip) {
    return null;
  }
  return {
    tip,
    designer: String(entry.designer || "").trim(),
    sourceTitle: String(entry.sourceTitle || entry.source || "").trim(),
    sourceUrl: String(entry.sourceUrl || "").trim(),
  };
}
