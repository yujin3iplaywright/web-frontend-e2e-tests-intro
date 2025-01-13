const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://weather.yahoo.co.jp/weather/');
  await page.getByRole('link', { name: '東京', exact: true }).click();
  await page.getByRole('link', { name: '東京 晴れ 14/2 0%' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();