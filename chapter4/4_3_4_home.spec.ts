import { test, expect } from '@playwright/test'

test('toBeDisabled()とtoBeEnabled()テスト', async ({page}) => {
    await page.goto('http://localhost:3000')
    await expect(page).toHaveTitle(/最初のページ/)
    await expect(page.getByRole('heading')).toHaveText(/Playwrightのハンズオン/)
    await expect(page.getByRole('button', {name: /送信/})).toBeDisabled()
    await expect(page.getByRole('button', {name: /リセット/})).toBeEnabled()
})