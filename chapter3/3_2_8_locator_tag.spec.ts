import { test, expect } from '@playwright/test'

test('その他のロケーター', async ({ page }) => {
    // await page.goto('/')
    await page.goto('http://localhost:3000')// 第１章で使ったNext.jsのアプリを使用したので変更しています
    await page.locator('button').click() // タグで指定
})