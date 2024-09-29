// app/mouse-test/page.tsx
'use client';

import { useState } from 'react';

export default function MouseTest() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ padding: '50px' }}>
      <h1>マウス操作テスト</h1>
      <div
        onMouseMove={handleMouseMove}
        style={{
          width: '400px',
          height: '200px',
          border: '2px solid black',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'red',
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        ></div>
      </div>
      <p>
        マウスの位置: X - {position.x}, Y - {position.y}
      </p>
    </div>
  );
}
