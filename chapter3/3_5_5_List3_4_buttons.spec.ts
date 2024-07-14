import { test, expect } from '@playwright/test'

test('複数の「完了」ボタンがあるHTML', async ({ page }) => {
    // await page.goto('/')
    await page.goto('http://localhost:3000')// 第１章で使ったNext.jsのアプリを使用したので変更しています
    await expect(page.getByRole('listitem').filter({ has: page.getByText('牛乳を買う') }).getByRole('button')).toBeEnabled()
    await page.getByRole('listitem').filter({ has: page.getByText('牛乳を買う') }).getByRole('button').click()
})