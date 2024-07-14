import { test, expect } from '@playwright/test'

test('ラベル名で要素取得', async ({ page }) => {
    // await page.goto('/')
    await page.goto('http://localhost:3000') // 第１章で使ったNext.jsのアプリを使用したので変更しています
    await expect(page.getByLabel(/検索/)).toBeVisible()
})