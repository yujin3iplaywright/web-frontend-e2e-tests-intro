'use client';

import React from 'react';

const HoverTestPage = () => {
  return (
    <div>
      <h1>Hover Test Page</h1>
      <p>ここはPlaywrightのテスト用のページです。</p>
      <button id="hover-button" style={{ padding: '10px', fontSize: '16px' }}>
        Hover me!
      </button>
      <style jsx>{`
        #hover-button:hover {
          background-color: lightblue;
        }
      `}</style>
    </div>
  );
};

export default HoverTestPage;
