import { createServer } from "node:net";
import { join } from "node:path";

import { BrowserWindow, PATHS, Utils } from "electrobun/bun";

const DEFAULT_DESKTOP_PORT_START = 18080;
const STARTUP_TIMEOUT_MS = 120_000;
const STARTUP_POLL_MS = 500;

function isTruthy(value: string | undefined): boolean {
  return /^(1|true|yes|on)$/i.test(String(value || "").trim());
}

async function findAvailablePort(startPort: number): Promise<number> {
  for (let port = startPort; port < startPort + 100; port += 1) {
    const available = await new Promise<boolean>((resolve) => {
      const server = createServer();
      server.once("error", () => resolve(false));
      server.listen(port, "127.0.0.1", () => {
        server.close(() => resolve(true));
      });
    });
    if (available) return port;
  }
  throw new Error(`No available localhost port found from ${startPort} to ${startPort + 99}.`);
}

async function waitForHttpReady(url: string, timeoutMs = STARTUP_TIMEOUT_MS): Promise<void> {
  const started = Date.now();
  let lastError: unknown = null;
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url, { method: "GET" });
      await response.body?.cancel().catch(() => {});
      return;
    } catch (error) {
      lastError = error;
      await Bun.sleep(STARTUP_POLL_MS);
    }
  }
  throw new Error(`Piclaw web UI did not become ready at ${url}: ${lastError instanceof Error ? lastError.message : String(lastError)}`);
}

function setDefaultEnv(name: string, value: string): void {
  if (!process.env[name]) process.env[name] = value;
}

async function configureDesktopRuntime(): Promise<{ url: string; ownsRuntime: boolean }> {
  const externalUrl = process.env.PICLAW_DESKTOP_URL?.trim();
  if (externalUrl) {
    return { url: externalUrl, ownsRuntime: false };
  }

  const resourcesAppDir = join(PATHS.RESOURCES_FOLDER, "app");
  const runtimeRoot = join(resourcesAppDir, "runtime");
  const desktopWorkspace = join(Utils.paths.appData, "PiClaw", "workspace");
  const requestedPort = Number.parseInt(process.env.PICLAW_WEB_PORT || "", 10);
  const port = Number.isFinite(requestedPort) && requestedPort > 0
    ? requestedPort
    : await findAvailablePort(DEFAULT_DESKTOP_PORT_START);

  setDefaultEnv("PICLAW_DESKTOP", "1");
  setDefaultEnv("PICLAW_WEB_HOST", "127.0.0.1");
  setDefaultEnv("PICLAW_WEB_PORT", String(port));
  setDefaultEnv("PICLAW_WEB_EXTERNAL_URL", `http://127.0.0.1:${port}`);
  setDefaultEnv("PICLAW_WORKSPACE", desktopWorkspace);
  setDefaultEnv("PICLAW_RUNTIME_ROOT", runtimeRoot);
  setDefaultEnv("PICLAW_WEB_STATIC_DIR", join(runtimeRoot, "web", "static"));
  setDefaultEnv("PICLAW_RUNTIME_DOCS_DIR", join(runtimeRoot, "docs"));
  setDefaultEnv("PICLAW_SKEL_DIR", join(resourcesAppDir, "skel"));

  // The desktop shell owns the long-lived process; keep helper child processes
  // opt-in until packaged executable path handling is validated per platform.
  setDefaultEnv("PICLAW_EXTERNAL_PROGRESS_WATCHDOG", "0");
  setDefaultEnv("PICLAW_DISABLE_BACKGROUND_WORKSPACE_INDEX", "1");

  return {
    url: process.env.PICLAW_WEB_EXTERNAL_URL,
    ownsRuntime: true,
  };
}

function escapeHtml(text: string): string {
  return text.replace(/[&<>]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char]!));
}

function openWindow(url: string): BrowserWindow {
  return new BrowserWindow({
    title: "PiClaw",
    url,
    frame: {
      width: 1440,
      height: 960,
      x: 80,
      y: 60,
    },
    titleBarStyle: "default",
  });
}

function openStartupErrorWindow(error: unknown): void {
  const message = error instanceof Error ? error.stack || error.message : String(error);
  new BrowserWindow({
    title: "PiClaw startup failed",
    frame: {
      width: 900,
      height: 520,
      x: 120,
      y: 90,
    },
    html: `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>PiClaw startup failed</title>
  <style>
    body { margin: 0; padding: 32px; font: 14px system-ui, sans-serif; background: #111827; color: #f9fafb; }
    h1 { margin: 0 0 16px; font-size: 22px; }
    pre { white-space: pre-wrap; background: #030712; border: 1px solid #374151; padding: 16px; border-radius: 8px; overflow: auto; }
  </style>
</head>
<body>
  <h1>PiClaw could not start</h1>
  <pre>${escapeHtml(message)}</pre>
</body>
</html>`,
  });
}

try {
  const runtime = await configureDesktopRuntime();

  if (runtime.ownsRuntime && !isTruthy(process.env.PICLAW_DESKTOP_SKIP_RUNTIME)) {
    const { main } = await import("../src/runtime.js");
    void main().catch((error) => {
      console.error("[piclaw-desktop] Runtime failed", error);
      openStartupErrorWindow(error);
    });
    await waitForHttpReady(runtime.url);
  }

  openWindow(runtime.url);
} catch (error) {
  console.error("[piclaw-desktop] Startup failed", error);
  openStartupErrorWindow(error);
}
