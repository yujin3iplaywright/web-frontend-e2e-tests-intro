import { test, expect } from '@playwright/test'

test('フォーカステスト', async ({page}) => {
    await page.goto('http://localhost:3000')
    // await expect(page).toHaveTitle(/最初のページ/)
    await page.getByRole('textbox', {name: /パスワード/}).click()
    await page.getByRole('textbox', {name: /名前/}).focus()
    await page.getByRole('textbox', {name: /パスワード/}).focus()
    await expect(page.getByRole('heading')).toHaveText(/Playwrightのハンズオン/)
})