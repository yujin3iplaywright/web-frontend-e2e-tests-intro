// globals.css のファイルの中身をすべて削除しておくのを忘れずに！

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '最初のページ',
  description: 'Playwrightハンズオンの最初のステップ',
}

export default function Home() {
  return (
    <main>
      <h1>Playwrightのハンズオン</h1>
      <p>あなたは1週間後にはE2Eテストのエキスパートです。</p>
      <p>
      <input type='checkbox' id='readcheckbox' name='読みました' />
      <label htmlFor='readcheckbox'>読みました</label>
      </p>
    </main>
  )
}