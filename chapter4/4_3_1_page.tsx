// globals.css のファイルの中身をすべて削除しておくのを忘れずに！

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '最初のページ',
  description: 'Playwrightハンズオンの最初のステップ',
}

export default function Home() {
  return (
    <main>
      <h1>Success</h1>
      <p>
        <ul>
          <li>とちおとめ</li>
          <li>あまおう</li>
          <li>紅ほっぺ</li>
        </ul>
      </p>
    </main>
  )
}
