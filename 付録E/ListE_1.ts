/*
* このファイルは、Playwrightクライアントがリモートブラウザに接続するためのものです。
* playwright.config.tsと同じディレクトリに配置する必要があります。
*/

import { defineConfig } from '@playwright/test';
import config from './playwright.config';
import dotenv from 'dotenv';

PLAYWRIGHT_SERVICE_RUN_ID: ${{ github.run_id }}-${{ github.run_attempt }}-${{ github.sha }}

dotenv.config();

// テストランIDに名前がない場合は名前を付けます。
process.env.PLAYWRIGHT_SERVICE_RUN_ID = process.env.PLAYWRIGHT_SERVICE_RUN_ID || new Date().toISOString();

// os名を取得します。
const os = process.env.PLAYWRIGHT_SERVICE_OS || 'linux';

export default defineConfig(config, {
  // タイムアウトを定義します。
  // timeout: 60000,
  // expect: {
  //   timeout: 10000,
  // },
  workers: 20,

  // スクリーンショットテストを有効にし、出力するディレクトリを設定します。
  // https://learn.microsoft.com/azure/playwright-testing/how-to-configure-visual-comparisons
  ignoreSnapshots: false,
  snapshotPathTemplate: `{testDir}/__screenshots__/{testFilePath}/${os}/{arg}{ext}`,

  use: {
    // サービスエンドポイントを指定します。
    connectOptions: {
      wsEndpoint: `${process.env.PLAYWRIGHT_SERVICE_URL}?cap=${JSON.stringify({
        // 'linux'または'windows'を指定できます。
        os,
        runId: process.env.PLAYWRIGHT_SERVICE_RUN_ID
      })}`,
      timeout: 30000,
      headers: {
        'x-mpt-access-key': process.env.PLAYWRIGHT_SERVICE_ACCESS_TOKEN!
      },
      // サービスがlocalhostにアクセスできるようにします。
      exposeNetwork: '<loopback>'
    }
  },
  // OSSの設定マージバグの一時的な回避策 https://github.com/microsoft/playwright/pull/28224
  projects: config.projects ? config.projects : [{}]
});