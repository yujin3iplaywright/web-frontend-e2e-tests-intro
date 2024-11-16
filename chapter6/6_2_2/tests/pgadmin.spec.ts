/*
このテストコードの動作確認は以下の環境で行いました。
 - CPU アーキテクチ: arm64（Apple M1）
 - OS バージョン: macOS Sequoia 15.1
 - Node.js バージョン: 22.9.0
 
こちらでは docker を使います。（私は、Rancher Desktopを使っています。）

テスト実行前に以下を実行してください。こちらは playwright.config.ts の中で、認証情報を保存する場所を作るのに path ライブラリを使っています。

`npm install path`

テスト実行前にファイルを以下のように配置してください。
playwright-handson/
├ docker-compose.yaml
├ tests/
│ └ auth.setup.ts
│ └ pgadmin.spec.ts

また、playwright.config.ts ファイルの中身を書き換える必要があります

*/

import { test, expect } from '@playwright/test'

test('open About dialog', async ({ page }) => {
    await page.goto('http://localhost:8888/browser/')

    await page.getByRole('button', {name: /Help/}).click()
    await page.getByText(/About pgAdmin 4/).click()

    await expect(page.getByText(/Application Mode/)).toBeVisible()
})