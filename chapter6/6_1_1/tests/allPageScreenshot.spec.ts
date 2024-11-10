/* 
このテストコードの動作確認は以下の環境で行いました。
 - CPU アーキテクチ: arm64（Apple M1）
 - OS バージョン: macOS Sequoia 15.1
 - Node.js バージョン: 22.9.0
*/

import { test } from '@playwright/test'

test('ページ全体をスクリーンショット', async ({ page }) => {

await page.goto('https://playwright.dev/')

await page.screenshot({ path: 'screenshot_full.png', fullPage: true })

})