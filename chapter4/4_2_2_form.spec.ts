import { test, expect } from '@playwright/test'

test('キーボード操作', async ({ page }) => {
  await page.goto('http://localhost:3000/form')
  await page.getByRole('textbox', { name: /username/i }).fill('Peter Parker')
  await page.getByPlaceholder(/password/).fill('I am Spiderman')
  await page.getByRole('textbox', { name: /organization/i }).clear()
})

test('キーボード操作 press', async ({ page }) => {
  await page.goto('http://localhost:3000/form2')
  await page.getByRole('textbox').press("Enter")
  await page.getByRole('textbox').press("Control+KeyA")
  await page.getByRole('textbox').pressSequentially('hello')
})