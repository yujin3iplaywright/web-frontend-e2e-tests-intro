import { test, expect } from '@playwright/test'

test('フィルター', async ({ page }) => {
    // await page.goto('/')
    await page.goto('http://localhost:3000') // 第１章で使ったNext.jsのアプリを使用したので変更しています
    await page.getByRole('listitem').filter({hasText: /青/})
    await expect(page.getByRole('listitem').filter({hasText: /青/})).toHaveText('青巻紙') 
})