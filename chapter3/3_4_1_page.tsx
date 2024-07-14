import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3.4.1 テストで頻繁に利用するロール',
  description: '3.4 getByRole()で指定可能なロール > 3.4.1 テストで頻繁に利用するロール',
}

export default function Home() {
  // HTMLのfor属性はJavaScriptでは予約語であるため、ReactとJSXではhtmlForという名前を使用します
  return (
    <main>
      <h1>3.3.2 適切なラベルの付け方</h1>
      <div>
        {/* タグを使用 */}
        <button>ログイン</button>

        {/* ロールを付与 */}
        <div role="button">ログイン</div>
      </div>
    </main>
  )
}