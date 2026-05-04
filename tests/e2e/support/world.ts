import { test as base, expect, Page } from '@playwright/test';
import { authenticatePage } from './auth';

/**
 * Custom test fixture that provides a page ready for interaction.
 *
 * If PICLAW_INTERNAL_SECRET/PICLAW_WEB_INTERNAL_SECRET is available, the
 * fixture obtains a short-lived E2E web session before navigation. This keeps
 * authenticated microVM instances usable without weakening normal login flows.
 * If no secret is provided, the fixture falls back to no-auth mode.
 */
export const test = base.extend<{ authedPage: Page }>({
  authedPage: async ({ page }, use) => {
    const baseURL = process.env.PICLAW_E2E_URL || 'http://localhost:8080';
    const auth = await authenticatePage(page, baseURL);
    if (auth.attempted && !auth.authenticated) {
      throw new Error(`E2E auth bootstrap failed${auth.status ? ` with HTTP ${auth.status}` : ''}${auth.error ? `: ${auth.error}` : ''}`);
    }
    await page.goto(baseURL);
    await page.waitForLoadState('domcontentloaded');
    // Wait for app shell to render — SSE keeps networkidle from resolving.
    await page.waitForSelector('.compose-box, .compose-editor, [data-testid="compose-box"]', { timeout: 60000 });
    await page.waitForTimeout(500); // short SSE settle time
    await use(page);
  },
});

export { expect };
