/*
テスト実行前にファイルを以下のように配置してください。
my-app/
├ src/
│ └ index.ts こちらは中身を書き換えます。
├ tests
│ └ List9_2_api.spec.ts

`npm run dev`でアプリを起動後にUIモードでテストを実行します
*/

import { test, expect } from '@playwright/test';

test('GET ハンドラーのテスト', async ({ request }) => {
    const result = await request.get('http://localhost:3000/')
    expect(result.ok()).toBeTruthy()
    expect(await result.text()).toEqual('Hello Hono!')
})