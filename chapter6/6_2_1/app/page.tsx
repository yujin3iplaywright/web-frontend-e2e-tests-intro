// app/page.tsx
"use client";
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch('/api/user');
      const data = await res.json();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>ホームページ</h1>
      {userData ? (
        <div>
          <h2>ユーザー情報</h2>
          <p>名前: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>読み込み中...</p>
      )}
    </div>
  );
}
