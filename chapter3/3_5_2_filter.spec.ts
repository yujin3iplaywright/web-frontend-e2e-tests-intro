import { test, expect } from '@playwright/test'

test('一度絞り込んだ要素の中からさらに検索', async ({ page }) => {
    // await page.goto('/')
    await page.goto('http://localhost:3000')// 第１章で使ったNext.jsのアプリを使用したので変更しています
    await page.getByRole('listitem').filter({hasText: /中華/}).getByRole('listitem').filter({hasText: /麺/})
    await expect(page.getByRole('listitem').filter({hasText: /中華/}).getByRole('listitem').filter({hasText: /麺/})).toBeVisible() 
})