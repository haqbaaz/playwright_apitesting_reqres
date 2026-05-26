import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Only load .env file locally, not in CI
if (!process.env.CI) {
  const ENV = process.env.ENV || 'prod';
  dotenv.config({ path: path.resolve(__dirname, `.env.${ENV}`) });
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    headless: process.env.CI ? true : false,
    baseURL: process.env.BASE_URL,

    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.API_TOKEN}`
    }

  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});