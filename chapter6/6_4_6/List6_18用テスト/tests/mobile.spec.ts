/*
このテストコードの動作確認は以下の環境で行いました。
 - CPU アーキテクチ: arm64（Apple M1）
 - OS バージョン: macOS Sequoia 15.1.1
 - Node.js バージョン: 22.9.0

テスト実行前にファイルを以下のように配置してください。
playwright-handson/
├ app
│ ├ globals.css こちらは中身を書き換えます
│ └ page.tsx こちらは中身を書き換えます
├ tests/
│ └ mobile.spec.ts
*/

import { test, expect } from '@playwright/test';

test('モバイルモードでボタンをタッチしてクリックできる', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'ボタンをクリック' }).click();
  await expect(page.getByRole('paragraph')).toContainText('クリックされました！');
});
