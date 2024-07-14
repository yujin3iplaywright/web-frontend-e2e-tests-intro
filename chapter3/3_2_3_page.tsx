import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '3.2.3 getByPlaceholder() のページ',
  description: '3.2 ロケーター > 3.2.3 getByPlaceholder()',
}

export default function Home() {
  return (
    <main>
      <h1>3.2.3 getByPlaceholder()</h1>
      <div>
        <label htmlFor="searchbox">検索</label>
        <input type="search" name="searchword" id="searchbox" placeholder="検索ワード"/>
      </div>
    </main>
  )
}