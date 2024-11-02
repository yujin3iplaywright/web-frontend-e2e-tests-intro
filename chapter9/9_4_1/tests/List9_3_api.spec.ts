/*
テスト実行前にファイルを以下のように配置してください。
my-app/
├ src/
│ └ index.ts こちらは中身を書き換えます。
├ tests
│ └ List9_3_api.spec.ts

`npm run dev`でアプリを起動後にUIモードでテストを実行します
*/

import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

// get()メソッドを利用
test('APIテスト (get)', async ({ request }) => {
  const result = await request.get('/hello');
  expect(result.ok()).toBeTruthy();
  expect(await result.text()).toEqual('Hello Hono!');
});

// fetch()メソッドを利用
test('APIテスト (fetch)', async ({ request }) => {
  const result = await request.fetch(`${BASE_URL}/hello`, {
    method: 'GET',
  });
  expect(result.ok()).toBeTruthy();
  expect(await result.text()).toEqual('Hello Hono!');
});
