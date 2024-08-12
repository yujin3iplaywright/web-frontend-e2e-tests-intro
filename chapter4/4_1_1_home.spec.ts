import { test, expect } from '@playwright/test'

test('ページの表示テスト', async ({page}) => {
    await page.goto('/login') // http://localhost:3000 の記載をしていなくても遷移できる
    await expect(page).toHaveTitle(/ログイン/)
    await expect(page.getByRole('heading')).toHaveText(/ログイン/)
    await expect(page.getByRole('button', {name: /ログイン/})).toBeVisible()
})