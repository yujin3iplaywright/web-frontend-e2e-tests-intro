/*
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

test('特定のURLへのリクエスト待機のテスト', async({page}) => {

// 特定のURLへのリクエストを待機する場合

await page.goto('http://localhost:3000')

const requestPromise = page.waitForRequest('http://localhost:3000/api/fetch_data')
await page.getByText('trigger request').click()
const request = await requestPromise

})