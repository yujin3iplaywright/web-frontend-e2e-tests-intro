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
      <label htmlFor="drink-select">飲み物を選択: </label>
      <select name="drinks" id="drink-select" multiple>
        <option value="">--オプションを選択してください--</option>
        <option value="coffee">コーヒー</option>
        <option value="cola">コーラ</option>
        <option value="rootbeer">ルートビア</option>
      </select>
      </p>
    </main>
  )
}