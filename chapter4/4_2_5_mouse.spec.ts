import { test } from '@playwright/test'

test('マウス操作', async ({page}) => {

await page.goto('http://localhost:3000/mouse-test')

await page.mouse.move(100, 100)

await page.mouse.down()

await page.mouse.move(300, 100)

await page.mouse.up()

})