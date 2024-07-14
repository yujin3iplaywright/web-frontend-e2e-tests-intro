import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3.3.2 適切なラベルの付け方',
  description: '3.3 壊れにくいテスト > 3.3.2 適切なラベルの付け方',
}

export default function Home() {
  // HTMLのfor属性はJavaScriptでは予約語であるため、ReactとJSXではhtmlForという名前を使用します
  return (
    <main>
      <h1>3.2.8 その他のロケーター（タブで指定）</h1>
      <div>
        <ul>
          <li>タグで指定 <button>ボタン</button></li>
        </ul>
      </div>
    </main>
  )
}