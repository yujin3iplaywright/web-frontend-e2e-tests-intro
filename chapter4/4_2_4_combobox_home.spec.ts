import { test, expect } from '@playwright/test'

test('セレクトボックスの選択テスト（一つ選択）', async ({page}) => {
    await page.goto('http://localhost:3000')
    await expect(page).toHaveTitle(/最初のページ/)
    await page.getByRole('combobox', {name: /ペット/}).selectOption('ハムスター')
    await expect(page.getByRole('heading')).toHaveText(/Playwrightのハンズオン/)
})