/*
テスト実行前にファイルを以下のように配置してください。
my-app/
├ src/
│ └ index.ts こちらはList9_10_index.tsの内容で中身を書き換えます。
├ tests
│ └ List9_11_api.spec.ts
│ └ test.txt

`npm install fs`を実行しておく。

`npm run dev`でアプリを起動後にUIモードでテストを実行します
*/

import { test, expect } from '@playwright/test';
// createReadStreamはfsパッケージからインポート
import { createReadStream } from 'node:fs'

test('ファイルを踏むフォームを送信', async ({ request }) => {
    // ファイルを含むフォームを送信
    const result = await request.post('http://localhost:3000/file', {
        multipart: {
            file1: {
                name: 'dummy.txt',
                mimeType: 'text/plain',
                buffer: Buffer.from('test text')
            },
            file2: createReadStream('./tests/test.txt'),
            notFile: 'ファイル以外も同時に送れます'
        }
    })
    expect(result.ok()).toBeTruthy()
})
