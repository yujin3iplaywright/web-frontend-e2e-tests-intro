import { test, expect } from '@playwright/test'

test('toHaveValue()とtoHaveValues()テスト', async ({page}) => {
    await page.goto('http://localhost:3000')
    // フォームに入力するアクション
    await page.getByRole("textbox", {name: /E-Mail/}).fill("sample@example.com")
    // 確認
    await expect(page.getByRole("textbox", {name: /E-Mail/})).toHaveValue("sample@example.com")

    // 項目を複数選択するアクション
    await page.getByRole("listbox", {name: /飲み物/}).selectOption(["紅茶", "抹茶"])
    // 確認
    await expect(page.getByRole("listbox", {name: /飲み物/})).toHaveValues(["紅茶", "抹茶"])
})