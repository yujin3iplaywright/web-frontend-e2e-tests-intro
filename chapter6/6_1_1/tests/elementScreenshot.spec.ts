import { test } from '@playwright/test'

test('要素を指定してスクリーンショット', async ({ page }) => {

await page.goto('https://playwright.dev/')

await await page.getByRole('heading', { name: 'Playwright enables reliable' }).screenshot({ path: 'screenshot-element.png'})

})