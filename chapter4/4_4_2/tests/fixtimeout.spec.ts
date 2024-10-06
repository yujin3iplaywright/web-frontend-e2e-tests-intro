import { test } from '@playwright/test';

test('固定時間を待つコードはやめようのテスト', async ({ page }) => {
  // リクエストとレスポンスのログを出力
  page.on('request', request => {
    console.log('Request: ' + request.url());
  });

  page.on('response', response => {
    console.log('Response: ' + response.url() + ' Status: ' + response.status());
  });

  // ページ全体の読み込みが完了するまで待機
  await page.goto('http://localhost:3000');

  // 要素が表示されるのを待機
  await page.waitForSelector('text=trigger response', { timeout: 60000 });

  // ボタンクリック
  await page.click('text=trigger response');

  // APIレスポンスを待機
  const responsePromise = page.waitForResponse('http://localhost:3000/api/resource', { timeout: 60000 });
  const response = await responsePromise;

  console.log('API response: ', await response.text());

  // ページ遷移を確認
  await page.waitForURL('http://localhost:3000/login', { timeout: 60000 });
});
