import { fetchJson } from "../api.js";
import { showToast } from "../toast.js";

const refreshButton = document.getElementById("refreshDashboard");
const summaryEl = document.getElementById("dashboardSummary");
const searchInput = document.getElementById("dashboardSearch");
const testSelect = document.getElementById("dashboardTestSelect");
const statusFilter = document.getElementById("dashboardStatusFilter");
const gameFilter = document.getElementById("dashboardGameFilter");
const dateFilter = document.getElementById("dashboardDateFilter");
const selectedTitle = document.getElementById("selectedTestTitle");
const selectedMeta = document.getElementById("selectedTestMeta");
const openPublicButton = document.getElementById("dashboardOpenPublic");
const pauseButton = document.getElementById("dashboardPause");
const resumeButton = document.getElementById("dashboardResume");
const restartButton = document.getElementById("dashboardRestart");
const progressMetrics = document.getElementById("dashboardProgressMetrics");
const progressAssetFilter = document.getElementById("progressAssetFilter");
const progressSort = document.getElementById("progressSort");
const progressList = document.getElementById("dashboardAssetProgress");
const resultsPanel = document.getElementById("dashboardResultsPanel");
const progressPanel = document.getElementById("dashboardProgressPanel");
const resultsDimension = document.getElementById("resultsDimension");
const resultsGroupBy = document.getElementById("resultsGroupBy");
const resultsSort = document.getElementById("resultsSort");
const resultsLimit = document.getElementById("resultsLimit");
const resultsIncludeIncomplete = document.getElementById("resultsIncludeIncomplete");
const resultsExportCsv = document.getElementById("resultsExportCsv");
const resultsExportJson = document.getElementById("resultsExportJson");
const scorecards = document.getElementById("dashboardScorecards");
const heatmap = document.getElementById("resultsHeatmap");
const commentSearch = document.getElementById("commentSearch");
const commentToggle = document.getElementById("commentToggle");
const commentCloud = document.getElementById("commentCloud");
const commentList = document.getElementById("commentList");

const chartIds = {
  radar: "resultsRadarChart",
  distribution: "resultsDistributionChart",
  ranking: "resultsRankingChart",
  timeline: "resultsTimelineChart",
  type: "resultsTypeChart",
};

const chartStore = new Map();

let tests = [];
let selectedTest = null;
let statusData = null;
let resultsData = null;
let showAllComments = false;

const filterState = {
  query: "",
  status: "",
  game: "",
  since: "",
};

export function initDashboardView({ onAuthLost }) {
  refreshButton?.addEventListener("click", () => loadOverview(onAuthLost));

  searchInput?.addEventListener("input", () => {
    filterState.query = searchInput.value.trim().toLowerCase();
    renderTestSelect();
  });
  statusFilter?.addEventListener("change", () => {
    filterState.status = statusFilter.value;
    renderTestSelect();
  });
  gameFilter?.addEventListener("change", () => {
    filterState.game = gameFilter.value;
    renderTestSelect();
  });
  dateFilter?.addEventListener("change", () => {
    filterState.since = dateFilter.value;
    renderTestSelect();
  });

  testSelect?.addEventListener("change", () => {
    const uuid = testSelect.value;
    const match = tests.find((test) => test.uuid === uuid);
    if (!match) {
      clearSelection();
      return;
    }
    selectTest(match, onAuthLost);
  });

  document.querySelectorAll("[data-dashboard-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll("[data-dashboard-tab]")
        .forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      const tab = button.dataset.dashboardTab;
      if (tab === "results") {
        progressPanel.classList.add("d-none");
        resultsPanel.classList.remove("d-none");
      } else {
        progressPanel.classList.remove("d-none");
        resultsPanel.classList.add("d-none");
      }
    });
  });

  progressAssetFilter?.addEventListener("change", renderProgressAssets);
  progressSort?.addEventListener("change", renderProgressAssets);

  resultsDimension?.addEventListener("change", renderResults);
  resultsGroupBy?.addEventListener("change", renderResults);
  resultsSort?.addEventListener("change", renderResults);
  resultsLimit?.addEventListener("input", renderResults);
  resultsIncludeIncomplete?.addEventListener("change", renderResults);

  resultsExportCsv?.addEventListener("click", () => exportResults("csv"));
  resultsExportJson?.addEventListener("click", () => exportResults("json"));

  commentSearch?.addEventListener("input", renderComments);
  commentToggle?.addEventListener("click", () => {
    showAllComments = !showAllComments;
    commentToggle.textContent = showAllComments ? "Show top" : "Show all";
    renderComments();
  });

  openPublicButton?.addEventListener("click", () => {
    if (!selectedTest?.public_url) {
      return;
    }
    window.open(selectedTest.public_url, "_blank", "noopener");
  });

  pauseButton?.addEventListener("click", () => handleTestAction("pause", onAuthLost));
  resumeButton?.addEventListener("click", () => handleTestAction("resume", onAuthLost));
  restartButton?.addEventListener("click", () => handleTestAction("restart", onAuthLost, true));

  return {
    loadOverview: () => loadOverview(onAuthLost),
  };
}

