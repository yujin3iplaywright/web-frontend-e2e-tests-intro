import { test, expect } from '@playwright/test'

test('ロール名で要素取得', async ({ page }) => {
    // await page.goto('/')
    await page.goto('http://localhost:3000') // 第１章で使ったNext.jsのアプリを使用したので変更しています
    await expect(page.getByRole('link', {name: /最新情報/})).toBeVisible()
    await expect(page.getByRole('button', {name: /更新/})).toBeVisible()
})