import { defineConfig } from '@playwright/test'
export default defineConfig({
     testDir: './tests',
     retries: 1,
     reporter:[['list'],['allure-playwright']],
     use : {
        headless : true,
        screenshot : 'only-on-failure',
        video : 'retain-on-failure',
        baseURL: 'https://www.saucedemo.com/',
     },
});