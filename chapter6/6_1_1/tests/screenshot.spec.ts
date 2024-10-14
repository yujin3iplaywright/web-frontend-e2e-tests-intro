import { test } from '@playwright/test'

test('スクリーンショット', async ({ page }) => {

await page.goto('https://playwright.dev/')

await page.screenshot({ path: 'screenshot.png' })

})