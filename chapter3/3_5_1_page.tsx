import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3.5.1 フィルター',
  description: '3.5 高度なロケーター > 3.5.1 フィルター',
}

export default function Home() {
  // HTMLのfor属性はJavaScriptでは予約語であるため、ReactとJSXではhtmlForという名前を使用します
  return (
    <main>
      <h1>3.5.1 フィルター</h1>
      <div>
        <ul>
          <li id="1">赤巻紙</li>
          <li id="2">青巻紙</li>
          <li id="3">黄巻紙</li>
        </ul>
      </div>
    </main>
  )
}