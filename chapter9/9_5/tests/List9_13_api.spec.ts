/*
テスト実行前にファイルを以下のように配置してください。
my-app/
├ src/
│ └ index.ts こちらは9.5用のindex.tsの内容で中身を書き換えます。
├ tests
│ └ List9_13_api.spec.ts

`npm run dev`でアプリを起動後にUIモードでテストを実行します
*/

import { test, expect, request as APIRequest } from '@playwright/test';

test('新しいコンテキストでのページ確認テスト', async () => {
    // 新しいリクエストコンテキストを作成
    const requestContext = await APIRequest.newContext();

    try {
        // 新しいコンテキストでGETリクエストを送信し、レスポンスを取得
        const response = await requestContext.get('http://localhost:3000/sample-page');

        // レスポンスステータスが200であることを確認
        expect(response.status()).toBe(200);

        // レスポンスのボディに特定のテキストが含まれていることを確認
        const responseBody = await response.text();
        expect(responseBody).toContain('ページのサンプルテキスト');
    } finally {
        // 作成したコンテキストのキャッシュを削除
        await requestContext.dispose();
    }
});
