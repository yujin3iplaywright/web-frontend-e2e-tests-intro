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
      <label htmlFor="pet-select">ペットを選択: </label>
      <select name="pets" id="pet-select">
        <option value="">--オプションを選択してください--</option>
        <option value="dog">イヌ</option>
        <option value="cat">ネコ</option>
        <option value="hamster">ハムスター</option>
      </select>
      </p>
    </main>
  )
}