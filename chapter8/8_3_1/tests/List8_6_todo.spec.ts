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
*/

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