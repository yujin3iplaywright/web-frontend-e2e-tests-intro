await page.goto('https://weather.yahoo.co.jp/weather/')
await page.waitForTimeout(1000)

await page.locator('#areaList').getByRole('link', { name: prefecture }).click()
await page.waitForTimeout(1000)

const summaries = await page
    .locator('#condition')
    .locator('p')
    .first()
    .allInnerTexts()
console.log(summaries.join('\n\n'))