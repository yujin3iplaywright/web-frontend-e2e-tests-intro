import { test, expect } from '@playwright/test'

test('テキストボックスとボタンの総数', async ({ page }) => {
    // await page.goto('/')
    await page.goto('http://localhost:3000')// 第１章で使ったNext.jsのアプリを使用したので変更しています
    await expect(page.getByRole('textbox').or(page.getByRole('button'))).toHaveCount(4)
})