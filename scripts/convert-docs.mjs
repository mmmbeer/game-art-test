import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";
import TurndownService from "turndown";

/**
 * Usage:
 *   node convert-html-to-md.debug.mjs <inputDir> <outputFile> [--quiet]
 *
 * Example:
 *   node convert-html-to-md.debug.mjs ../docs/tgc-api-docs ../docs/tgc-api.md
 */

const args = process.argv.slice(2);
const quiet = args.includes("--quiet");
const inputDir = args[0];
const outputFile = args[1] ?? "thegamecrafter-developer.md";

const log = (...m) => { if (!quiet) console.log(...m); };
const warn = (...m) => console.warn(...m);
const err = (...m) => console.error(...m);

process.on("unhandledRejection", (e) => {
  err("[FATAL] Unhandled promise rejection:", e);
  process.exitCode = 1;
});
process.on("uncaughtException", (e) => {
  err("[FATAL] Uncaught exception:", e);
  process.exit(1);
});

if (!inputDir) {
  err("Missing inputDir.\nExample:\n  node convert-html-to-md.debug.mjs ./tgc-dev-docs/www.thegamecrafter.com/developer ./thegamecrafter-developer.md");
  process.exit(1);
}

const started = Date.now();

function abs(p) {
  return path.resolve(process.cwd(), p);
}

async function existsDir(p) {
  try {
    const st = await fs.stat(p);
    return st.isDirectory();
  } catch {
    return false;
  }
}

async function listHtmlFiles(dir) {
  const out = [];
  async function walk(current) {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) {
        await walk(full);
      } else if (e.isFile() && /\.html?$/i.test(e.name)) {
        out.push(full);
      }
    }
  }
  await walk(dir);
  out.sort((a, b) => a.localeCompare(b, "en"));
  return out;
}

function slugify(s) {
  return (s ?? "")
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function pickMainContent(document) {
  const candidates = ["main", "#content", ".content", "#main", ".main", "article", ".container"];
  for (const sel of candidates) {
    const el = document.querySelector(sel);
    if (el && el.textContent && el.textContent.trim().length > 200) return el;
  }
  return document.body;
}

function cleanDom(document) {
  const removeSelectors = [
    "script", "style", "noscript",
    "header", "footer", "nav", "aside",
    ".nav", ".navbar", ".footer", ".header"
  ];
  for (const sel of removeSelectors) {
    document.querySelectorAll(sel).forEach((n) => n.remove());
  }
}

async function loadGfmPlugin() {
  // Support both CJS and ESM shapes for turndown-plugin-gfm.
  // The original mixmark plugin documents `gfm` usage. :contentReference[oaicite:1]{index=1}
  try {
    const mod = await import("turndown-plugin-gfm");
    const gfm = mod.gfm ?? mod.default?.gfm;
    if (!gfm) throw new Error("turndown-plugin-gfm loaded, but no `gfm` export found");
    return gfm;
  } catch (e) {
    warn("[WARN] Could not load turndown-plugin-gfm. Continuing without it.");
    warn("       Reason:", String(e?.message ?? e));
    return null;
  }
}

function buildTurndown({ gfm }) {
  const td = new TurndownService({
    codeBlockStyle: "fenced",
    emDelimiter: "*",
    bulletListMarker: "-",
    headingStyle: "atx",
    hr: "---",
  });

  if (gfm) td.use(gfm);

  // Demote any h1 from pages so the combined doc has a single top title.
  td.addRule("demoteH1", {
    filter: ["h1"],
    replacement(content) {
      const text = content.trim();
      return text ? `\n\n### ${text}\n\n` : "";
    },
  });

  // Ensure <pre> becomes fenced code blocks
  td.addRule("fencePre", {
    filter(node) {
      return node.nodeName === "PRE";
    },
    replacement(_content, node) {
      const code = node.textContent ?? "";
      return `\n\n\`\`\`\n${code.replace(/\n$/, "")}\n\`\`\`\n\n`;
    },
  });

  return td;
}

async function readPage(filePath, baseDir, turndown) {
  const html = await fs.readFile(filePath, "utf8");
  const dom = new JSDOM(html);
  const { document } = dom.window;

  const rel = path.relative(baseDir, filePath).replaceAll(path.sep, "/");

  const title =
    (document.querySelector("h1")?.textContent || "").trim() ||
    (document.querySelector("title")?.textContent || "").trim() ||
    rel;

  cleanDom(document);
  const main = pickMainContent(document);

  const firstH1 = main.querySelector?.("h1");
  if (firstH1) firstH1.remove();

  const md = turndown.turndown(main.innerHTML ?? "");
  return { rel, title, md };
}

async function run() {
  log("[INFO] Node:", process.version);
  log("[INFO] CWD :", process.cwd());
  log("[INFO] Input (raw) :", inputDir);
  log("[INFO] Input (abs) :", abs(inputDir));
  log("[INFO] Output (raw):", outputFile);
  log("[INFO] Output (abs):", abs(outputFile));

  if (!(await existsDir(inputDir))) {
    throw new Error(`Input directory does not exist or is not a directory: ${abs(inputDir)}`);
  }

  const files = await listHtmlFiles(inputDir);
  log("[INFO] HTML files found:", files.length);
  if (!files.length) {
    throw new Error(`No .html files found under: ${abs(inputDir)}`);
  }
  log("[INFO] First few files:");
  files.slice(0, 5).forEach((f) => log("  -", path.relative(inputDir, f)));

  const gfm = await loadGfmPlugin();
  log("[INFO] GFM plugin:", gfm ? "loaded" : "not loaded");

  const turndown = buildTurndown({ gfm });

  const pages = [];
  let failed = 0;

  for (const f of files) {
    try {
      pages.push(await readPage(f, inputDir, turndown));
    } catch (e) {
      failed++;
      const rel = path.relative(inputDir, f).replaceAll(path.sep, "/");
      warn("[WARN] Failed to parse:", rel, "=>", String(e?.message ?? e));
      pages.push({ rel, title: rel, md: `> Failed to parse: ${String(e?.message ?? e)}` });
    }
  }

  const intro = pages.find((p) => /intro\.html?$/i.test(p.rel));
  const docTitle = intro?.title || "Developer Docs";

  const tocLines = pages.map((p) => {
    const anchor = slugify(p.title || p.rel);
    return `- [${p.title || p.rel}](#${anchor})`;
  });

  let out = `# ${docTitle}\n\n`;
  out += `Generated from local HTML files.\n\n`;
  out += `## Contents\n\n${tocLines.join("\n")}\n\n---\n`;

  for (const p of pages) {
    const anchor = slugify(p.title || p.rel);
    out += `\n\n<a id="${anchor}"></a>\n`;
    out += `\n## ${p.title || p.rel}\n\n`;
    out += `> Source file: \`${p.rel}\`\n\n`;
    out += `${(p.md || "").trim()}\n\n---\n`;
  }

  // Ensure output directory exists before writing :contentReference[oaicite:2]{index=2}
  const outAbs = abs(outputFile);
  await fs.mkdir(path.dirname(outAbs), { recursive: true });

  log("[INFO] Writing output...");
  await fs.writeFile(outAbs, out, "utf8");

  const st = await fs.stat(outAbs);
  log("[INFO] Wrote:", outAbs);
  log("[INFO] Size :", st.size, "bytes");
  log("[INFO] Pages:", pages.length, "Failed:", failed);
  log("[INFO] Done in", ((Date.now() - started) / 1000).toFixed(2), "s");
}

run().catch((e) => {
  err("[FATAL]", e?.stack || String(e));
  process.exit(1);
});
