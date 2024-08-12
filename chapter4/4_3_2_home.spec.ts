import { test, expect } from '@playwright/test'

test('notのテスト', async ({page}) => {
    await page.goto('http://localhost:3000')
    await expect(page).toHaveTitle(/最初のページ/)
    await expect(page.getByRole('heading')).not.toContainText(/Success/)
})