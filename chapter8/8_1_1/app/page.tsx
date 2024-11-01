// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>テストリンク一覧</h1>
      <nav>
        <ul>
          <li><Link href="/page1">Page 1</Link></li>
          <li><Link href="/page2">Page 2</Link></li>
          <li><Link href="/page3">Page 3</Link></li>
          <li><Link href="/page4">Page 4</Link></li>
        </ul>
      </nav>
    </div>
  );
}
