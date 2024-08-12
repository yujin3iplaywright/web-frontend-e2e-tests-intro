import type { Metadata } from 'next'
import { Login } from './login'

export const metadata: Metadata = {
    title: 'ログインページ',
    description: '4.1.1 goto()',
}

export default function login() {
    return (
        <main>
            <h1>ログイン</h1>
            <Login />
        </main>
    )
}