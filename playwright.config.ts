import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  use: {
    // baseURL: process.env.CI ? process.env.E2E_BASE_URL : 'http://localhost:3000',
    baseURL: 'https://opanuj-ai-module-3-otla59hzn-patrykpytlarczyks-projects.vercel.app',
    trace: 'on-first-retry',
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    extraHTTPHeaders: {
			"x-vercel-protection-bypass":
				process.env.VERCEL_AUTOMATION_BYPASS_SECRET!,
		},
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: process.env.CI
    ? undefined
    : {
        command: 'npm run dev',
        url: 'http://localhost:3000/',
        timeout: 120_000,
        reuseExistingServer: true,
      },
});
