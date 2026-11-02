#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$ROOT/public/images"
for f in author-portrait.webp author-portrait-hires.webp author-portrait.jpg author-portrait-640.jpg author-portrait-1200.jpg; do
  base64 -d "$ROOT/scripts/portrait-b64/${f}.b64" > "$ROOT/public/images/$f"
  echo "wrote public/images/$f ($(wc -c < "$ROOT/public/images/$f") bytes)"
done
