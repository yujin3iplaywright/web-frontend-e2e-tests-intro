import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3.3.2 適切なラベルの付け方',
  description: '3.3 壊れにくいテスト > 3.3.2 適切なラベルの付け方',
}

export default function Home() {
  // HTMLのfor属性はJavaScriptでは予約語であるため、ReactとJSXではhtmlForという名前を使用します
  // HTMLではコメントアウトは<!-- コメント -->だけど、JSXでは{/* コメント */}なので、そちらにしています
  return (
    <main>
      <h1>3.3.2 適切なラベルの付け方</h1>
      <div>
        {/* 明示的なラベル */}
        <label htmlFor="fname">苗字:</label> <input type="text" name="familyname" id="fname" />
        <br></br>
        {/* 暗示的なラベル */}
        <label>苗字: <input type="text" name="familyname" /></label>
      </div>
    </main>
  )
}