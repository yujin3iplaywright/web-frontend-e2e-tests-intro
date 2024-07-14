import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3.2.1 getByRole() のページ',
  description: '3.2 ロケーター > 3.2.1 getByRole()',
}

export default function Home() {
  return (
    <main>
      <h1>3.2.1 getByRole()</h1>
      <div>
        <button>更新</button>
        <nav><a href="/news">最新情報</a></nav>
      </div>
    </main>
  )
}