async function loadOverview(onAuthLost) {
  const { response, data } = await fetchJson("tests/overview");
  if (response.status === 401) {
    showToast("Session expired. Please sign in again.", "warning");
    onAuthLost();
    return;
  }
  if (!response.ok) {
    showToast(data.error || "Unable to load tests.", "danger");
    return;
  }
  tests = Array.isArray(data.tests) ? data.tests : [];
  renderSummary();
  renderGameFilter();
  renderTestSelect();

  if (selectedTest) {
    const updated = tests.find((test) => test.uuid === selectedTest.uuid);
    if (updated) {
      selectTest(updated, onAuthLost, { skipStatusReload: true });
    } else {
      clearSelection();
    }
  }
}

function renderSummary() {
  if (!summaryEl) {
    return;
  }
  const total = tests.length;
  const active = tests.filter((test) => test.status === "active").length;
  const paused = tests.filter((test) => test.status === "paused").length;
  const completed = tests.filter((test) => test.status === "completed").length;
  const votes = tests.reduce((sum, test) => sum + (Number(test.total_votes) || 0), 0);
  summaryEl.innerHTML = `
    <div class="summary-card">
      <span class="summary-label">Total tests</span>
      <p class="summary-value">${total}</p>
      <span class="text-muted small">Active ${active} | Paused ${paused}</span>
    </div>
    <div class="summary-card">
      <span class="summary-label">Completed</span>
      <p class="summary-value">${completed}</p>
      <span class="text-muted small">Across ${tests.length} tests</span>
    </div>
    <div class="summary-card">
      <span class="summary-label">Total votes</span>
      <p class="summary-value">${votes}</p>
      <span class="text-muted small">All art tests combined</span>
    </div>
  `;
}

function renderGameFilter() {
  if (!gameFilter) {
    return;
  }
  const games = Array.from(
    new Map(
      tests
        .map((test) => [test.game?.uuid || "", test.game?.name || "Unknown game"])
        .filter(([uuid]) => uuid)
    ).entries()
  ).map(([uuid, name]) => ({ uuid, name }));

  gameFilter.innerHTML = "<option value=\"\">All games</option>";
  games
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((game) => {
      const option = document.createElement("option");
      option.value = game.uuid;
      option.textContent = game.name;
      gameFilter.appendChild(option);
    });
}

function applyFilters() {
  return tests.filter((test) => {
    const query = filterState.query;
    const matchesQuery = query
      ? test.uuid.toLowerCase().includes(query) ||
        (test.game?.name || "").toLowerCase().includes(query)
      : true;
    const matchesStatus = filterState.status ? test.status === filterState.status : true;
    const matchesGame = filterState.game ? test.game?.uuid === filterState.game : true;
    const matchesDate = filterState.since
      ? new Date(test.created_at) >= new Date(filterState.since)
      : true;
    return matchesQuery && matchesStatus && matchesGame && matchesDate;
  });
}

function renderTestSelect() {
  if (!testSelect) {
    return;
  }
  const filtered = applyFilters();
  testSelect.innerHTML = "<option value=\"\">Select a test</option>";
  filtered.forEach((test) => {
    const created = test.created_at ? new Date(test.created_at) : null;
    const createdLabel = created ? created.toLocaleDateString() : "Unknown date";
    const option = document.createElement("option");
    option.value = test.uuid;
    option.textContent = `${test.game?.name || "Untitled game"} | ${test.uuid.slice(0, 8)}... | ${createdLabel} | ${test.status.toUpperCase()}`;
    if (selectedTest?.uuid === test.uuid) {
      option.selected = true;
    }
    testSelect.appendChild(option);
  });
}

