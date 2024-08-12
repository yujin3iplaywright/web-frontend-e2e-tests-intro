import { test, expect } from '@playwright/test'
import path from 'path'

test('ファイルアップロードテスト', async ({page}) => {
    await page.goto('http://localhost:3000')
    await expect(page).toHaveTitle(/最初のページ/)
    // 1ファイルを選択
    await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'))

    // メモリ上でファイルを作成
    await page.getByLabel('Upload file').setInputFiles({
        name: 'file.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('this is test')
    })
    await expect(page.getByRole('heading')).toHaveText(/Playwrightのハンズオン/)
})