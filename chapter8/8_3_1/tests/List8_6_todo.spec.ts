import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }, testInfo) => {
await page.goto('http://localhost:3000/')
})

test('TODOの追加と削除', async ({ page }) => {
    await page.getByPlaceholder('TODOを入力').click()
    await page.getByPlaceholder('TODOを入力').fill('todo1')
    await page.getByRole('button', { name: '追加' }).click()
    await page.getByRole('button', { name: 'x' }).click()
})