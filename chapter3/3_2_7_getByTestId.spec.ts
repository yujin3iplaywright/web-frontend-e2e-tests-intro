import { test, expect } from '@playwright/test'

test('data-testid属性で要素取得', async ({ page }) => {
    // await page.goto('/')
    await page.goto('http://localhost:3000') // 第１章で使ったNext.jsのアプリを使用したので変更しています
    await expect(page.getByTestId('admin-menu')).toBeVisible()
    await expect(page.getByTestId('cache-clear')).toBeVisible()
})