/*
テスト実行前にファイルを以下のように配置してください。
playwright-handson/
└ server.js
├ tests/
│ └ response.spec.ts

今回はnextを使っていないため、server.jsの起動は以下で行います。
`node server.js`

その後、`npx playwright test`でテストを実行します。
*/
import { test, expect } from '@playwright/test';

test('リクエストを変更確認', async ({ page }) => {
    // すべてのリクエストに対してインターセプトを行う
    await page.route('**/*', async (route) => {
        const response = await route.fetch();
        const contentType = response.headers()['content-type'];

        if (contentType && contentType.includes('text/html')) {
            let body = await response.text();
            console.log('Original body:', body); // ログ出力

            // タイトルにスペースを含めた変更を適用
            body = body.replace('<title>', '<title>My prefix: ');
            console.log('Modified body:', body); // ログ出力

            route.fulfill({
                status: response.status(),
                headers: response.headers(),
                body, // 上書きしたボディ
            });
        } else {
            route.continue();
        }
    });

    // ページを開く
    await page.goto('http://localhost:3000');

    // ページ全体のHTMLを取得して<title>タグの変更を確認
    const content = await page.content();
    expect(content).toContain('<title>My prefix: Original Title</title>');
});
