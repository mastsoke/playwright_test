import { test } from '@playwright/test';
import { LoginPage } from '../Page_Objects/login.po';
import {ContactPage} from '../Page_Objects/contact.po';

const testData = require('../fixtures/login.json');
const contactData = require('../fixtures/contact.json');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  const login = new LoginPage(page);
    await login.login(testData.validuser.username, testData.validuser.password);
    await login.verifyValidLogin();
});

// test.describe('contact tests', () => {

// test.describe.configure({ mode: 'serial' });

test('add contact', async ({page}) => {
    const contact = new ContactPage(page);
    await contact.contactAdd(contactData.contact.firstName, contactData.contact.lastName);
    await contact.viewcreatedcontact();
    await contact.validateAddedContacts(contactData.contact.firstName,contactData.contact.lastName);
 });

test('edit contact', async ({page}) => { 
    const contact = new ContactPage(page);
    
    await contact.viewcreatedcontact();
    await contact.editContacts(contactData.contactEdit.firstName, contactData.contactEdit.lastName);
    await contact.returnPage();
    await contact.viewcreatedcontact();
    await contact.validateAddedContacts(contactData.contactEdit.firstName,contactData.contactEdit.lastName);
});

test('delete contact', async ({page}) => {
     const contact = new ContactPage(page);
      await contact.viewcreatedcontact();
    await contact.contactDelete();
 });

// });