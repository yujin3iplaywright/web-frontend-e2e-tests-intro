/*
テスト実行前にファイルを以下のように配置してください。
playwright-handson/
├ app
│ ├ page.tsx List8_1用の内容でこちらは中身を書き換えます。また globals.css は中身を空にしてください。
│ ├ page1
│ │ └ page.tsx
│ ├ page2
│ │ └ page.tsx
│ ├ page3
│ │ └ page.tsx
│ └ page4
│   └ page.tsx
├ tests/
│ └ List8_1_random.spec.ts
*/

import { test, expect } from '@playwright/test'

test('リンクをランダムにクリック', async ({ page }) => {
  await page.goto('http://localhost:3000');

  for (let index = 0; index < 10; index++) { // 本の中の記載では 100 になっていて30秒以上かかるので、10にしています。
    await expect(page).toHaveURL(/localhost:3000/);

    const $links = await page.locator('a[href^="/"]');
    const linksLength = await $links.count() - 1;

    // ランダムなリンクをクリック
    await $links.nth(Math.floor(Math.random() * linksLength)).click();

    // トップページに戻る
    await page.goto('http://localhost:3000');
  }
});
