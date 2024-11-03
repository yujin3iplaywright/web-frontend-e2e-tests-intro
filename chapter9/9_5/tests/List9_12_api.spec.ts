import { test, expect } from '@playwright/test';

test('認証済みリクエストを行うE2Eテスト', async ({ page }) => {
    // ログインリクエストを送信し、クッキーを取得
    const loginResponse = await page.request.post('http://localhost:3000/login', {
        form: {
            username: 'bob',
            password: 'secret'
        }
    });

    // ログインが成功し、クッキーが設定されていることを確認
    expect(loginResponse.status()).toBe(200);
    
    // headers()メソッドを使ってヘッダー全体を取得
    const headers = loginResponse.headers();
    const cookies = headers['set-cookie'];
    expect(cookies).toContain('session_token=authenticated');

    // クッキーをページコンテキストに追加
    await page.context().addCookies([
        {
            name: 'session_token',
            value: 'authenticated',
            domain: 'localhost',
            path: '/',
        },
    ]);

    // 認証済み状態でページにアクセス
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/最初のページ/);
    await expect(page.getByRole('heading')).toHaveText(/Playwrightのハンズオン/);
});
