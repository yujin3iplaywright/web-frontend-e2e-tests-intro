'use client';

import { useState } from 'react';

export default function Home() {
  const [response, setResponse] = useState('');

  const fetchData = async () => {
    const res = await fetch('/api/fetch_data');
    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div>
      <h1>Request Test</h1>
      <button onClick={fetchData}>trigger request</button>
      {response && <p>Response: {response}</p>}
    </div>
  );
}