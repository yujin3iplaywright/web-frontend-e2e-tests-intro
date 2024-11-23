/*
このテストコードの動作確認は以下の環境で行いました。
 - CPU アーキテクチ: arm64（Apple M1）
 - OS バージョン: macOS Sequoia 15.1.1
 - Node.js バージョン: 22.9.0

テスト実行前にファイルを以下のように配置してください。
playwright-handson/
├ app
│ ├ api
│ │ └ fetch_data
│ │   └ route.ts
│ └ page.tsx こちらは中身を書き換えます
├ tests/
│ └ mock.spec.ts
*/

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

  // ページを開く。ここでは本とは違い localhost:3000 にしています。
  await page.goto('http://localhost:3000');

  // モックしたデータが表示されているか確認
  await expect(page.locator('text=Mocked response')).toBeVisible();
});
