import { afterEach, describe, expect, test } from "bun:test";
import "../helpers.js";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { join } from "path";

import { WORKSPACE_DIR } from "../../src/core/config.js";
import { bunRunner } from "../../src/extensions/bun-runner.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";

const cleanupPaths: string[] = [];

function makeTempDir(): { prefix: string; base: string } {
  const prefix = `bun-runner-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const base = join(WORKSPACE_DIR, prefix);
  mkdirSync(base, { recursive: true });
  cleanupPaths.push(base);
  return { prefix, base };
}

afterEach(() => {
  while (cleanupPaths.length > 0) {
    const next = cleanupPaths.pop();
    if (next) rmSync(next, { recursive: true, force: true });
  }
});

describe("bun-runner extension", () => {
  test("registers bun_run and advertises its hint", async () => {
    const fake = createFakeExtensionApi();
    bunRunner(fake.api);

    expect(fake.tools.has("bun_run")).toBe(true);
  });

  test("runs a workspace Bun script directly and captures stderr only", async () => {
    const fake = createFakeExtensionApi();
    bunRunner(fake.api);
    const tool = fake.tools.get("bun_run");
    if (!tool) throw new Error("bun_run not registered");

    const { prefix, base } = makeTempDir();
    const scriptPath = join(base, "script.ts");
    const outputPath = join(base, "result.txt");
    writeFileSync(scriptPath, [
      'const [outPath, label] = process.argv.slice(2);',
      'console.log("stdout should be discarded");',
      'console.error(`stderr:${label}`);',
      'await Bun.write(outPath, `done:${label}`);',
    ].join("\n"), "utf8");

    const result = await tool.execute("tool-1", {
      script: `${prefix}/script.ts`,
      args: ["result.txt", "ok"],
      cwd: prefix,
      timeout_sec: 30,
    });

    expect(result.content[0].text).toContain(`bun_run completed successfully for ${prefix}/script.ts.`);
    expect(result.content[0].text).toContain("stderr:ok");
    expect(result.content[0].text).not.toContain("stdout should be discarded");
    expect(result.details.ok).toBe(true);
    expect(result.details.exit_code).toBe(0);
    expect(readFileSync(outputPath, "utf8")).toBe("done:ok");
  });

  test("rejects scripts outside the workspace", async () => {
    const fake = createFakeExtensionApi();
    bunRunner(fake.api);
    const tool = fake.tools.get("bun_run");
    if (!tool) throw new Error("bun_run not registered");

    const result = await tool.execute("tool-2", {
      script: "../../etc/passwd",
    });

    expect(result.details.ok).toBe(false);
    expect(result.content[0].text).toContain("bun_run failed");
    expect(result.content[0].text).toContain("inside the workspace");
  });
});
