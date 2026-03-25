// @ts-check
import { test, expect } from '@playwright/test';

test.describe ('add contact list',() =>

{
    test.skip ('new contact list', async ({page}) => 
    {
        await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

    await page.getByPlaceholder('Emdfghail').fill('abc@xyz12.com');
    await page.getByPlaceholder('Password').fill('0123456789');
    //await page.getByRole('button',{name: 'Submit'}).click();/
    await page.getByText('Submit').click();

    // const validlogin = await page.getByText('Click on any contact to view the Contact Details');
    // await expect(validlogin).toHaveText('Click on any contact to view the Contact Details');
    const validlogin = await page.locator(`//p[text()='Click on any contact to view the Contact Details']`);
    await expect(validlogin).toHaveText('Click on any contact to view the Contact Details');
    // await expect(page).toHaveTitle('Contact List');
        // await page.getByRole('button',{name: 'Add a New Contact'}).click;
                await page.getByRole('button',{name: 'Add a New Contact'}).click();

        await page.getByPlaceholder("12").fill('asdfadfs');
        await page.getByPlaceholder('Last Name').fill('asdfadfs');
        await page.getByPlaceholder('yyyy-MM-dd').fill('2024-12-23');
        await page.getByPlaceholder('example@email.com').fill('abc@xyz21.com');
        await page.getByPlaceholder('8005551234').fill('9854751234');
        await page.getByPlaceholder('Address 1').fill('asdfasdf,sadfsadf');
        await page.getByPlaceholder('Address 2').fill('asdfadfs,asdfasdf');
        await page.getByPlaceholder('City').fill('mncjd');
        await page.getByPlaceholder('State or Province').fill('asdfadfs');
        await page.getByPlaceholder('Postal Code').fill('asdfadfs');
        await page.getByPlaceholder('Country').fill('asdfadfs');

        await page.getByText('Submit').click();
        
        


    })
}

)