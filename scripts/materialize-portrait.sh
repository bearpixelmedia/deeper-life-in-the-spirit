#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$ROOT/public/images"
DIR="$ROOT/scripts/portrait-b64"

assemble() {
  local base="$1"
  if compgen -G "$DIR/${base}.part*" > /dev/null; then
    cat $(ls "$DIR/${base}.part"* | sort) > "$DIR/$base"
    echo "assembled $base ($(wc -c < "$DIR/$base") bytes) from parts"
  fi
}

assemble author-portrait.webp.b64
assemble author-portrait.jpg.b64
assemble author-portrait-320.jpg.b64

decode_b64() {
  local name="$1"
  local b64="$DIR/${name}.b64"
  local out="$ROOT/public/images/$name"
  if [[ -f "$b64" ]] && [[ $(wc -c < "$b64") -gt 1000 ]]; then
    base64 -d "$b64" > "$out"
    echo "wrote $out ($(wc -c < "$out") bytes) from sidecar"
    return 0
  fi
  echo "missing/incomplete sidecar for $name" >&2
  return 1
}

decode_b64 author-portrait.webp
decode_b64 author-portrait.jpg
decode_b64 author-portrait-320.jpg

# Validate Amazon navy portrait sizes (504x504 ~20KB webp / ~37KB jpg)
WEBP_BYTES=$(wc -c < "$ROOT/public/images/author-portrait.webp")
JPG_BYTES=$(wc -c < "$ROOT/public/images/author-portrait.jpg")
echo "sizes webp=$WEBP_BYTES jpg=$JPG_BYTES"
if [[ "$WEBP_BYTES" -lt 15000 ]] || [[ "$WEBP_BYTES" -gt 30000 ]]; then
  echo "Unexpected webp size $WEBP_BYTES (expected ~20180 Amazon portrait)" >&2
  exit 1
fi
if [[ "$JPG_BYTES" -lt 30000 ]] || [[ "$JPG_BYTES" -gt 50000 ]]; then
  echo "Unexpected jpg size $JPG_BYTES (expected ~37841 Amazon portrait)" >&2
  exit 1
fi

# Keep legacy aliases pointing at the same Amazon assets when present in tree
cp "$ROOT/public/images/author-portrait.webp" "$ROOT/public/images/author-portrait-hires.webp"
cp "$ROOT/public/images/author-portrait.jpg" "$ROOT/public/images/author-portrait-640.jpg"
cp "$ROOT/public/images/author-portrait.jpg" "$ROOT/public/images/author-portrait-1200.jpg"
echo "synced legacy aliases to Amazon portrait"
