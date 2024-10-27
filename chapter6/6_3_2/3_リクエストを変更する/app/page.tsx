// app/page.tsx
'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setMessage(data.message);
    };
    fetchMessage();
  }, []);

  return (
    <main>
      <h1>Test Page</h1>
      <p>Message from API: {message}</p>
    </main>
  );
}
