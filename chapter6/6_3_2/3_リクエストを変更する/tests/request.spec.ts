/*
このテストコードの動作確認は以下の環境で行いました。
 - CPU アーキテクチ: arm64（Apple M1）
 - OS バージョン: macOS Sequoia 15.1.1
 - Node.js バージョン: 22.9.0

テスト実行前にファイルを以下のように配置してください。
playwright-handson/
├ app
│ ├ hello
│ │ └ route.ts
│ └ page.tsx こちらは中身を書き換えます
├ tests/
│ └ request.spec.ts
*/

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
