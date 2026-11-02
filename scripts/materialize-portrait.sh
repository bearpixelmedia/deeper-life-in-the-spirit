#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$ROOT/public/images"

WEBP_URL="${AUTHOR_PORTRAIT_WEBP_URL:-https://tmpfiles.org/dl/1793652699.9602bd0826779c06/wbASdXNJ23sV/author-portrait-real.webp}"
OUT_WEBP="$ROOT/public/images/author-portrait.webp"

# Prefer exact joined base64 sidecars when present; otherwise download the known-good user asset.
B64="$ROOT/scripts/portrait-b64/author-portrait.webp.b64"
if compgen -G "${B64}.part*" > /dev/null; then
  cat $(ls "${B64}.part"* | sort) > "$B64"
fi
if [[ -f "$B64" ]] && [[ $(wc -c < "$B64") -gt 1000 ]]; then
  base64 -d "$B64" > "$OUT_WEBP"
else
  echo "Downloading author portrait from $WEBP_URL"
  curl -fsSL -o "$OUT_WEBP" "$WEBP_URL"
fi

BYTES=$(wc -c < "$OUT_WEBP")
echo "wrote public/images/author-portrait.webp ($BYTES bytes)"
if [[ "$BYTES" -lt 140000 ]] || [[ "$BYTES" -gt 150000 ]]; then
  echo "Unexpected webp size $BYTES (expected ~145064)" >&2
  exit 1
fi

cp "$OUT_WEBP" "$ROOT/public/images/author-portrait-hires.webp"
echo "wrote public/images/author-portrait-hires.webp ($(wc -c < "$ROOT/public/images/author-portrait-hires.webp") bytes)"

decode_or_convert() {
  local name="$1"
  local resize="$2"
  local quality="$3"
  local b64="$ROOT/scripts/portrait-b64/${name}.b64"
  if compgen -G "${b64}.part*" > /dev/null; then
    cat $(ls "${b64}.part"* | sort) > "$b64"
  fi
  if [[ -f "$b64" ]] && [[ $(wc -c < "$b64") -gt 1000 ]]; then
    base64 -d "$b64" > "$ROOT/public/images/$name"
  else
    if [[ -n "$resize" ]]; then
      magick "$OUT_WEBP" -resize "$resize" -quality "$quality" "$ROOT/public/images/$name"
    else
      magick "$OUT_WEBP" -quality "$quality" "$ROOT/public/images/$name"
    fi
  fi
  echo "wrote public/images/$name ($(wc -c < "$ROOT/public/images/$name") bytes)"
}

decode_or_convert author-portrait.jpg "" 90
decode_or_convert author-portrait-1200.jpg "1200x1200" 88
decode_or_convert author-portrait-640.jpg "640x640" 85
