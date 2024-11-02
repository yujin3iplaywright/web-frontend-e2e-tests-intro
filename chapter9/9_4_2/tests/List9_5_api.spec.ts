import { test, expect } from '@playwright/test';

test('ヘッダとクエリ', async ({ request }) => {
    const result = await request.get('http://localhost:3000/header-and-query', {
        headers: {
            'X-Test-Header': 'test'
        }, 
        params: {
            'search': 'word'
        }
    })
    expect(result.ok()).toBeTruthy()
})