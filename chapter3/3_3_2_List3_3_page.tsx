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
        {/* labelタグを使わない */}
        <p id="search">検索</p>
        <input type="text" aria-labelledby="search" />
        
        {/* 通常のWebブラウジングでは見えないがスクリーンリーダーからのみ認識される  */}
        <input type="text" aria-label="検索" />

        {/*  テキストのない画像ボタン */}
        <button aria-label="cart"><img src="/cart_icon.png" /></button>
      </div>
    </main>
  )
}