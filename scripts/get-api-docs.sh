set -euo pipefail

OUTDIR="docs/tgc-api-docs"
URL="https://www.thegamecrafter.com/developer/Intro.html"

rm -rf "$OUTDIR"
mkdir -p "$OUTDIR"
cd "$OUTDIR"

# 1) Crawl only /developer/*.html starting from Intro.html
wget \
  --recursive --level=inf \
  --no-parent \
  --domains=www.thegamecrafter.com \
  --accept-regex='^https://www\.thegamecrafter\.com/developer/.*\.html$' \
  --adjust-extension \
  "$URL"