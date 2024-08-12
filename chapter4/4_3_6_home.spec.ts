import { test, expect } from '@playwright/test'

test('toBeFocused()テスト', async ({page}) => {
    await page.goto('http://localhost:3000')
    // フォーカスを当てるアクション
    await page.getByRole("button").focus()
    // 確認
    await expect(page.getByRole("button")).toBeFocused()
})