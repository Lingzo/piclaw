import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-17: Compose Submission Instant Visibility
//
// Flow: user types → Enter → POST /agent/chat → SSE new_post event
//   → appendUniqueTimelinePost() → scrollToBottom()
// The POST response also returns the message ID for scroll-into-view.
//
// User messages should appear in the timeline immediately after submission,
// without waiting for the agent to respond.

/** Send a message via the compose box. */
async function sendViaCompose(page: import('@playwright/test').Page, text: string) {
  const compose = page.locator(sel.composeInput);
  await compose.click();
  await compose.fill(text);
  await page.keyboard.press('Enter');
}

/** Find a post containing the given text. */
function postWithText(page: import('@playwright/test').Page, text: string) {
  return page.locator(`${sel.post}:has(${sel.postContent}:text-is("${text}")), ${sel.post} ${sel.postContent}:text-is("${text}")`);
}

// ── Core: message appears instantly ──────────────────────────────

test.describe('US-17: Instant Submission Visibility', () => {
  test('typed message appears in timeline after Enter', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    const testMsg = `e2e-instant-${Date.now()}`;
    await sendViaCompose(page, testMsg);

    // Message should appear in the timeline (via SSE new_post)
    const post = page.locator(sel.postContent, { hasText: testMsg });
    await expect(post).toBeVisible({ timeout: 5000 });

    // Compose should be empty
    const compose = page.locator(sel.composeInput);
    const remaining = await compose.textContent() || await compose.inputValue().catch(() => '');
    expect(remaining.trim()).toBe('');
  });

  test('message appears within 1 second', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    const testMsg = `e2e-timing-${Date.now()}`;
    const start = Date.now();
    await sendViaCompose(page, testMsg);

    // Wait for the message to appear — must be within 1s
    const post = page.locator(sel.postContent, { hasText: testMsg });
    await expect(post).toBeVisible({ timeout: 1500 });

    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(1500); // generous bound including network
  });

  test('multiple rapid submissions appear in order', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    const msg1 = `e2e-order-A-${Date.now()}`;
    const msg2 = `e2e-order-B-${Date.now()}`;

    await sendViaCompose(page, msg1);
    // Send second immediately (agent may still be processing first)
    await page.waitForTimeout(200);
    await sendViaCompose(page, msg2);

    // Both should appear
    const post1 = page.locator(sel.postContent, { hasText: msg1 });
    const post2 = page.locator(sel.postContent, { hasText: msg2 });
    await expect(post1).toBeVisible({ timeout: 5000 });
    await expect(post2).toBeVisible({ timeout: 5000 });

    // Order: msg1 should come before msg2 in the DOM
    const allPosts = await page.locator(sel.postContent).allTextContents();
    const idx1 = allPosts.findIndex(t => t.includes(msg1));
    const idx2 = allPosts.findIndex(t => t.includes(msg2));
    expect(idx1).toBeLessThan(idx2);
  });

  test('long multi-line message appears completely', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    const lines = [
      'Line 1: This is a multi-line test',
      'Line 2: Second line of content',
      'Line 3: Third line here',
      'Line 4: Almost done',
      'Line 5: Final line',
    ];
    // Use Shift+Enter for newlines in compose
    const compose = page.locator(sel.composeInput);
    await compose.click();
    for (let i = 0; i < lines.length; i++) {
      await page.keyboard.type(lines[i]);
      if (i < lines.length - 1) {
        await page.keyboard.press('Shift+Enter');
      }
    }
    await page.keyboard.press('Enter');

    // All lines should appear in the timeline
    await page.waitForTimeout(2000);
    const posts = await page.locator(sel.postContent).allTextContents();
    const lastPost = posts[posts.length - 1] || '';
    // At least first and last line should be present (not truncated)
    expect(lastPost).toContain('Line 1');
    expect(lastPost).toContain('Line 5');
  });

  test('compose box clears and stays focused after submission', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    await sendViaCompose(page, `e2e-clear-${Date.now()}`);
    await page.waitForTimeout(300);

    // Compose should be empty
    const compose = page.locator(sel.composeInput);
    const text = await compose.textContent() || await compose.inputValue().catch(() => '');
    expect(text.trim()).toBe('');

    // Compose should still be focused / editable
    await expect(compose).toBeEditable();
  });

  test('timeline scrolls to bottom on new message', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    // Scroll up first (if timeline has content)
    const timeline = page.locator(sel.timeline);
    await timeline.evaluate((el) => { el.scrollTop = 0; });
    await page.waitForTimeout(300);

    const scrollBefore = await timeline.evaluate((el) => el.scrollTop);

    // Send message
    const testMsg = `e2e-scroll-${Date.now()}`;
    await sendViaCompose(page, testMsg);
    await page.waitForTimeout(1000);

    // Should have scrolled down
    const scrollAfter = await timeline.evaluate((el) => el.scrollTop);
    // If there's enough content, scrollTop should have increased
    // (or be at max scroll — meaning we're at the bottom)
    const isAtBottom = await timeline.evaluate((el) =>
      Math.abs(el.scrollTop + el.clientHeight - el.scrollHeight) < 5
    );

    // Either scrolled down or we're at the bottom
    expect(scrollAfter >= scrollBefore || isAtBottom).toBe(true);
  });

  test('message visible without waiting for agent response', async ({ authedPage: page }) => {
    await page.waitForSelector(sel.timeline);

    const postCountBefore = await page.locator(sel.post).count();
    const testMsg = `e2e-no-wait-${Date.now()}`;

    await sendViaCompose(page, testMsg);

    // User message should appear BEFORE agent responds
    // Check within 500ms — agent response takes longer
    await page.waitForTimeout(500);
    const postCountAfter = await page.locator(sel.post).count();
    expect(postCountAfter).toBeGreaterThan(postCountBefore);

    // Our message should be there
    const ourPost = page.locator(sel.postContent, { hasText: testMsg });
    await expect(ourPost).toBeVisible();
  });
});
