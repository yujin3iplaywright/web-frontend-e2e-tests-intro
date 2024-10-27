// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('リクエスト変更確認', async ({ page }) => {
  await page.route('**/*', (route) => {
    const headers = route.request().headers();
    delete headers['X-Secret'];  // X-Secret ヘッダーを削除
    route.continue({ headers });
  });

  await page.goto('http://localhost:3000/');
  
  // API リクエストの結果が正しく表示されているか確認
  await expect(page.locator('text=Message from API: Hello, World!')).toBeVisible();
});
