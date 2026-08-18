"use client";

// Loader custom: con output:'export' Next no puede optimizar en runtime, asi que
// las variantes se generan en build (scripts/optimize-images.mjs) y aqui solo se
// elige la mas chica que cubra el ancho pedido.
import manifest from "./image-manifest.json";

const PREFIX = "/media/";

export default function imageLoader({ src, width }) {
  // logo.webp, og-image.jpg y cualquier otra ruta se sirven tal cual.
  if (!src.startsWith(PREFIX)) return src;

  const name = src.slice(PREFIX.length).replace(/\.[^.]+$/, "");
  const available = manifest[name];
  if (!available) return src;

  // Solo se piden anchos que existen en disco, asi que no puede haber 404.
  const match = available.find((w) => w >= width);
  return match ? `${PREFIX}opt/${name}-${match}.webp` : src;
}
