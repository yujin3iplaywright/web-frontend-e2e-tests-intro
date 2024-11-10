/*
このテストコードの動作確認は以下の環境で行いました。
 - CPU アーキテクチ: arm64（Apple M1）
 - OS バージョン: macOS Sequoia 15.1
 - Node.js バージョン: 22.9.0

書籍ではJimpというライブラリを使っていますが、うまくいかかなったのでsharpというライブラリを使用。
またテキストをスクリーンショットに合成するのにsharpだとCanvasを使ってできるのでそうしました。
そのため、以下を実行する必要があります。

```bash
npm install sharp
npm install canvas
```

またこちらのテストコードではスクリーンショットを保存するディレクトリを手動で作成する処理を追加してます

テストを実行する前に以下のようにファイルなどを配置してください。
playwright-handson/
├ app/
│ ├─ form/
│ │  └─ form.tsx こちらはchapter1で使用した List1_7_fix_form.tsx です
│ │  └─ page.tsx こちらはchapter1で使用した List1_8_page.tsx です
│ └─ api/
│    └ shuffle/
│      └ route.ts こちらはchapter1で使用した List1_9_route.ts です
├ tests/
│ └ timestampAndHash.spec.ts

テスト実行前に npm run dev でアプリを実行してください

*/

import { test, expect } from '@playwright/test'
import getRepoInfo from 'git-repo-info'
import sharp from 'sharp'
import dayjs from 'dayjs'
import { join } from 'path'
import { mkdirSync } from 'fs'
import { createCanvas } from 'canvas'

test('タイムスタンプとハッシュ書き込みスクリーンショット', async ({ page }, testInfo) => {
    // ページ遷移してスクリーンショットを取得
    await page.goto('http://localhost:3000/form')
    const buffer = await page.screenshot({ type: 'png' })

    // GitのSHAとタイムスタンプ情報を取得
    const git = getRepoInfo()
    const text = `${git.sha.slice(0, 10)} : ${dayjs().format('YYYY/MM/DD HH:mm:ss')}`

    // Canvasを使ってテキスト画像を生成
    const canvas = createCanvas(800, 50) // 800x50のキャンバスを作成（サイズは必要に応じて調整）
    const ctx = canvas.getContext('2d')
    ctx.font = '32px Arial'
    ctx.fillStyle = 'black'
    ctx.fillText(text, 10, 40) // テキストを描画

    const textBuffer = canvas.toBuffer()

    // 保存先ディレクトリを作成
    const outputPath = testInfo.outputDir
    mkdirSync(outputPath, { recursive: true }) // ディレクトリが存在しない場合は作成

    // Sharpでスクリーンショットとテキスト画像を合成
    const image = sharp(buffer)
        .composite([{ input: textBuffer, gravity: 'southeast' }]) // テキスト画像を右下に合成
        .png()

    // ファイルに保存
    await image.toFile(join(outputPath, 'screenshot01.png'))
})
