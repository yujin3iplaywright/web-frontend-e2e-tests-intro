import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3.2.5 getByAltText() のページ',
  description: '3.2 ロケーター > 3.2.5 getByAltText()',
}

export default function Home() {
  return (
    <main>
      <h1>3.2.5 getByAltText()</h1>
      <div>
      <img width="200" height="200" src="/assets/cute-dog.png" alt="かわいいわんこ" title="2024/02/21撮影" />
      </div>
    </main>
  )
}