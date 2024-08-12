import { test, expect } from '@playwright/test'

test('セレクトボックスの選択テスト（複数選択）', async ({page}) => {
    await page.goto('http://localhost:3000')
    await expect(page).toHaveTitle(/最初のページ/)
    await page.getByRole('listbox', {name: /飲み物/}).selectOption(['コーヒー', 'ルートビア'])
    await expect(page.getByRole('heading')).toHaveText(/Playwrightのハンズオン/)
})