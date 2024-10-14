import { test, expect } from '@playwright/test';

test('ビデオの撮影', async ({ page }) => {
  await page.goto('https://gihyo.jp/book');
  await page.locator('#searchFormKeyword').click();
  await page.locator('#searchFormKeyword').fill('［入門］Webフロントエンド E2E テスト');
  await page.locator('#searchFormSubmit').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '［入門］Webフロントエンド E2E テスト ――' }).click();
  const page1 = await page1Promise;
  await expect(page1.locator('#primary')).toContainText('――PlaywrightによるWebアプリの自動テストから良いテストの書き方まで');
});