// app/page.tsx
"use client";

import React, { useState } from 'react';

export default function HomePage() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (buttonNumber: number) => {
    setClickCount(prevCount => prevCount + 1);
    alert(`Button ${buttonNumber} clicked! Total clicks: ${clickCount + 1}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>ランダムクリックテスト</h1>
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index + 1)}
          style={{ margin: '10px', padding: '10px 20px' }}
        >
          Button {index + 1}
        </button>
      ))}
      <p>Click count: {clickCount}</p>
    </div>
  );
}
