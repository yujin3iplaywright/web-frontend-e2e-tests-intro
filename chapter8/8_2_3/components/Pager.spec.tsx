/*
こちらを試す場合には以下を先に行っておいてください。

1. `npx create-next-app@latest playwright-handson` を実行
2. 作った playwright-handson の中に移動して、 `npm init playwright@latest -- --ct` を実行。質問聞かれたら React の一番新しいの選択
3. `npm install` を実行して依存関係のインストールを行っておきます

テスト実行前にファイルを以下のように配置してください。
playwright-handson/
├ app/
│ ├ page.tsx こちらは中身を書き換えます。また globals.css は中身を空にしてください。
│ └ pager-test/
│   ├ page.tsx
│   └ [pageNumber]
│     └ page.tsx
├ components/
│ └ Pager.tsx
│ └ Pager.spec.tsx

上記の状態で `npm run dev` でアプリを起動して

`http://localhost:3000/pager-test/1`にアクセスして、ページャーのリンクをクリックして他のページに移動できたらちゃんと動いているということです

コンポーネントテストを実行するときには、アプリは動かしておかなくても大丈夫です。

*/

// components/Pager.spec.tsx
import { test, expect } from '@playwright/experimental-ct-react';
import Pager from './Pager';

test.use({ viewport: { width: 800, height: 500 } });

test('先頭ページでの表示', async ({ mount }) => {
  const component = await mount(
    <Pager
      total={100}
      page={1}
      perPage={10}
      href="/pager-test"
    />
  );

  // 全ページ（1から10）を含むことを確認
  for (let i = 1; i <= 10; i++) {
    await expect(component).toContainText(i.toString());
  }

  const links = component.getByRole('link');
  await expect(links).toHaveCount(10);

  // 各リンクの href 属性を確認
  for (let i = 0; i < 10; i++) {
    const expectedHref = `/pager-test/${i + 1}`;
    await expect(links.nth(i)).toHaveAttribute('href', expectedHref);
  }
});

test('2ページ目の表示', async ({ mount }) => {
  const component = await mount(
    <Pager
      total={100}
      page={2}
      perPage={10}
      href="/pager-test"
    />
  );

  // 全ページ（1から10）を含むことを確認
  for (let i = 1; i <= 10; i++) {
    await expect(component).toContainText(i.toString());
  }

  const links = component.getByRole('link');
  await expect(links).toHaveCount(10);

  // 各リンクの href 属性を確認
  for (let i = 0; i < 10; i++) {
    const expectedHref = `/pager-test/${i + 1}`;
    await expect(links.nth(i)).toHaveAttribute('href', expectedHref);
  }
});
