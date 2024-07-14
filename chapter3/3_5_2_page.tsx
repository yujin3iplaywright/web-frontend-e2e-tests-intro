import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3.5.2 一度絞り込んだ要素の中からさらに検索',
  description: '3.5 高度なロケーター > 3.5.2 一度絞り込んだ要素の中からさらに検索',
}

export default function Home() {
  // HTMLのfor属性はJavaScriptでは予約語であるため、ReactとJSXではhtmlForという名前を使用します
  return (
    <main>
      <h1>3.5.2 一度絞り込んだ要素の中からさらに検索</h1>
      <div>
        <ul>
          <li>和食
            <ul>
              <li><a href="/sushi">寿司</a></li>
              <li><a href="/japanese-noodle">麺</a></li>
            </ul>
          </li>
          <li>中華
            <ul>
              <li><a href="/fried-rice">炒飯</a></li>
              <li><a href="/chinese-noodle">麺</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  )
}