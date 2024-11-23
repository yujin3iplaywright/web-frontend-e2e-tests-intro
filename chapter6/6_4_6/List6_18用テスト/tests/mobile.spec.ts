import { test, expect } from '@playwright/test';

test('モバイルモードでボタンをタッチしてクリックできる', async ({ page }) => {
  // ページを開く
  await page.goto('http://localhost:3000');

  // 初期メッセージを確認
  await expect(page.locator('p')).toHaveText('クリックしてください');

  // ボタンをクリック（テキストで特定）
  await page.locator('button:has-text("ボタンをクリック")').click();

  // メッセージが変更されたことを確認
  await expect(page.locator('p')).toHaveText('クリックされました！');
});
