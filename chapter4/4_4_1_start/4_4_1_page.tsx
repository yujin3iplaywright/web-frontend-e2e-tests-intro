"use client";

import { useState } from 'react';

export default function StartPage() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('開始しました');
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleClick}>開始</button>
      {message && <p>{message}</p>}
    </div>
  );
}
