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

import { test as base } from '@playwright/test'
import { TodoPage } from './List8_8_todo-page'

const test = base.extend<{ todoPage: TodoPage }>({
    todoPage: async ({ page }, use) => {
        // beforeEachに該当する部分
        const todoPage = new TodoPage(page)
        await todoPage.goto()
        await todoPage.addTODOs(['todo1', 'todo2', 'todo3'])

        // テストの実行部分
        await use(todoPage)

        // beforeAfterに該当する部分
        await todoPage.removeAll()
    },
})

test('最後に追加したTODOを削除', async ({ todoPage, page }) => {
    await todoPage.deleteButtons.last().click()
})