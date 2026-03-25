import { test } from '@playwright/test';
import { LoginPage } from '../Page_Objects/login.po';
import {ContactPage} from '../Page_Objects/contact.po';

const testData = require('../Fixtures/login.json');
const contactData = require('../fixtures/contact.json');
const {authenticateUser, createEntity, deleteEntity, validateEntity, getEntity} = require ('../helper.spec.js');
let accessToken;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  const login = new LoginPage(page);
    await login.login(testData.validuser.username, testData.validuser.password);
    await login.verifyValidLogin();
});


test.skip('add contact', async ({page}) => {
    const contact = new ContactPage(page);
    await contact.contactAdd(contactData.contact.firstName, contactData.contact.lastName);
    await contact.viewcreatedcontact();
    await contact.validateAddedContacts(contactData.contact.firstName,contactData.contact.lastName);
 });

test('edit contact', async ({page, request}) => { 
    const Data = {
        "firstName": "Jhon",
        "lastName": "Doeee"
    };
    const contact = new ContactPage(page);

    accessToken= await authenticateUser(testData.validuser.username, testData.validuser.password, {request})
    await createEntity(Data,accessToken,'/contacts', {request});
    page.reload();
    await contact.viewcreatedcontact();
    await contact.editContacts(contactData.contactEdit.firstName, contactData.contactEdit.lastName);
    await contact.returnPage();
    await contact.viewcreatedcontact();
    await contact.validateAddedContacts(contactData.contactEdit.firstName,contactData.contactEdit.lastName);
});

test.only ('Contact Delete test', async ({ page, request }) => {
  const Data = {
    "firstName": "John",
    "lastName": "Doe",
    
  };

  const contact = new ContactPage(page);

  accessToken = await authenticateUser(testData.validuser.username, testData.validuser.password, {request})

  await createEntity(Data, accessToken, '/contacts', { request });

  page.reload();
  await contact.viewcreatedcontact();

  const id = await getEntity(accessToken, '/contacts', '200', { request });

  await contact.contactDelete();
  
  await validateEntity(accessToken, `/contacts/${id}`, '404', { request });
});

test.skip('delete contact', async ({page}) => {
     const contact = new ContactPage(page);
      await contact.viewcreatedcontact();
    await contact.contactDelete();
 });

