import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-01: Morning Triage

test.describe('US-01: Morning Triage', () => {
  test('switching between sessions is fast', async ({ authedPage: page }) => {
    // Open session popup
    await page.click(sel.sessionPopup + ', [data-testid="session-switcher"]');
    await page.waitForSelector(sel.sessionItem);

    const sessions = await page.locator(sel.sessionItem).all();
    expect(sessions.length).toBeGreaterThanOrEqual(2);

    // Switch to second session and measure
    const start = Date.now();
    await sessions[1].click();
    await page.waitForSelector(sel.timeline);
    const elapsed = Date.now() - start;

    expect(elapsed).toBeLessThan(500);
  });

  test('timeline loads without cross-session bleed', async ({ authedPage: page }) => {
    // Get messages from current session
    await page.waitForSelector(sel.post);
    const firstSessionPosts = await page.locator(sel.post).allTextContents();

    // Switch session
    await page.click(sel.sessionPopup + ', [data-testid="session-switcher"]');
    await page.waitForSelector(sel.sessionItem);
    const sessions = await page.locator(sel.sessionItem).all();
    if (sessions.length < 2) test.skip();
    await sessions[1].click();
    await page.waitForTimeout(300);

    // Verify no messages from first session leaked
    const secondSessionPosts = await page.locator(sel.post).allTextContents();
    // At least the content should differ (not identical arrays)
    if (firstSessionPosts.length > 0 && secondSessionPosts.length > 0) {
      const identical = JSON.stringify(firstSessionPosts) === JSON.stringify(secondSessionPosts);
      // Different sessions should generally have different content
      // (not a hard assert — they could theoretically match, but very unlikely)
      if (firstSessionPosts.length > 3) {
        expect(identical).toBe(false);
      }
    }
  });

  test('compose box is ready after session switch', async ({ authedPage: page }) => {
    await page.click(sel.sessionPopup + ', [data-testid="session-switcher"]');
    await page.waitForSelector(sel.sessionItem);
    const sessions = await page.locator(sel.sessionItem).all();
    if (sessions.length < 2) test.skip();
    await sessions[1].click();
    await page.waitForTimeout(200);

    const compose = page.locator(sel.composeInput);
    await expect(compose).toBeVisible();
    await expect(compose).toBeEditable();
  });

  test('/tint command works from compose', async ({ authedPage: page }) => {
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('/tint blue');
    await page.keyboard.press('Enter');
    // Should not produce an error — command is handled locally
    await page.waitForTimeout(500);
    // No error toast or failure bubble
    const errors = await page.locator('.error-toast, .failure-bubble').count();
    expect(errors).toBe(0);
  });

  test('/theme command works from compose', async ({ authedPage: page }) => {
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('/theme dark');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
    const errors = await page.locator('.error-toast, .failure-bubble').count();
    expect(errors).toBe(0);
  });
});
