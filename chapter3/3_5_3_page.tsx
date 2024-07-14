import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3.5.3 複数の要素の絞り込み',
  description: '3.5 高度なロケーター > 3.5.3 複数の要素の絞り込み',
}

export default function Home() {
  // HTMLのfor属性はJavaScriptでは予約語であるため、ReactとJSXではhtmlForという名前を使用します
  return (
    <main>
      <h1>3.5.3 複数の要素の絞り込み</h1>
      <div>
        <p>最初の段落</p>
        <p>2つめの段落</p>
        <p>3つめの段落</p>
        <p>最後の段落</p>
    </main>
  )
}