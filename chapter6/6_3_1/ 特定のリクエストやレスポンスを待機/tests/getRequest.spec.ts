/*
このテストコードの動作確認は以下の環境で行いました。
 - CPU アーキテクチ: arm64（Apple M1）
 - OS バージョン: macOS Sequoia 15.1
 - Node.js バージョン: 22.9.0

テスト実行前にファイルを以下のように配置してください。
playwright-handson/
├ app/
│ ├ api/
│ │ └ fetch_data
│ │   └ route.ts
│ └ page.tsx こちらは既存にあるものの中身を書き換えます。またglobals.cssの中身は空にしてください
├ tests/
│ └ request.spec.ts
│ └ response.spec.ts
│ └ getRequest.spec.ts
│ └ getResponse.spec.ts
*/
import { test } from '@playwright/test'

test('特定のURLへのGETリクエスト待機のテスト', async({page}) => {

// 特定のURLへのGETリクエストを待機する場合

const requestPromise = page.waitForRequest(
    (request) =>
        request.url() === 'http://localhost:3000/api/fetch_data' && request.method() === 'GET'
)
await page.goto('http://localhost:3000')
await page.getByText('trigger request').click()
const request = await requestPromise

})