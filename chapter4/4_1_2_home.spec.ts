import { test, expect } from '@playwright/test'

test('ページの表示テスト', async ({page}) => {
    await page.goto('/login')
    await page.waitForURL('**/login') // URLの遷移を待つ
    await expect(page).toHaveTitle(/ログイン/)
    await expect(page.getByRole('heading')).toHaveText(/ログイン/)
    await expect(page.getByRole('button', {name: /ログイン/})).toBeVisible()
})