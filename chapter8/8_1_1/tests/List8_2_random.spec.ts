/*
テスト実行前にファイルを以下のように配置してください。
playwright-handson/
├ app
│ └ page.tsx List8_2用の内容でこちらは中身を書き換えます。また globals.css は中身を空にしてください。
├ tests/
│ └ random.spec.ts
*/

import { test } from '@playwright/test'

test('ボタンをランダムにクリック', async ({ page }) => {
    await page.goto('http://localhost:3000')
    for (let index = 0; index < 100; index++) {
        const $buttons = await page.getByRole('button')
        const buttonsLength = await $buttons.count() - 1
        await $buttons.nth(Math.floor(Math.random() * buttonsLength)).click()
        await page.keyboard.press('Escape', { delay: 100 })
    }
})