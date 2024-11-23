// app/page.tsx
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Image Test Page</h1>
      <p>Next.js経由で画像を表示します。以下の画像が表示されるか確認してください。</p>
      <Image
        src="/example.jpg" // publicフォルダ内に example.jpg を置いてください
        alt="Test Image"
        width={500}
        height={500}
      />
    </div>
  )
}
