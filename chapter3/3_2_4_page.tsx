import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3.2.4 getByText() のページ',
  description: '3.2 ロケーター > 3.2.4 getByText()',
}

export default function Home() {
  return (
    <main>
      <h1>3.2.4 getByText()</h1>
      <div>
      <a href="/home">ホーム</a>
      </div>
    </main>
  )
}