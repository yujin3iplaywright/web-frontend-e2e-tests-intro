/*
このテストコードの動作確認は以下の環境で行いました。
 - CPU アーキテクチ: arm64（Apple M1）
 - OS バージョン: macOS Sequoia 15.1.1
 - Node.js バージョン: 22.9.0

テスト実行前にファイルを以下のように配置してください。
playwright-handson/
├ app
│ └ page.tsx こちらは中身を書き換えます
├ tests/
│ └ abort.spec.ts
*/

import { test, expect } from '@playwright/test';

test('リクエスト中断確認', async ({ page }) => {
  // 画像のリクエストを中断
  await page.route('**/_next/image*', (route) => route.abort());

  // ページを開く
  await page.goto('http://localhost:3000');

  // 画像が正しくロードされていないことを確認
  const image = page.locator('img');
  
  // 画像のnaturalWidthを確認し、ロードされていないことをチェック
  const naturalWidth = await image.evaluate((img: HTMLImageElement) => img.naturalWidth);
  expect(naturalWidth).toBe(0);
});
