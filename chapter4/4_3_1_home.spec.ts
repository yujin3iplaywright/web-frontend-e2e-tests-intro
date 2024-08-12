import { test, expect } from '@playwright/test'

test('Successの表示テスト', async ({page}) => {
    await page.goto('http://localhost:3000')
    await expect(page).toHaveTitle(/最初のページ/)
    await expect(page.getByRole('heading')).toContainText(/Success/)
    await expect(page.getByRole('heading')).toHaveText(/Success/)
    await expect(page.getByRole('heading', {name: /Success/})).toBeVisible()
    await expect(page.getByRole('heading')).toBeAttached()
    await expect(page.getByRole('listitem')).toHaveText(['とちおとめ', 'あまおう', '紅ほっぺ'])
})