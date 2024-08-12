import { test, expect } from '@playwright/test'

test('toBeHidden()テスト', async ({page}) => {
    await page.goto('http://localhost:3000')
    await expect(page).toHaveTitle(/最初のページ/)
    await expect(page.getByRole('listitem')).toBeHidden()
})