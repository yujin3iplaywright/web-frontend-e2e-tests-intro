import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

const SESSION_COOKIE_NAME = 'session_token';

// クッキーを解析するユーティリティ関数
function parseCookies(cookieHeader: string | undefined): Record<string, string> {
    const cookies: Record<string, string> = {};
    if (!cookieHeader) return cookies;
    
    cookieHeader.split(';').forEach((cookie) => {
        const [name, ...value] = cookie.split('=');
        cookies[name.trim()] = decodeURIComponent(value.join('='));
    });
    return cookies;
}

// 認証エンドポイント
app.post('/login', async (c) => {
    const { username, password } = await c.req.parseBody();
    
    if (username === 'bob' && password === 'secret') {
        // Set-Cookieヘッダーを手動で設定
        c.header('Set-Cookie', `${SESSION_COOKIE_NAME}=authenticated; HttpOnly; Path=/`);
        return c.json({ message: 'Login successful' }, 200);
    } else {
        return c.json({ message: 'Unauthorized' }, 401);
    }
});

// 認証が必要なホームページ
app.get('/', (c) => {
    const cookies = parseCookies(c.req.header('Cookie'));
    const token = cookies[SESSION_COOKIE_NAME];
    
    if (token === 'authenticated') {
        return c.html('<html><head><title>最初のページ</title></head><body><h1>Playwrightのハンズオン</h1></body></html>');
    } else {
        return c.json({ message: 'Unauthorized' }, 401);
    }
});

app.get('/sample-page', (c) => {
  return c.html('<html><head><title>Sample Page</title></head><body><p>ページのサンプルテキスト</p></body></html>');
});

// サーバー起動
serve(app);
