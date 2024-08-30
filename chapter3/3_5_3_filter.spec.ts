import { test, expect } from '@playwright/test'

test('複数の要素の絞り込み', async ({ page }) => {
    // await page.goto('/')
    await page.goto('http://localhost:3000')// 第１章で使ったNext.jsのアプリを使用したので変更しています
    await expect(page.getByRole('paragraph').first()).toHaveText(/最初/)
    await expect(page.getByRole('paragraph').nth(2)).toHaveText(/3つ/)
    await expect(page.getByRole('paragraph').last()).toHaveText(/最後/)
})