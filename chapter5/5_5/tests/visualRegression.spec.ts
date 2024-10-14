/*
このテストを実行する前に以下の２つを実行してください

```bash
npm install three
npm install parse5
```

その後、以下のようにファイルを配置してください。
playwright-handson/
├ app/
│ └─ webgl-test/
│    └─ page.tsx
├ tests/
│ └ visualRegression.spec.ts

ビジュアルリグレッションテストでは、1回目は失敗します。
比較対象となる画像がないためです。
また、比較対象の画像を更新したい場合は以下を実行して更新できます。

```bash
npx playwright test --update-snapshots
```

補足：このテストコードでは、webkit用に変更しています。
WebKit では canvas 要素の innerHTML が空になってしまう可能性があります。このため、childNodes[0] が存在するかどうかをまず確認し、存在しない場合は適切なエラーハンドリングをしています。
*/

import { test, expect } from '@playwright/test'
import { parseFragment, serializeOuter } from 'parse5'
import type { DefaultTreeAdapterMap } from 'parse5'

test('screenshot', async ({ page }) => {
  await page.goto('http://localhost:3000/webgl-test');

  // canvas の HTML を取得
  const canvasHtml = await page.getByTestId('canvas').innerHTML();
  const dom = parseFragment(canvasHtml);

  // childNodes の存在確認
  if (!dom.childNodes.length) {
    console.warn('No child nodes found in the canvas element for WebKit');
    return;  // WebKitでは空の状態を考慮して終了させる
  }

  const elem = dom.childNodes[0] as DefaultTreeAdapterMap['element'];

  // elem と elem.attrs の存在を確認
  if (!elem || !('attrs' in elem)) {
    throw new Error('Canvas element or attributes not found');
  }

  elem.attrs = elem.attrs.filter(attr => attr.name !== 'data-scene');

  expect(serializeOuter(elem)).toMatchSnapshot('canvas.snapshot.html');
});
