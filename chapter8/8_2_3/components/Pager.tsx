// components/Pager.tsx
import React from 'react';

type PagerProps = {
  total: number;
  page: number;
  perPage: number;
  href: string;
};

const Pager: React.FC<PagerProps> = ({ total, page, perPage, href }) => {
  const totalPages = Math.ceil(total / perPage);
  const pages: number[] = [];

  // 1から totalPages までのページ番号を生成
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        const isActive = p === page;
        const linkHref = `${href}/${p}`; // ページ番号に応じたリンクを生成
        return (
          <a
            key={p}
            href={linkHref}
            aria-current={isActive ? 'page' : undefined}
            role="link"
          >
            {p}
          </a>
        );
      })}
    </div>
  );
};

export default Pager;
