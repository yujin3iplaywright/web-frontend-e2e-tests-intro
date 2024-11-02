/*
テスト実行前にファイルを以下のように配置してください。
my-app/
├ src/
│ └ index.ts こちらはList9_8_index.tsの内容で中身を書き換えます。
├ tests
│ └ List9_9_api.spec.ts

`npm run dev`でアプリを起動後にUIモードでテストを実行します
*/

import { test, expect } from '@playwright/test';

test('フォームを送信', async ({ request }) => {
    const result = await request.post('http://localhost:3000/form', {
        form: {
            username: 'bob',
            password: 'secret'
        }
    })
    expect(result.ok()).toBeTruthy()
})
