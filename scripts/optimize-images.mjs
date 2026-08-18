// Genera variantes responsive de public/media en build.
// Necesario porque output:'export' desactiva el optimizador de imagenes de Next.
// El manifest que emite lo consume image-loader.js para armar el srcset.
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC_DIR = "public/media";
const OUT_DIR = "public/media/opt";
const MANIFEST = "image-manifest.json";

// Debe coincidir con images.deviceSizes en next.config.ts
const WIDTHS = [640, 828, 1200, 1600];
const QUALITY = 82;

const mtime = async (p) => stat(p).then((s) => s.mtimeMs, () => 0);

await mkdir(OUT_DIR, { recursive: true });

const files = (await readdir(SRC_DIR)).filter((f) => /\.(webp|jpe?g|png)$/i.test(f));
const manifest = {};
let generated = 0;
let skipped = 0;

for (const file of files) {
  const name = path.basename(file, path.extname(file));
  const src = path.join(SRC_DIR, file);
  const { width } = await sharp(src).metadata();

  // Solo anchos que realmente reducen la imagen; ampliar no sirve de nada.
  const widths = WIDTHS.filter((w) => w < width);
  if (widths.length) manifest[name] = widths;

  const srcTime = await mtime(src);

  for (const w of widths) {
    const out = path.join(OUT_DIR, `${name}-${w}.webp`);
    if (await mtime(out) > srcTime) {
      skipped++;
      continue;
    }
    await sharp(src).resize({ width: w }).webp({ quality: QUALITY, effort: 6 }).toFile(out);
    generated++;
  }
}

// Solo reescribir si cambio, para no invalidar el cache de build sin motivo.
const next = JSON.stringify(manifest, null, 2) + "\n";
const prev = await readFile(MANIFEST, "utf8").catch(() => "");
if (prev !== next) await writeFile(MANIFEST, next);

console.log(
  `[images] ${files.length} originales -> ${generated} generadas, ${skipped} ya al dia`
);
