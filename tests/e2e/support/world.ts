import { test as base, expect, Page } from '@playwright/test';

/**
 * Custom test fixture that provides a page ready for interaction.
 *
 * The E2E test instance runs WITHOUT auth — no passkey, no TOTP, no PIN.
 * Just navigate and go.
 */
export const test = base.extend<{ authedPage: Page }>({
  authedPage: async ({ page }, use) => {
    const baseURL = process.env.PICLAW_E2E_URL || 'http://localhost:8080';
    await page.goto(baseURL);
    await page.waitForLoadState('domcontentloaded');
    // Wait for app shell to render — SSE keeps networkidle from resolving
    await page.waitForSelector('.compose-box, .compose-editor, [data-testid="compose-box"]', { timeout: 60000 }).catch(() => {});
    await page.waitForTimeout(2000); // SSE settle time
    await use(page);
  },
});

export { expect };
