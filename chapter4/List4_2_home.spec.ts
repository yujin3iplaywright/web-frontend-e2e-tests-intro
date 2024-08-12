import { test, expect } from '@playwright/test'

test('ページの表示テスト', async ({page}) => {
    await page.goto('/checkout')
    await page.waitForURL('**/checkout') // URLの遷移を待つ

    // タイトルを確認
    await expect(page).toHaveTitle(/商品詳細/)

    // URLを確認
    await expect(page).toHaveURL(/.*checkout/)
})