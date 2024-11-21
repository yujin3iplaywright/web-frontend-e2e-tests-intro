/*
このテストコードの動作確認は以下の環境で行いました。
 - CPU アーキテクチ: arm64（Apple M1）
 - OS バージョン: macOS Sequoia 15.1
 - Node.js バージョン: 22.9.0
 
こちらのテストを実行する場合には、nextのアプリは不要です。

`npm init playwright@latest`

のあと、testsにこのファイルだけを置いて、以下を実行して確認できます。

`npx playwright test`
*/

import { test } from '@playwright/test'

test('ネットワークの監視' , async ({ page }) => {
    page.on('request', (request) =>
        console.log('>>', request.method(), request.url())
    )
    page.on('response', (response) =>
        console.log('<<', response.status(), response.url())
    )
    await page.goto('https://playwright.dev') // 本では、https://example.com になっているところを https://playwright.dev にしています
})
