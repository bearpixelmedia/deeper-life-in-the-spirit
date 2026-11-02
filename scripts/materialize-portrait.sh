#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$ROOT/public/images"
for f in author-portrait.webp author-portrait-hires.webp author-portrait.jpg author-portrait-640.jpg author-portrait-1200.jpg; do
  b64="$ROOT/scripts/portrait-b64/${f}.b64"
  if compgen -G "${b64}.part*" > /dev/null; then
    cat $(ls "${b64}.part"* | sort) > "$b64"
  fi
  base64 -d "$b64" > "$ROOT/public/images/$f"
  echo "wrote public/images/$f ($(wc -c < "$ROOT/public/images/$f") bytes)"
done
