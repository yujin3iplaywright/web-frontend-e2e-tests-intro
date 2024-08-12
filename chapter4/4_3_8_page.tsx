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
        <label for="email">E-Mail</label>
        <input type="email" id="email" name="email" required/>
        <br></br>
        <br></br>
        <label for="drink-select">好きな飲み物</label>
        <select name="drinks" id="drink-select" size={4} multiple>
          <option value="コーヒー">コーヒー</option>
          <option value="紅茶">紅茶</option>
          <option value="抹茶">抹茶</option>
          <option value="ルートビア">ルートビア</option>
        </select>
      </p>
    </main>
  )
}