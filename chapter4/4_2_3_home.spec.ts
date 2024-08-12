import { test, expect } from '@playwright/test'

test('ページの表示テスト', async ({page}) => {
    await page.goto('http://localhost:3000')
    await expect(page).toHaveTitle(/最初のページ/)
    await page.getByRole('checkbox', {name: /読みました/}).check()
    await page.getByRole('checkbox', {name: /読みました/}).uncheck()
    await expect(page.getByRole('heading')).toHaveText(/Playwrightのハンズオン/)
})