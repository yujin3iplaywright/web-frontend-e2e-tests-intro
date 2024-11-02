// app/page.tsx
import React from 'react';
import Pager from '../components/Pager';

export default function Home() {
  const asCallback = (page: number) => `/pager-test${page === 1 ? '' : `/${page}`}`;
  return (
    <main>
      <h1>ホームページ</h1>
      <Pager
        total={100}
        page={1}
        perPage={10}
        asCallback={asCallback}
      />
    </main>
  );
}
