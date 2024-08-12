import { test, expect } from '@playwright/test'

test('toHaveCount()テスト', async ({page}) => {
    await page.goto('http://localhost:3000')
    await expect(page.getByRole("listitem")).toHaveCount(7)
})