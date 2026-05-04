import { defineConfig, devices } from '@playwright/test';

const workers = Math.max(1, Number.parseInt(process.env.PICLAW_E2E_WORKERS || '1', 10) || 1);
const timeout = Math.max(10_000, Number.parseInt(process.env.PICLAW_E2E_TEST_TIMEOUT_MS || '30000', 10) || 30_000);
// Optional: only inject an internal-secret header into browser-originated
// requests when explicitly requested. Do not reuse PICLAW_INTERNAL_SECRET here:
// the auth bootstrap request consumes that value separately, and globally adding
// it can perturb Playwright's APIRequestContext cookie/bootstrap flow.
const internalSecret = (process.env.PICLAW_E2E_INTERNAL_SECRET || '').trim();

export default defineConfig({
  testDir: './steps',
  timeout,
  retries: 1,
  workers, // default serial for stable UX assertions; override with PICLAW_E2E_WORKERS for split/fast runs
  reporter: [
    ['html', { outputFolder: './reports/html', open: 'never' }],
    ['json', { outputFile: './reports/results.json' }],
  ],
  use: {
    baseURL: process.env.PICLAW_E2E_URL || 'http://localhost:3000',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    ...(internalSecret ? { extraHTTPHeaders: { 'x-piclaw-internal-secret': internalSecret } } : {}),
    // Use domcontentloaded — SSE keeps networkidle from resolving
    navigationTimeout: 30_000,
  },
  projects: [
    {
      name: 'desktop-chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'desktop-safari',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'ipad',
      use: { ...devices['iPad Pro 11'] },
    },
    {
      name: 'iphone',
      use: { ...devices['iPhone 14 Pro'] },
    },
    {
      name: 'android-chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