function clearSelection() {
  selectedTest = null;
  statusData = null;
  resultsData = null;
  selectedTitle.textContent = "Select a test to view details.";
  selectedMeta.textContent = "";
  setHeaderSubpage("");
  progressMetrics.innerHTML = "";
  progressList.innerHTML = "<p class=\"text-muted mb-0\">Select a test to see progress.</p>";
  scorecards.innerHTML = "";
  heatmap.innerHTML = "";
  commentCloud.innerHTML = "";
  commentList.innerHTML = "";
  disableActionButtons();
}

function disableActionButtons() {
  [openPublicButton, pauseButton, resumeButton, restartButton].forEach((button) => {
    if (button) {
      button.disabled = true;
    }
  });
}

function enableActionButtons(status) {
  if (!openPublicButton) {
    return;
  }
  openPublicButton.disabled = false;
  pauseButton.disabled = status !== "active";
  resumeButton.disabled = status !== "paused";
  restartButton.disabled = false;
}

async function selectTest(test, onAuthLost, options = {}) {
  selectedTest = test;
  selectedTitle.textContent = `${test.game?.name || "Untitled game"}`;
  selectedMeta.textContent = `Test ${test.uuid} | ${test.status.toUpperCase()}`;
  setHeaderSubpage(`Test ${test.uuid.slice(0, 8)}...`);
  enableActionButtons(test.status);
  renderTestSelect();

  await loadStatus(test.uuid, onAuthLost);
  if (!options.skipStatusReload) {
    await loadResults(test.uuid, onAuthLost);
  }
}

function setHeaderSubpage(title) {
  document.dispatchEvent(new CustomEvent("app:set-subpage", { detail: { title } }));
}

async function loadStatus(testUuid, onAuthLost) {
  const { response, data } = await fetchJson(`tests/${testUuid}/status`);
  if (response.status === 401) {
    showToast("Session expired. Please sign in again.", "warning");
    onAuthLost();
    return;
  }
  if (!response.ok) {
    showToast(data.error || "Unable to load test status.", "danger");
    return;
  }
  statusData = data;
  renderProgress();
}

async function loadResults(testUuid, onAuthLost) {
  const { response, data } = await fetchJson(`tests/${testUuid}/results`);
  if (response.status === 401) {
    showToast("Session expired. Please sign in again.", "warning");
    onAuthLost();
    return;
  }
  if (!response.ok) {
    showToast(data.error || "Unable to load test results.", "danger");
    return;
  }
  resultsData = data;
  renderResults();
}

