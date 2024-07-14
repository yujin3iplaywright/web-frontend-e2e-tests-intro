import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3.2.7 getByTestId()',
  description: '3.2 ロケーター > 3.2.7 getByTestId()',
}

export default function Home() {
  return (
    <main>
      <h1>3.2.7 getByTestId()</h1>
      <div>
        <ul>
          <li><button data-testid="admin-menu">管理者メニュー</button></li>
          <li><button data-testid="cache-clear">キャッシュクリア</button></li>
        </ul>
      </div>
    </main>
  )
}