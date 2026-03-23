import {expect} from '@playwright/test';

exports.ContactPage = class ContactPage{
    constructor(page) {
        this.page=page;
        this.addContact = '//button[@id = "add-contact"]';
        this.firstName = '#firstName';
        this.lastName = '#lastName';
        this.dob = '//input[@placeholder="yyyy-MM-dd"]';
        this.email = '//input[@id="email"]';
        this.phone = '//input[@id="phone"]';
        this.address = '//input[@placeholder="Address 1"]';
        this.city = '//input[@placeholder="City"]';
        this.state = '//input[@placeholder="State or Province"]';
        this.postal = '//input[@placeholder="Postal Code"]';
        this.country = '//input[@placeholder="Country"]';
        this.save = '//button[contains(text(),"Submit")]';
        this.viewCreatedContact = '//th[contains(text(),"Name")]//following::td[2]';
        this.fName = '//span[@id="firstName"]';
        this.lName = '//span[@id="lastName"]';
        this.dateOfBirth= '//span[@id="birthdate"]';
        this.mail = '//span[@id="email"]';
        this.pNumber = '//span[@id="phone"]';
        this.street = '//span[@id="street1"]';
        this.city1 = '//span[@id="city"]';
        this.province = '//span[@id="stateProvince"]';
        this.postalCode = '//span[@id="postalCode"]';
        this.country1 = '//span[@id="country"]';
        this.edit = '//button[contains(text(),"Edit Contact")]';
        this.delete = '//button[contains(text(),"Delete Contact")]';
        this.return = '//button[@id="return"]';    


    }
    async contactAdd(firstName, lastName, dateOfBirth, email, phone, address, city, state, postal, country) {
        await this.page.locator(this.addContact).click();
        await this.page.locator(this.firstName).fill(firstName);
        await this.page.locator(this.lastName).fill(lastName);
      //   await this.page.locator(this.dob).fill(dateOfBirth);
      //   await this.page.locator(this.email).fill(email);
      //   await this.page.locator(this.phone).fill(phone);
      //   await this.page.locator(this.address).fill(address);
      //   await this.page.locator(this.city).fill(city);
      //   await this.page.locator(this.state).fill(state);
      //   await this.page.locator(this.postal).fill(postal);
      //   await this.page.locator(this.country).fill(country);
      //   await this.page.waitForTimeout(3000);

        await this.page.locator(this.save).click();


     };

     async viewcreatedcontact() {
         await this.page.locator(this.viewCreatedContact).click();
     };
     async returnPage(){
      await this.page.locator(this.return).click();
     };

     async validateAddedContacts(firstName, lastName, dateOfBirth, email, phone, address, city, state, postal, country) {
        const fNameValidation = await this.page.locator(this.fName);
        const lNameValidation = await this.page.locator(this.lName);
      //   const dobValidation = await this.page.locator(this.dateOfBirth);
      //   const emailValidation = await this.page.locator(this.mail);
      //   const phoneValidation = await this.page.locator(this.pNumber);
      //   const addressValidation = await this.page.locator(this.street);
      //   const cityValidation = await this.page.locator(this.city1);
      //   const stateValidation = await this.page.locator(this.province);
      //   const postalValidation = await this.page.locator(this.postalCode);
      //   const countryValidation = await this.page.locator(this.country1);
        
        
      
        await expect (fNameValidation).toHaveText(firstName);
        await expect (lNameValidation).toHaveText(lastName);
      //   await expect (dobValidation).toHaveText(dateOfBirth);
      //   await expect (emailValidation).toHaveText(email);
      //   await expect (phoneValidation).toHaveText(phone);
      //   await expect (addressValidation).toHaveText(address);
      //   await expect (cityValidation).toHaveText(city);
      //   await expect (stateValidation).toHaveText(state);
      //   await expect (postalValidation).toHaveText(postal);
      //   await expect (countryValidation).toHaveText(country);
     };

     async editContacts(firstName, lastName ) {

        await this.page.locator(this.edit).click();
        await this.page.locator(this.firstName).fill(firstName);
        await this.page.locator(this.lastName).fill(lastName,{ delay: 100 });
        
        await this.page.locator(this.save).click();

     };

     

     async contactDelete () {
      await this.page.waitForTimeout(2000);
      this.page.once('dialog', async dialog => {
         console.log(`Dialog message: ${dialog.message()}`);
         await dialog.accept();
      });
      await this.page.locator(this.delete).click();
     };
        
    }
