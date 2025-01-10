/*
テスト実行前に以下のように配置してください。
playwright-handson/
├ app/
│ └ page.tsx こちらは中身を書き換えます。また globals.css は中身を空にしてください。
├ tests/
│ └ List8_5_todo.spec.ts
│ └ List8_6_todo.spec.ts
│ └ List8_7_todo.spec.ts
│ └ List8_8_todo-page.ts
│ └ List8_9_todo.spec.ts

上記の状態で `npm run dev` でアプリを起動して

このテストコードの動作確認は以下の環境で行いました。
 - CPU アーキテクチ: arm64（Apple M1）
 - OS バージョン: macOS Sequoia 15.2
 - Node.js バージョン: 23.6.0
*/

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