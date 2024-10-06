import { test } from '@playwright/test'

test('リトライのタイムアウトのテスト', async({page}, testInfo) => {

await page.goto('http://localhost:3000/start')

await page.getByText('開始').click({ timeout: 10000 }) // 10秒待つ

})