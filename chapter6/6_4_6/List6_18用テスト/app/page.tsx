'use client';

import React, { useState } from 'react';

export default function Page() {
  const [message, setMessage] = useState('クリックしてください');

  const handleClick = () => {
    setMessage('クリックされました！');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button 
        onClick={handleClick} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        ボタンをクリック
      </button>
      <p>{message}</p>
    </div>
  );
}
