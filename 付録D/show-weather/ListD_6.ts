const trs = await page.locator('.yjw_table tr')
const dates = (await trs.first().allInnerTexts())[0].split(/\s+/)
const weathers = (await trs.nth(1).allInnerTexts())[0].split(/\s+/)
const temps = (await trs.nth(2).allInnerTexts())[0].split(/\s+/)
const rains = (await trs.nth(3).allInnerTexts())[0].split(/\s+/)

for (let i = 0; i < 6; i++) {
    console.log(`${dates[1+i*2]}${dates[2+i*2]}: ${weathers[1+i]} (${temps[2+i*2]}℃
- ${temps[1+i*2]}℃) - ${rains[2+i]}%`)
}