import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '2024/02/21撮影',
  description: '3.2 ロケーター > 3.2.6 getByTitle()',
}

export default function Home() {
  return (
    <main>
      <h1>3.2.6 getByTitle()</h1>
      <div>
      <img width="200" height="200" src="/assets/cute-dog.png" alt="かわいいわんこ" title="2024/02/21撮影" />
      </div>
    </main>
  )
}