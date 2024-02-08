const BasePage = require('./base.page');

const { AccountInformationFormComponent } = require('../components');

class SignupPage extends BasePage {

    constructor() {
        super('signup');
        this.accountInformationForm = new AccountInformationFormComponent();
    }

    async setAccountInformationValues(gender, name, email, password, dayNum, monthNum, year) {
        switch (gender) {
            case 'male':
                await this.accountInformationForm.gender1Input.click();
                break;

            case 'female':
                await this.accountInformationForm.gender2Input.click();
                break;
        }

        const nameInput = await this.accountInformationForm.nameInput;
        if(nameInput.getValue() === '') {
            nameInput.setValue(name);
        }

        const emailInput = await this.accountInformationForm.emailInput;
        if(emailInput.getValue() === '') {
            emailInput.setValue(email);
        }

        await this.accountInformationForm.passwordInput.setValue(password);
        await this.accountInformationForm.bithdaySelectbox.selectByAttribute('value', dayNum);
        await this.accountInformationForm.bithmonthSelectbox.selectByAttribute('value', monthNum);
        await this.accountInformationForm.bithyearSelectbox.selectByAttribute('value', year);
    }

    async setAddressInformationValues(firstname, lastname, company, address1, address2, country, state, city, zipcode, mobileNum) {
        await this.accountInformationForm.firstnameInput.setValue(firstname);
        await this.accountInformationForm.lastnameInput.setValue(lastname);
        await this.accountInformationForm.companyInput.setValue(company);
        await this.accountInformationForm.address1Input.setValue(address1);
        await this.accountInformationForm.address2Input.setValue(address2);
        await this.accountInformationForm.countrySelectbox.selectByAttribute('value', country);
        await this.accountInformationForm.stateInput.setValue(state);
        await this.accountInformationForm.cityInput.setValue(city);
        await this.accountInformationForm.zipcodeInput.setValue(zipcode);
        await this.accountInformationForm.mobileNumberInput.setValue(mobileNum);
    }

}

module.exports = SignupPage;