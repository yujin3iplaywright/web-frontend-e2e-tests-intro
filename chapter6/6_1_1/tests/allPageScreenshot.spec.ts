import { test } from '@playwright/test'

test('ページ全体をスクリーンショット', async ({ page }) => {

await page.goto('https://playwright.dev/')

await page.screenshot({ path: 'screenshot_full.png', fullPage: true })

})