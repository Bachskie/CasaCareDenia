#!/bin/sh
# Generates PNG favicons and favicon.ico from assets/logo.svg
# Requires: imagemagick `convert` or librsvg `rsvg-convert` and pngcrush/optipng for optimisation
set -e
SRC=assets/logo.svg
OUT=assets/favicons
mkdir -p $OUT
# PNG sizes
sizes="16 32 48 64 96 128 192 256 512"
for s in $sizes; do
  echo "Generating $s x $s"
  if command -v rsvg-convert >/dev/null 2>&1; then
    rsvg-convert -w $s -h $s $SRC -o $OUT/favicon-$s.png
  else
    convert -background none -resize ${s}x${s} $SRC $OUT/favicon-$s.png
  fi
done
# Create favicon.ico (contains 16/32/48)
if command -v convert >/dev/null 2>&1; then
  convert $OUT/favicon-16.png $OUT/favicon-32.png $OUT/favicon-48.png $OUT/favicon.ico
  echo "favicon.ico created at $OUT/favicon.ico"
else
  echo "Install ImageMagick to generate favicon.ico"
fi
# Optional optimisation
if command -v pngcrush >/dev/null 2>&1; then
  for f in $OUT/*.png; do pngcrush -ow "$f"; done
elif command -v optipng >/dev/null 2>&1; then
  optipng -o3 $OUT/*.png
fi

echo "Favicons generated in $OUT"
