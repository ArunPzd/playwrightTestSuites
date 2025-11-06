import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import testData from '../utils/testData.json';

test.beforeEach(async({page})=>{
    await page.goto('/');
});

test('test login page title',async({page})=> {
    const title= await page.title();
    await expect(page).toHaveTitle(title);

});

test('test valid scenarios', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(testData.validUser.username,testData.validUser.password);
    await expect(page).toHaveURL(/.inventory.html/);
});

test('test invalid scenarios', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(testData.invalidUser.username,testData.invalidUser.password);
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');
});