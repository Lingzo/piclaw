#!/usr/bin/env bun
import { copyFileSync, existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

import sharp from "sharp";

const targetOS = process.env.ELECTROBUN_OS || (process.platform === "darwin" ? "macos" : process.platform);
if (targetOS !== "macos") {
  console.log(`[desktop:icons] macOS icon install skipped for ${targetOS}`);
  process.exit(0);
}

const SOURCE_ICON = resolve(import.meta.dir, "../../docs/icon.png");
const OUTPUT_ICNS = resolve(import.meta.dir, "../../build/electrobun/AppIcon.icns");

const iconEntries = [
  ["icp4", 16],
  ["icp5", 32],
  ["icp6", 64],
  ["ic07", 128],
  ["ic08", 256],
  ["ic09", 512],
  ["ic10", 1024],
] as const;

function writeUint32BE(value: number): Buffer {
  const buffer = Buffer.alloc(4);
  buffer.writeUInt32BE(value, 0);
  return buffer;
}

function createIcnsChunk(type: string, payload: Buffer): Buffer {
  return Buffer.concat([
    Buffer.from(type, "ascii"),
    writeUint32BE(payload.length + 8),
    payload,
  ]);
}

async function buildIcns(): Promise<void> {
  const chunks = await Promise.all(
    iconEntries.map(async ([type, size]) => {
      const payload = await sharp(SOURCE_ICON)
        .resize(size, size, { fit: "cover" })
        .png()
        .toBuffer();
      return createIcnsChunk(type, payload);
    })
  );
  const totalLength = 8 + chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  mkdirSync(dirname(OUTPUT_ICNS), { recursive: true });
  writeFileSync(OUTPUT_ICNS, Buffer.concat([
    Buffer.from("icns", "ascii"),
    writeUint32BE(totalLength),
    ...chunks,
  ]));
}

function findBuiltApp(): string | null {
  const buildDir = process.env.ELECTROBUN_BUILD_DIR;
  if (!buildDir || !existsSync(buildDir)) return null;

  const appName = process.env.ELECTROBUN_APP_NAME;
  if (appName) {
    const namedApp = join(buildDir, `${appName}.app`);
    if (existsSync(namedApp)) return namedApp;
  }

  const app = readdirSync(buildDir).find((entry) => entry.endsWith(".app"));
  return app ? join(buildDir, app) : null;
}

await buildIcns();
console.log(`[desktop:icons] generated ${OUTPUT_ICNS}`);

const appPath = findBuiltApp();
if (appPath) {
  const destPath = join(appPath, "Contents", "Resources", "AppIcon.icns");
  mkdirSync(dirname(destPath), { recursive: true });
  copyFileSync(OUTPUT_ICNS, destPath);
  console.log(`[desktop:icons] installed ${destPath}`);
}
