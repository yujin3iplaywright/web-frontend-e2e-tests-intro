// tests/todo.spec.ts
import { test, expect } from '@playwright/test';

test('TODOアプリのテスト', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('TODOを入力').click();
  await page.getByPlaceholder('TODOを入力').fill('todo1');
  await page.getByRole('button', { name: '追加' }).click();
  await expect(page.getByText('todo1')).toBeVisible();
  await page.getByRole('button', { name: 'x' }).click();
  await expect(page.getByText('todo1')).not.toBeVisible();
});
