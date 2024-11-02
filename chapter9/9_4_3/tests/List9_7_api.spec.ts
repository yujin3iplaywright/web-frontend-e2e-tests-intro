/*
テスト実行前にファイルを以下のように配置してください。
my-app/
├ src/
│ └ index.ts こちらはList9_6_index.tsの内容で中身を書き換えます。
├ tests
│ └ List9_7_api.spec.ts

`npm run dev`でアプリを起動後にUIモードでテストを実行します
*/

import { test, expect } from '@playwright/test';

test('JSONを送信するテスト', async ({ request }) => {
    const result = await request.post('http://localhost:3000/json', {
        data: {
            from: 'Playwright API test'
        }
    })
    expect(result.ok()).toBeTruthy()
})