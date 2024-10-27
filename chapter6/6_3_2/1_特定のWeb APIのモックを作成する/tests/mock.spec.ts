// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('特定のWeb APIのモックを作成確認', async ({ page }) => {
  const testData = JSON.stringify({ message: 'Mocked response' });

  // モックするルートを定義
  await page.route('**/api/fetch_data', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: testData,
    });
  });

  // ページを開く
  await page.goto('http://localhost:3000');

  // モックしたデータが表示されているか確認
  await expect(page.locator('text=Mocked response')).toBeVisible();
});
