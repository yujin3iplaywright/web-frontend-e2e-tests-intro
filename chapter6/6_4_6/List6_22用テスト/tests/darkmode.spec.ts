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
│ └ darkmode.spec.ts
*/

import { test, expect } from '@playwright/test';

test('ダークモードで表示が正しいことを確認する', async ({ page }) => {
  // ページを開く
  await page.goto('http://localhost:3000');

  // 背景色が黒であることを確認（rgba または rgb のどちらにも対応）
  const backgroundColor = await page.evaluate(() =>
    getComputedStyle(document.body).backgroundColor
  );
  expect(backgroundColor).toMatch(/rgb\(0,\s*0,\s*0\)/); // rgb または rgba を許容

  // テキスト色が白であることを確認
  const textColor = await page.evaluate(() =>
    getComputedStyle(document.querySelector('h1')!).color
  );
  expect(textColor).toBe('rgb(255, 255, 255)');
});
