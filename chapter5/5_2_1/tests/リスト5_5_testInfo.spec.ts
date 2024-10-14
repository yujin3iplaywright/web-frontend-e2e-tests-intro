/* テストを実行する前に以下のように各ファイルを配置してください。
playwright-handson/
├ app/
│ └─ hover-test/
│    └─ page.tsx
├ public/
│ └ main.css
├ tests/
│ └ testInfo.spec.ts
*/

import { test, expect } from '@playwright/test'

import { writeFile } from 'node:fs/promises'

test('添付ファイルのテスト', async({page}, testInfo) => {

await page.goto('http://localhost:3000/hover-test')

// 画像添付

const screenshot = await page.screenshot()

await testInfo.attach('screenshot.png', { body: screenshot, contentType: 'image/png' })

// テキストを添付

await testInfo.attach('log.json', { body: JSON.stringify({message: 'hello'}), contentType: 'application/json'})

// ダウンロードしたファイルを添付

const res = await fetch('http://localhost:3000/src/assets/main.css')

const blob = await res.blob()

const buffer = Buffer.from(await blob.arrayBuffer())

await testInfo.attach('main.css', { body: buffer, contentType: blob.type })

// ローカルに出力したファイルを添付

const path = testInfo.outputPath('output.txt')

await writeFile(path, 'ログデータ¥n', 'utf-8')

await testInfo.attach('local-file.log', { path, contentType: 'text/plain' })

})
