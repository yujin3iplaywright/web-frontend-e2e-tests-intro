import { defineConfig, devices } from '@playwright/test';
import path from "path";

// .authにuser.jsonを保存するための場所を作ります
export const STORAGE_STATE = path.join(__dirname, "playwright/.auth/user.json");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    screenshot: 'only-on-failure',  // テストが失敗したときだけスクリーンショットを撮る設定
    video: 'retain-on-failure',  // テストが失敗したときにビデオも残す設定（オプション）
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ }, // 追加する設定プロジェクト
    {
      name: 'chromium',
      dependencies: ['setup'],  // この行を追加
      use: { 
        ...devices['Desktop Chrome'],
        storageState: STORAGE_STATE,
       },
    },

    {
      name: 'firefox',
      dependencies: ['setup'],  // この行を追加
      use: { 
        ...devices['Desktop Firefox'],
        storageState: STORAGE_STATE,
       },
    },

    {
      name: 'webkit',
      dependencies: ['setup'],  // この行を追加
      use: { 
        ...devices['Desktop Safari'],
        storageState: STORAGE_STATE,
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
