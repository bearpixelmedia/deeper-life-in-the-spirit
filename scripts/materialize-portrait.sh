#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$ROOT/public/images"
B64="$ROOT/scripts/portrait-b64/author-portrait.webp.b64"
if compgen -G "${B64}.part*" > /dev/null; then
  cat $(ls "${B64}.part"* | sort) > "$B64"
fi
base64 -d "$B64" > "$ROOT/public/images/author-portrait.webp"
cp "$ROOT/public/images/author-portrait.webp" "$ROOT/public/images/author-portrait-hires.webp"
echo "wrote public/images/author-portrait.webp ($(wc -c < "$ROOT/public/images/author-portrait.webp") bytes)"
echo "wrote public/images/author-portrait-hires.webp ($(wc -c < "$ROOT/public/images/author-portrait-hires.webp") bytes)"

# Prefer exact JPEG sidecars when present; otherwise generate from WebP.
decode_or_convert() {
  local name="$1"
  local resize="$2"
  local quality="$3"
  local b64="$ROOT/scripts/portrait-b64/${name}.b64"
  if compgen -G "${b64}.part*" > /dev/null; then
    cat $(ls "${b64}.part"* | sort) > "$b64"
  fi
  if [[ -f "$b64" ]]; then
    base64 -d "$b64" > "$ROOT/public/images/$name"
  else
    if [[ -n "$resize" ]]; then
      magick "$ROOT/public/images/author-portrait.webp" -resize "$resize" -quality "$quality" "$ROOT/public/images/$name"
    else
      magick "$ROOT/public/images/author-portrait.webp" -quality "$quality" "$ROOT/public/images/$name"
    fi
  fi
  echo "wrote public/images/$name ($(wc -c < "$ROOT/public/images/$name") bytes)"
}
decode_or_convert author-portrait.jpg "" 90
decode_or_convert author-portrait-1200.jpg "1200x1200" 88
decode_or_convert author-portrait-640.jpg "640x640" 85
