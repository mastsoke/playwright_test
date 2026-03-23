import {test} from '@playwright/test';
import {LoginPage} from '../Page_Objects/login.po';

test.beforeEach( async ({ page }) => {
    await page.goto('/');
}) 

test.describe('Valid Login tests', () => {
    test('Login using valid username and password', async ({page})=> {
        const login = new LoginPage (page);
        await login.login(page);
        await login.verifyValidLogin();
    });
})

test.describe('Invalid login tests', () => {
    test('Login using invalid username and password', async ({page}) => {
        const login = new LoginPage (page);
        await login.login("xyz@12.com","01234");
        await login.varifyInvalidLogin();
    });
    test('Login using empty username and password', async ({page}) => {
        const login = new LoginPage (page);
        await login.login("","");
        await login.varifyInvalidLogin();
    });
    test('Login using valid username and empty password', async ({page}) => {
        const login = new LoginPage (page);
        await login.login("abc@xyz12.com","");
        await login.varifyInvalidLogin();
    });
    test('Login using empty username and valid password', async ({page}) => {
        const login = new LoginPage (page);
        await login.login("","0123456789");
        await login.varifyInvalidLogin();
    });
})