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

test('特定のURLからのレスポンス待機のテスト', async({page}) => {

// 特定のURLからのレスポンスを待機する場合

await page.goto('http://localhost:3000')

const responsePromise = page.waitForResponse('**/api/fetch_data')
await page.getByText('trigger request').click()
const response = await responsePromise

})