async function handleTestAction(action, onAuthLost, confirmAction = false) {
  if (!selectedTest) {
    return;
  }
  if (confirmAction) {
    const ok = window.confirm("Restarting clears all votes for this test. Continue?");
    if (!ok) {
      return;
    }
  }
  const { response, data } = await fetchJson(`tests/${selectedTest.uuid}/${action}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.status === 401) {
    showToast("Session expired. Please sign in again.", "warning");
    onAuthLost();
    return;
  }
  if (!response.ok) {
    showToast(data.error || `Unable to ${action} test.`, "danger");
    return;
  }
  showToast(`Test ${action}d.`, "success");
  await loadOverview(onAuthLost);
  if (selectedTest) {
    await loadStatus(selectedTest.uuid, onAuthLost);
    await loadResults(selectedTest.uuid, onAuthLost);
  }
}
function renderProgress() {
  if (!statusData?.progress) {
    return;
  }
  const progress = statusData.progress;
  progressMetrics.innerHTML = `
    <div class="metric-chip">
      <span class="metric-label">Assets complete</span>
      <span class="metric-value">${progress.completed_assets}/${progress.total_assets}</span>
    </div>
    <div class="metric-chip">
      <span class="metric-label">Total votes</span>
      <span class="metric-value">${progress.total_votes}</span>
    </div>
    <div class="metric-chip">
      <span class="metric-label">Remaining assets</span>
      <span class="metric-value">${progress.remaining_assets}</span>
    </div>
    <div class="metric-chip">
      <span class="metric-label">Completion</span>
      <span class="metric-value">${progress.progress_percent}%</span>
    </div>
  `;
  renderProgressFilterOptions();
  renderProgressAssets();
}

function renderProgressFilterOptions() {
  if (!progressAssetFilter || !statusData?.assets) {
    return;
  }
  const types = Array.from(
    new Set(statusData.assets.map((asset) => asset.asset_type).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b));
  progressAssetFilter.innerHTML = "<option value=\"\">All types</option>";
  types.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    progressAssetFilter.appendChild(option);
  });
}

function renderProgressAssets() {
  if (!statusData?.assets || !progressList) {
    return;
  }
  const minVotes = statusData.progress?.min_votes_per_asset || 0;
  let assets = statusData.assets.slice();

  const filterType = progressAssetFilter?.value || "";
  if (filterType) {
    assets = assets.filter((asset) => asset.asset_type === filterType);
  }

  const sortBy = progressSort?.value || "remaining";
  assets.sort((a, b) => {
    if (sortBy === "votes") {
      return b.vote_count - a.vote_count;
    }
    if (sortBy === "name") {
      return String(a.asset_type || "").localeCompare(String(b.asset_type || ""));
    }
    return (minVotes - b.vote_count) - (minVotes - a.vote_count);
  });

  if (!assets.length) {
    progressList.innerHTML = "<p class=\"text-muted mb-0\">No assets match this filter.</p>";
    return;
  }
  progressList.innerHTML = assets
    .map((asset) => {
      const remaining = Math.max(minVotes - asset.vote_count, 0);
      const percent = minVotes > 0 ? Math.round((asset.vote_count / minVotes) * 100) : 0;
      return `
        <div class="asset-progress-card">
          <div class="asset-progress-header">
            <div class="asset-progress-thumb">
              <img src="${asset.image_url}" alt="${asset.asset_type}">
            </div>
            <div>
              <p class="mb-1"><strong>${asset.asset_type}</strong></p>
              <p class="asset-progress-meta">${asset.vote_count} votes | ${remaining} remaining</p>
            </div>
          </div>
          <div class="progress-track">
            <div class="progress-bar" style="width: ${Math.min(percent, 100)}%"></div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderResults() {
  if (!resultsData?.assets) {
    return;
  }
  const stats = buildStats(resultsData);
  renderScorecards(stats);
  renderRadar(stats);
  renderDistribution(stats);
  renderRanking(stats);
  renderTimeline(stats);
  renderTypeChart(stats);
  renderHeatmap(stats);
  renderComments(stats);
}

function buildStats(data) {
  const assets = data.assets || [];
  const votes = data.votes || [];
  const minVotes = data.test?.min_votes_per_asset || 0;
  const assetMap = new Map();
  assets.forEach((asset) => {
    assetMap.set(asset.uuid, {
      asset,
      vote_count: 0,
      sums: {
        professionalism: 0,
        appeal: 0,
        understandability: 0,
      },
      ratings: {
        professionalism: [0, 0, 0, 0, 0],
        appeal: [0, 0, 0, 0, 0],
        understandability: [0, 0, 0, 0, 0],
      },
      comments: [],
    });
  });

  votes.forEach((vote) => {
    const entry = assetMap.get(vote.asset_uuid);
    if (!entry) {
      return;
    }
    entry.vote_count += 1;
    entry.sums.professionalism += vote.professionalism;
    entry.sums.appeal += vote.appeal;
    entry.sums.understandability += vote.understandability;
    entry.ratings.professionalism[vote.professionalism - 1] += 1;
    entry.ratings.appeal[vote.appeal - 1] += 1;
    entry.ratings.understandability[vote.understandability - 1] += 1;
    if (vote.comment) {
      entry.comments.push({ text: vote.comment, created_at: vote.created_at, asset_uuid: vote.asset_uuid });
    }
  });

  const assetStats = Array.from(assetMap.values()).map((entry) => {
    const count = entry.vote_count || 0;
    const avg = {
      professionalism: count ? entry.sums.professionalism / count : 0,
      appeal: count ? entry.sums.appeal / count : 0,
      understandability: count ? entry.sums.understandability / count : 0,
    };
    return {
      ...entry,
      averages: avg,
      overall: (avg.professionalism + avg.appeal + avg.understandability) / 3,
    };
  });

  const totalVotes = votes.length;
  const overallAvg = {
    professionalism: totalVotes
      ? assetStats.reduce((sum, asset) => sum + asset.sums.professionalism, 0) / totalVotes
      : 0,
    appeal: totalVotes
      ? assetStats.reduce((sum, asset) => sum + asset.sums.appeal, 0) / totalVotes
      : 0,
    understandability: totalVotes
      ? assetStats.reduce((sum, asset) => sum + asset.sums.understandability, 0) / totalVotes
      : 0,
  };

  const distribution = {
    professionalism: [0, 0, 0, 0, 0],
    appeal: [0, 0, 0, 0, 0],
    understandability: [0, 0, 0, 0, 0],
  };
  assetStats.forEach((asset) => {
    ["professionalism", "appeal", "understandability"].forEach((dimension) => {
      asset.ratings[dimension].forEach((count, index) => {
        distribution[dimension][index] += count;
      });
    });
  });

  const votesByDay = new Map();
  votes.forEach((vote) => {
    if (!vote.created_at) {
      return;
    }
    const dateKey = new Date(vote.created_at).toISOString().slice(0, 10);
    votesByDay.set(dateKey, (votesByDay.get(dateKey) || 0) + 1);
  });

  const comments = assetStats.flatMap((asset) => asset.comments);
  const completedAssets = assetStats.filter((asset) => asset.vote_count >= minVotes).length;

  return {
    assets,
    assetStats,
    votes,
    totalVotes,
    minVotes,
    overallAvg,
    distribution,
    votesByDay,
    comments,
    completedAssets,
  };
}

function renderScorecards(stats) {
  const percent =
    stats.assetStats.length > 0
      ? Math.round((stats.completedAssets / stats.assetStats.length) * 100)
      : 0;
  scorecards.innerHTML = `
    <div class="summary-card">
      <span class="summary-label">Overall average</span>
      <p class="summary-value">${stats.overallAvg.professionalism.toFixed(2)}</p>
      <span class="text-muted small">Professionalism</span>
    </div>
    <div class="summary-card">
      <span class="summary-label">Overall average</span>
      <p class="summary-value">${stats.overallAvg.appeal.toFixed(2)}</p>
      <span class="text-muted small">Appeal</span>
    </div>
    <div class="summary-card">
      <span class="summary-label">Overall average</span>
      <p class="summary-value">${stats.overallAvg.understandability.toFixed(2)}</p>
      <span class="text-muted small">Understandability</span>
    </div>
    <div class="summary-card">
      <span class="summary-label">Completion</span>
      <p class="summary-value">${percent}%</p>
      <span class="text-muted small">${stats.completedAssets}/${stats.assetStats.length} assets</span>
    </div>
  `;
}

function renderRadar(stats) {
  const data = {
    labels: ["Professionalism", "Appeal", "Understandability"],
    datasets: [
      {
        label: "Average",
        data: [
          stats.overallAvg.professionalism,
          stats.overallAvg.appeal,
          stats.overallAvg.understandability,
        ],
        fill: true,
        backgroundColor: "rgba(111, 211, 192, 0.25)",
        borderColor: "rgba(111, 211, 192, 0.9)",
      },
    ],
  };
  renderChart(chartIds.radar, {
    type: "radar",
    data,
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true,
          min: 0,
          max: 5,
          ticks: { stepSize: 1 },
        },
      },
    },
  });
}

