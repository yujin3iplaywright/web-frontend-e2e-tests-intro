'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setLoading(true);

    // API呼び出し
    const response = await fetch('/api/resource');
    if (response.ok) {
      // API成功時、ログインページへ遷移
      router.push('/login');
    }
    
    setLoading(false);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'trigger response'}
      </button>
    </div>
  );
}
