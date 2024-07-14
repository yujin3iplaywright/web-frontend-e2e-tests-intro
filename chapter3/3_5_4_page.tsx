import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3.5.4 その他のロケーター',
  description: '3.5 高度なロケーター > 3.5.4 その他のロケーター',
}

export default function Home() {
  // HTMLのfor属性はJavaScriptでは予約語であるため、ReactとJSXではhtmlForという名前を使用します
  return (
    <main>
      <h1>3.5.4 その他のロケーター</h1>
      <div>
        <label htmlFor="fname">テキストボックス1:</label> <input type="text" name="text1" id="fname1" />
        <label htmlFor="fname">テキストボックス2:</label> <input type="text" name="text2" id="fname2" />
        <label htmlFor="fname">テキストボックス3:</label> <input type="text" name="text3" id="fname3" />
        <button>ボタン1</button>
      </div>
    </main>
  )
}