function renderDistribution(stats) {
  const labels = ["1", "2", "3", "4", "5"];
  const datasets = [
    {
      label: "Professionalism",
      data: stats.distribution.professionalism,
      backgroundColor: "rgba(45, 125, 210, 0.6)",
    },
    {
      label: "Appeal",
      data: stats.distribution.appeal,
      backgroundColor: "rgba(111, 211, 192, 0.6)",
    },
    {
      label: "Understandability",
      data: stats.distribution.understandability,
      backgroundColor: "rgba(231, 156, 83, 0.6)",
    },
  ];
  renderChart(chartIds.distribution, {
    type: "bar",
    data: { labels, datasets },
    options: {
      responsive: true,
      scales: {
        x: { stacked: true },
        y: { stacked: true, beginAtZero: true },
      },
    },
  });
}

function renderRanking(stats) {
  const dimension = resultsDimension.value;
  const groupBy = resultsGroupBy.value;
  const includeIncomplete = resultsIncludeIncomplete.checked;
  const limit = clamp(Number(resultsLimit.value) || 12, 3, 50);
  const items = groupStats(stats, { dimension, groupBy, includeIncomplete });
  const sorted = sortItems(items, resultsSort.value).slice(0, limit);

  renderChart(chartIds.ranking, {
    type: "bar",
    data: {
      labels: sorted.map((item) => item.label),
      datasets: [
        {
          label: dimensionLabel(dimension),
          data: sorted.map((item) => item.value),
          backgroundColor: "rgba(111, 211, 192, 0.6)",
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      scales: {
        x: {
          beginAtZero: true,
          max: 5,
        },
      },
    },
  });
}

function renderTimeline(stats) {
  const labels = Array.from(stats.votesByDay.keys()).sort();
  const data = labels.map((label) => stats.votesByDay.get(label) || 0);
  renderChart(chartIds.timeline, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Votes",
          data,
          borderColor: "rgba(45, 125, 210, 0.8)",
          backgroundColor: "rgba(45, 125, 210, 0.2)",
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

function renderTypeChart(stats) {
  const groups = groupStats(stats, {
    dimension: "overall",
    groupBy: "asset_type",
    includeIncomplete: true,
  });
  const sorted = groups.sort((a, b) => b.value - a.value).slice(0, 12);
  renderChart(chartIds.type, {
    type: "bar",
    data: {
      labels: sorted.map((item) => item.label),
      datasets: [
        {
          label: "Average score",
          data: sorted.map((item) => item.value),
          backgroundColor: "rgba(231, 156, 83, 0.6)",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, max: 5 },
      },
    },
  });
}
function renderHeatmap(stats) {
  heatmap.innerHTML = "";
  const rows = stats.assetStats.slice(0, 12);
  const header = document.createElement("div");
  header.className = "heatmap-row";
  header.innerHTML = `
    <span class="heatmap-label">Asset</span>
    <span class="heatmap-label">Pro</span>
    <span class="heatmap-label">Appeal</span>
    <span class="heatmap-label">Understand</span>
  `;
  heatmap.appendChild(header);

  rows.forEach((asset) => {
    const row = document.createElement("div");
    row.className = "heatmap-row";
    row.appendChild(labelCell(asset.asset.asset_type || asset.asset.uuid.slice(0, 6)));
    row.appendChild(scoreCell(asset.averages.professionalism));
    row.appendChild(scoreCell(asset.averages.appeal));
    row.appendChild(scoreCell(asset.averages.understandability));
    heatmap.appendChild(row);
  });
}

function renderComments(stats) {
  const query = commentSearch.value.trim().toLowerCase();
  const filtered = query
    ? stats.comments.filter((comment) => comment.text.toLowerCase().includes(query))
    : stats.comments.slice();
  const display = showAllComments ? filtered : filtered.slice(0, 6);
  commentList.innerHTML = display.length
    ? display
        .map((comment) => {
          const date = comment.created_at ? new Date(comment.created_at).toLocaleDateString() : "";
          return `
            <div class="comment-card">
              <p class="comment-meta">${comment.asset_uuid.slice(0, 8)}... | ${date}</p>
              <p class="mb-0">${escapeHtml(comment.text)}</p>
            </div>
          `;
        })
        .join("")
    : "<p class=\"text-muted mb-0\">No comments yet.</p>";

  renderCommentCloud(filtered);
}

function renderCommentCloud(comments) {
  const text = comments.map((comment) => comment.text).join(" ").toLowerCase();
  const words = text.split(/[^a-z0-9]+/).filter(Boolean);
  const stop = new Set([
    "the", "and", "for", "that", "with", "this", "was", "are", "but", "not", "you", "your",
    "a", "an", "to", "of", "in", "on", "it", "is", "as", "be", "we", "they", "i",
  ]);
  const counts = new Map();
  words.forEach((word) => {
    if (word.length < 3 || stop.has(word)) {
      return;
    }
    counts.set(word, (counts.get(word) || 0) + 1);
  });
  const top = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 16);
  commentCloud.innerHTML = top
    .map(([word, count]) => `<span class="comment-tag">${word} (${count})</span>`)
    .join("");
}

function exportResults(format) {
  if (!resultsData) {
    return;
  }
  const stats = buildStats(resultsData);
  if (format === "json") {
    downloadFile(
      `${resultsData.test.uuid}-results.json`,
      JSON.stringify(stats, null, 2),
      "application/json"
    );
    return;
  }
  const rows = [
    [
      "asset_uuid",
      "asset_type",
      "vote_count",
      "avg_professionalism",
      "avg_appeal",
      "avg_understandability",
      "overall_avg",
    ],
  ];
  stats.assetStats.forEach((asset) => {
    rows.push([
      asset.asset.uuid,
      asset.asset.asset_type || "",
      asset.vote_count,
      asset.averages.professionalism.toFixed(2),
      asset.averages.appeal.toFixed(2),
      asset.averages.understandability.toFixed(2),
      asset.overall.toFixed(2),
    ]);
  });
  const csv = rows.map((row) => row.join(",")).join("\n");
  downloadFile(`${resultsData.test.uuid}-summary.csv`, csv, "text/csv");
}

function renderChart(canvasId, config) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !window.Chart) {
    return;
  }
  if (chartStore.has(canvasId)) {
    chartStore.get(canvasId).destroy();
  }
  const chart = new window.Chart(canvas.getContext("2d"), config);
  chartStore.set(canvasId, chart);
}

function groupStats(stats, { dimension, groupBy, includeIncomplete }) {
  const minVotes = stats.minVotes || 0;
  const items = stats.assetStats.filter((asset) =>
    includeIncomplete ? true : asset.vote_count >= minVotes
  );
  const map = new Map();
  items.forEach((asset) => {
    let key = asset.asset.uuid;
    let label = `${asset.asset.asset_type || "Asset"} ${asset.asset.uuid.slice(0, 6)}`;
    if (groupBy === "asset_type") {
      key = asset.asset.asset_type || "Unknown";
      label = key;
    } else if (groupBy === "asset_group") {
      key = resolveAssetGroup(asset.asset.asset_type || "");
      label = key;
    }
    if (!map.has(key)) {
      map.set(key, { label, value: 0, votes: 0 });
    }
    const entry = map.get(key);
    const value = resolveDimensionValue(asset, dimension);
    entry.value += value;
    entry.votes += 1;
  });
  return Array.from(map.values()).map((entry) => ({
    ...entry,
    value: entry.votes ? entry.value / entry.votes : 0,
  }));
}

function resolveDimensionValue(asset, dimension) {
  if (dimension === "professionalism") {
    return asset.averages.professionalism;
  }
  if (dimension === "appeal") {
    return asset.averages.appeal;
  }
  if (dimension === "understandability") {
    return asset.averages.understandability;
  }
  return asset.overall;
}

function sortItems(items, sortBy) {
  const sorted = items.slice();
  if (sortBy === "name") {
    return sorted.sort((a, b) => a.label.localeCompare(b.label));
  }
  if (sortBy === "votes") {
    return sorted.sort((a, b) => b.votes - a.votes);
  }
  if (sortBy === "worst") {
    return sorted.sort((a, b) => a.value - b.value);
  }
  return sorted.sort((a, b) => b.value - a.value);
}

function resolveAssetGroup(type) {
  const value = type.toLowerCase();
  if (value.includes("card")) {
    return "Cards";
  }
  if (value.includes("box")) {
    return "Boxes";
  }
  if (value.includes("mat")) {
    return "Mats";
  }
  if (value.includes("board")) {
    return "Boards";
  }
  if (value.includes("token") || value.includes("chit") || value.includes("chip") || value.includes("coin")) {
    return "Tokens";
  }
  if (value.includes("standee") || value.includes("meeple")) {
    return "Standees";
  }
  if (value.includes("book") || value.includes("rule")) {
    return "Rulebooks";
  }
  if (value.includes("die") || value.includes("dice")) {
    return "Dice";
  }
  if (value.includes("sheet") || value.includes("tile")) {
    return "Sheets & Tiles";
  }
  return "Other";
}

function dimensionLabel(value) {
  if (value === "professionalism") {
    return "Professionalism";
  }
  if (value === "appeal") {
    return "Appeal";
  }
  if (value === "understandability") {
    return "Understandability";
  }
  return "Overall average";
}

function labelCell(text) {
  const span = document.createElement("span");
  span.className = "heatmap-label";
  span.textContent = text;
  return span;
}

function scoreCell(value) {
  const span = document.createElement("span");
  span.className = "heatmap-cell";
  span.textContent = value ? value.toFixed(2) : "0.00";
  span.style.background = scoreColor(value);
  return span;
}

function scoreColor(value) {
  const normalized = Math.max(0, Math.min(1, (value || 0) / 5));
  const hue = 140 * normalized + 10;
  return `hsla(${hue}, 65%, 78%, 0.8)`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}

function escapeHtml(input) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
  };
  return String(input).replace(/[&<>"']/g, (char) => map[char]);
}
