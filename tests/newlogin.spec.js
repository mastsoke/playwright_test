import { test } from '@playwright/test';
import { LoginPage } from '../Page_Objects/login.po';

const testData = require('../fixtures/login.json');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Valid login tests', () => {
  test.skip('Login using valid username and password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.validuser.username, testData.validuser.password);
    await login.verifyValidLogin();
  });
});

test.describe('Invalid login tests', () => {
  test.skip('Login using invalid username and valid password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invaliduser.username, testData.validuser.password);
    await login.verifyInvalidLogin();
  });
});