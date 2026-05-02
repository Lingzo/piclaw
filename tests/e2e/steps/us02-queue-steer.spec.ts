import { test, expect } from '../support/world';
import { sel } from '../support/selectors';

// US-02: Queue and Steer

test.describe('US-02: Queue and Steer', () => {
  test('sending while agent is busy adds to queue', async ({ authedPage: page }) => {
    // Send a long-running task to keep agent busy
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('Write a 500-word essay about testing');
    await page.keyboard.press('Enter');

    // Wait for agent to start processing
    await page.waitForSelector(sel.stopButton, { timeout: 5000 });

    // Send follow-up while agent is busy
    await compose.click();
    await compose.fill('Also include examples');
    await page.keyboard.press('Enter');

    // Should appear in queue
    await page.waitForSelector(sel.queueItem, { timeout: 3000 });
    const queueItems = await page.locator(sel.queueItem).count();
    expect(queueItems).toBeGreaterThanOrEqual(1);
  });

  test('queue items show edit/remove controls', async ({ authedPage: page }) => {
    // Trigger agent work
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('Explain quantum computing in detail');
    await page.keyboard.press('Enter');
    await page.waitForSelector(sel.stopButton, { timeout: 5000 });

    // Queue a follow-up
    await compose.click();
    await compose.fill('Add more detail');
    await page.keyboard.press('Enter');
    await page.waitForSelector(sel.queueItem, { timeout: 3000 });

    // Check controls exist
    const queueItem = page.locator(sel.queueItem).first();
    const editBtn = queueItem.locator('[data-action="edit"], .queue-edit, button:has-text("edit")');
    const removeBtn = queueItem.locator('[data-action="remove"], .queue-remove, button:has-text("remove"), button:has-text("cancel")');

    // At least one control should be present
    const hasEdit = await editBtn.count();
    const hasRemove = await removeBtn.count();
    expect(hasEdit + hasRemove).toBeGreaterThan(0);
  });

  test('pulling back queue item returns text to compose', async ({ authedPage: page }) => {
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('Long running analysis task');
    await page.keyboard.press('Enter');
    await page.waitForSelector(sel.stopButton, { timeout: 5000 });

    // Queue a message
    const queuedText = 'This is my queued follow-up message';
    await compose.click();
    await compose.fill(queuedText);
    await page.keyboard.press('Enter');
    await page.waitForSelector(sel.queueItem, { timeout: 3000 });

    // Pull back
    const queueItem = page.locator(sel.queueItem).first();
    const editBtn = queueItem.locator('[data-action="edit"], .queue-edit, button');
    await editBtn.first().click();

    // Text should be back in compose
    await page.waitForTimeout(300);
    const composeText = await compose.textContent() || await compose.inputValue().catch(() => '');
    expect(composeText).toContain(queuedText);

    // Queue item should be removed
    const remaining = await page.locator(sel.queueItem).count();
    expect(remaining).toBe(0);
  });

  test('queue state survives SSE reconnect', async ({ authedPage: page }) => {
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('Start a long task');
    await page.keyboard.press('Enter');
    await page.waitForSelector(sel.stopButton, { timeout: 5000 });

    // Queue a follow-up
    await compose.click();
    await compose.fill('Queued item survives reconnect');
    await page.keyboard.press('Enter');
    await page.waitForSelector(sel.queueItem, { timeout: 3000 });

    // Simulate SSE drop by going offline briefly
    await page.context().setOffline(true);
    await page.waitForTimeout(2000);
    await page.context().setOffline(false);
    await page.waitForTimeout(3000);

    // Queue should still show the item
    const queueItems = await page.locator(sel.queueItem).count();
    expect(queueItems).toBeGreaterThanOrEqual(1);
  });

  test('compose box is empty after successful queue', async ({ authedPage: page }) => {
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('Trigger work');
    await page.keyboard.press('Enter');
    await page.waitForSelector(sel.stopButton, { timeout: 5000 });

    // Queue
    await compose.click();
    await compose.fill('Follow-up queued');
    await page.keyboard.press('Enter');

    // Compose should be empty
    await page.waitForTimeout(200);
    const text = await compose.textContent() || await compose.inputValue().catch(() => '');
    expect(text.trim()).toBe('');
  });

  test('no race between queue state and agent completion', async ({ authedPage: page }) => {
    const compose = page.locator(sel.composeInput);
    await compose.click();
    await compose.fill('Quick task');
    await page.keyboard.press('Enter');

    // Wait for completion
    await page.waitForSelector(sel.stopButton, { timeout: 5000 }).catch(() => {});
    // Wait for agent to finish
    await page.waitForFunction(() => {
      const stop = document.querySelector('[data-testid="stop-button"], .compose-stop');
      return !stop || (stop as HTMLElement).offsetParent === null;
    }, { timeout: 30000 });

    // After completion, queue should be empty and compose functional
    const queueItems = await page.locator(sel.queueItem).count();
    expect(queueItems).toBe(0);

    // Compose should accept input
    await compose.click();
    await compose.fill('Next message');
    const text = await compose.textContent() || await compose.inputValue().catch(() => '');
    expect(text).toContain('Next message');
  });
});
