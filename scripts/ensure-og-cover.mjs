import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, "..", "public", "images", "og-cover.jpg");
const source =
  "https://m.media-amazon.com/images/I/71oaK84UvHL._SL1200_.jpg";

mkdirSync(dirname(out), { recursive: true });

if (existsSync(out)) {
  console.log(`og-cover already present (${out})`);
  process.exit(0);
}

const res = await fetch(source);
if (!res.ok) {
  console.error(`Failed to download OG cover: ${res.status} ${res.statusText}`);
  process.exit(1);
}

const buf = Buffer.from(await res.arrayBuffer());
writeFileSync(out, buf);
console.log(`wrote ${out} (${buf.length} bytes)`);
