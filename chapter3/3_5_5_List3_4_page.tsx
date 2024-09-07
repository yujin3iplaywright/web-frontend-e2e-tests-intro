import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3.5.5 複数要素のあるリストやテーブルからの情報取得',
  description: '3.5 高度なロケーター > 3.5.5 複数要素のあるリストやテーブルからの情報取得',
}

export default function Home() {
  // HTMLのfor属性はJavaScriptでは予約語であるため、ReactとJSXではhtmlForという名前を使用します
  return (
    <main>
      <h1>3.5.5 複数要素のあるリストやテーブルからの情報取得</h1>
      <div>
        <ul>
          <li>牛乳を買う <button>完了</button></li>
          <li>パンを買う <button>完了</button></li>
          <li>ノートを買う <button>完了</button></li>
          <li>ポストにハガキを入れる <button>完了</button></li>
        </ul>
      </div>
    </main>
  )
}