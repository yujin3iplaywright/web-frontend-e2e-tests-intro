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
      <label for="uploadfile">Upload file</label>
      <input type="file" id="uploadfile" name="upload_file" accept="pdf" />
      </p>
    </main>
  )
}