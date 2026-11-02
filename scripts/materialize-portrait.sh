#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$ROOT/public/images"
join_b64() {
  local name="$1"
  local b64="$ROOT/scripts/portrait-b64/${name}.b64"
  if compgen -G "${b64}.part*" > /dev/null; then
    cat $(ls "${b64}.part"* | sort) > "$b64"
  fi
  base64 -d "$b64" > "$ROOT/public/images/$name"
  echo "wrote public/images/$name ($(wc -c < "$ROOT/public/images/$name") bytes)"
}
join_b64 author-portrait.webp
cp "$ROOT/public/images/author-portrait.webp" "$ROOT/public/images/author-portrait-hires.webp"
echo "wrote public/images/author-portrait-hires.webp ($(wc -c < "$ROOT/public/images/author-portrait-hires.webp") bytes)"
join_b64 author-portrait.jpg
join_b64 author-portrait-640.jpg
join_b64 author-portrait-1200.jpg
