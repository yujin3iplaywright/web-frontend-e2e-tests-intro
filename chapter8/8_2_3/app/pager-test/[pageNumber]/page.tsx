// app/pager-test/[pageNumber]/page.tsx
import React from 'react';
import Pager from '../../../components/Pager';

export default function PagerTestDynamicPage({ params }: { params: { pageNumber: string } }) {
  const page = parseInt(params.pageNumber, 10);

  return (
    <main>
      <h1>Pager テストページ - ページ {page}</h1>
      <Pager
        total={100}
        page={page}
        perPage={10}
        href="/pager-test"
      />
    </main>
  );
}
