// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: 'html',

  use: {
    channel: 'chrome',   // ✅ use installed Google Chrome
    headless: true,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Google Chrome',
    },
  ],
});