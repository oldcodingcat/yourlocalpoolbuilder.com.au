/**
 * Writes a minimal favicon.ico containing one embedded PNG (Vista+ format).
 * Usage: node scripts/write-favicon-ico.mjs <input.png> <output.ico>
 */
import { readFileSync, writeFileSync } from "node:fs";

const pngPath = process.argv[2] ?? "public/icons/favicon-32.png";
const icoPath = process.argv[3] ?? "public/favicon.ico";
const png = readFileSync(pngPath);
const imageOffset = 6 + 16; // ICONDIR + single ICONDIRENTRY
const buf = Buffer.alloc(imageOffset + png.length);
// ICONDIR
buf.writeUInt16LE(0, 0); // reserved
buf.writeUInt16LE(1, 2); // type: icon
buf.writeUInt16LE(1, 4); // count
// ICONDIRENTRY (256 => 0 means 256 for width/height in classic ICO; we use 32)
const w = 32;
const h = 32;
buf.writeUInt8(w === 256 ? 0 : w, 6);
buf.writeUInt8(h === 256 ? 0 : h, 7);
buf.writeUInt8(0, 8); // color count
buf.writeUInt8(0, 9); // reserved
buf.writeUInt16LE(1, 10); // planes
buf.writeUInt16LE(32, 12); // bit count (hint; PNG carries real depth)
buf.writeUInt32LE(png.length, 14);
buf.writeUInt32LE(imageOffset, 18);
png.copy(buf, imageOffset);
writeFileSync(icoPath, buf);
console.log("Wrote", icoPath, buf.length, "bytes");
