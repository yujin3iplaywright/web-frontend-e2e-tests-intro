/*
こちらを試す場合には以下を先に行っておいてください。

1. `npx create-next-app@latest playwright-handson` を実行
2. 作った playwright-handson の中に移動して、 `npm init playwright@latest -- --ct` を実行。質問聞かれたら React の一番新しいの選択
3. `npm install` を実行して依存関係のインストールを行っておきます

テスト実行前に8_2_3で使ったファイルを以下のように配置してください。
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

コンポーネントに対するビジュアルリグレッションテストを行うには、一度以下を実行します。

`npm run test-ct -- --update-snapshots`

./__snapshots__ に画像が保存されるので、その後以下を実行します。

`npm run test-ct`

これで3個のブラウザ画像との比較でPassしたら成功です。

*/

// components/Pager.spec.tsx
import { test, expect } from '@playwright/experimental-ct-react';
import Pager from './Pager';

test.use({ viewport: { width: 800, height: 500 } });

test('Visual comparisons example test', async ({ mount }) => {
  const component = await mount(
    <Pager
      total={100}
      page={3}
      perPage={10}
      href="/pager-test"
    />
  );
  await expect(component).toHaveScreenshot()
});
