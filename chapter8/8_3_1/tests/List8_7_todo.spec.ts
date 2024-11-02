import { test, expect } from '@playwright/test'

// TODOを追加する関数
const addTODOs = async ({ page }, texts: string[]) => {
    for (const text of texts) {
        await page.getByPlaceholder('TODOを入力').click()
        await page.getByPlaceholder('TODOを入力').fill(text)
        await page.getByRole('button', { name: '追加' }).click()
    }
}

// 残っているTODOをすべて削除する関数
const removeAll = async ({ page }) => {
    while ((await page.getByRole('button', { name: 'º' }).count()) > 0) {
        await page.getByRole('button', { name: 'x' }).first().click()
    }
}

test.beforeEach(async ({ page }, testInfo) => {
    await page.goto('http://localhost:3000/')
    await addTODOs({ page }, ['todo1', 'todo2', 'todo3'])
})

test.afterEach(async ({ page }) => {
    await removeAll({ page })
})

test('最後に追加したTODOを削除', async ({ page }) => {
    await page.getByRole('button', { name: 'x' }).last().click()
})