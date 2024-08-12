import { test, expect } from '@playwright/test'

test('toBeChecked()テスト', async ({page}) => {
    await page.goto('http://localhost:3000')
    // チェックを入れるアクション
    await page.getByRole("checkbox", {name: /18歳以上です/}).check()
    // 確認
    await expect(page.getByRole("checkbox", {name: /18歳以上です/})).toBeChecked()
})