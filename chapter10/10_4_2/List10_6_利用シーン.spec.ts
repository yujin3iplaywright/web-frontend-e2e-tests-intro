import { test, expect } from '@playwright/test';
import { makeTestScenario } from './close-test-issue';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await makeTestScenario("タイトル表示", async () => {
    await expect(page).toHaveTitle(/Playwright/);
  })
});