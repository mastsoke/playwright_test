// @ts-check
import { test, expect } from '@playwright/test';
test.describe('Valid login tests',() => {
test.skip('Login using valid email and valid password', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Email').fill('abc@xyz12.com');
    await page.getByPlaceholder('Password').fill('0123456789');
    //await page.getByRole('button',{name: 'Submit'}).click();/
    await page.getByText('Submit').click();

    // const validlogin = await page.getByText('Click on any contact to view the Contact Details');
    // await expect(validlogin).toHaveText('Click on any contact to view the Contact Details');
    // const validlogin = await page.locator(`//p[text()='Click on any contact to view the Contact Details']`);
    // await expect(validlogin).toHaveText('Click on any contact to view the Contact Details');
    // await expect(page).toHaveTitle('Contact List');

    // await page.waitForTimeout(5000);

} ) } );

test.describe('invalid login test',() => {

test.skip('login using valid email and invaild password', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Email').fill('abc@xyz.com');
    await page.getByPlaceholder('Password').fill('0123456');
    await page.getByText('Submit').click();

    await expect(page.getByText('Incorrect username or password')).toHaveText('Incorrect username or password');

} );

test.skip('empty data', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Email').fill('');
    await page.getByPlaceholder('Password').fill('');
    await page.getByText('Submit').click();

    await expect(page.getByText('Incorrect username or password')).toHaveText('Incorrect username or password');

} );

test.skip('valid username and empty password', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Email').fill('abc@xyz12.com');
    await page.getByPlaceholder('Password').fill('');
    await page.getByText('Submit').click();

    await expect(page.getByText('Incorrect username or password')).toHaveText('Incorrect username or password');

} );
test.skip ('empty username and valid password', async ({page}) => {
    await page.goto('/');
    await page.getByPlaceholder('Email').fill('');
    await page.getByPlaceholder('Password').fill('0123456789');
    await page.getByRole('button',{name: 'submit'}).click();
    const invalid= await page.locator('//span[@id="error"]');
    await expect(invalid).toHaveText('Incorrect username or password');
} ) } );

