/*
このテストコードの動作確認は以下の環境で行いました。
 - CPU アーキテクチ: arm64（Apple M1）
 - OS バージョン: macOS Sequoia 15.1
 - Node.js バージョン: 22.9.0

テスト実行前に以下を実行してください。こちらは .env の中に記載した秘密情報を読み取ってテストするために使用しています。

`npm install dotenv`

テスト実行前にファイルを以下のように配置してください。
playwright-handson/
├ .env このファイルは .gitignore ファイルに記載しておきます
├ app
│ └ page.tsx こちらは中身を書き換えます
├ pages
│ └ api
│   └ user
│     └ index.ts
├ tests/
│ └ dummy.spec.ts

なお、JWT を作るところで使用する秘密鍵は、mkjwk で生成した中の「公開鍵と秘密鍵を含むJWK Set」の「"keys": []」の中身部分をコピーして貼り付けます。
また、.env ファイルの「DUMMY_JWT=」には、JWT.io で生成した「Encoded」にある内容を「DUMMY_JWT=」に続けて貼り付けます（""とかで囲む必要はありません）。
*/

import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('ユーザー情報を表示するテスト', async ({ page }) => {
  const DUMMY_JWT = process.env.DUMMY_JWT;

  await page.route('**/api/user', route => {
    const headers = { ...route.request().headers(), Authorization: `Bearer ${DUMMY_JWT}` };
    route.continue({ headers });
  });

  await page.goto('http://localhost:3000');

  await expect(page.locator('text=ユーザー情報')).toBeVisible();
  await expect(page.locator('text=テストユーザー')).toBeVisible();
  await expect(page.locator('text=test@example.com')).toBeVisible();
});
