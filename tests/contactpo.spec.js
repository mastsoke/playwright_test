import {test} from '@playwright/test';
import { LoginPage } from '../Page_Objects/login.po';
import {ContactPage} from '../Page_Objects/contact.po';

test.beforeEach( async ({ page }) => {
    await page.goto('/');
    const login = new LoginPage (page);
        await login.login("abc@xyz12.com","0123456789");
        await login.verifyValidLogin();
}) 


test.describe('add new contact',()=>
{
    test('new contact list', async ({page}) => {
        
        const addNewContact = new ContactPage (page);
        
         await addNewContact.contactAdd ("test","tester","2024-12-22","abc@xyz12.com","9849124586","test address","test city","test state","987","test country");


    }
);
}
)

test.describe('verify data input', () => {
    test('validate added contact', async ({page}) => {
        const verifyContact = new ContactPage (page);
        
        await verifyContact.validateAddedContacts ("test","tester","2024-12-22","abc@xyz12.com","9849124586","test address","test city","test state","987","test country");
    });
})

 test.only('edit added contact', async ({page}) => {
        const editContacts = new ContactPage (page);
         const verifyContact = new ContactPage (page);
         await verifyContact.validateAddedContacts ("test","tester","2024-12-22","abc@xyz12.com","9849124586","test address","test city","test state","987","test country");
        await editContacts.editContacts ("jkl","asdf");

    });

test ('delete contact', async ({page}) =>
{
    const deleteContact = new ContactPage (page);
    const verifyContact = new ContactPage (page);
         await verifyContact.validateAddedContacts ("test","tester","2024-12-22","abc@xyz12.com","9849124586","test address","test city","test state","987","test country");
    await deleteContact.contactDelete(
)

}
);


