// tests/imageTest.spec.ts
import { test, expect } from '@playwright/test';

test('リクエスト中断確認', async ({ page }) => {
  // 画像のリクエストを中断
  await page.route('**/*.{png,jpg,jpeg}', (route) => route.abort());

  // ページを開く
  await page.goto('http://localhost:3000');

  // 画像が正しくロードされていないことを確認
  const image = page.locator('img');
  
  // 画像のnaturalWidthを確認し、ロードされていないことをチェック
  const naturalWidth = await image.evaluate((img: HTMLImageElement) => img.naturalWidth);
  expect(naturalWidth).toBe(0);
});
