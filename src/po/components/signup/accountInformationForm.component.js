const BaseComponent = require('../common/base.component');

class AccountInformationFormComponent extends BaseComponent {

    constructor() {
        super('//div[@style="height: auto !important; min-height: 0px !important;"]');
    }

    get title() {
        return this.rootEl.$('.title');
    }

    get gender1Input() {
        return this.rootEl.$('#id_gender1');
    }
    
    get gender2Input() {
        return this.rootEl.$('#id_gender2');
    }

    get nameInput() {
        return this.rootEl.$('#name');
    }
    
    get emailInput() {
        return this.rootEl.$('#email');
    }
    
    get passwordInput() {
        return this.rootEl.$('#password');
    }

    get bithdaySelectbox() {
        return this.rootEl.$('#days');
    }
    
    get bithmonthSelectbox() {
        return this.rootEl.$('#months');
    }
    
    get bithyearSelectbox() {
        return this.rootEl.$('#years');
    }

    get newsletterCheckbox() {
        return this.rootEl.$('#newsletter');
    }
    
    get offersCheckbox() {
        return this.rootEl.$('#optin');
    }

    get firstnameInput() {
        return this.rootEl.$('#first_name');
    }
    
    get lastnameInput() {
        return this.rootEl.$('#last_name');
    }

    get companyInput() {
        return this.rootEl.$('#company');
    }

    get address1Input() {
        return this.rootEl.$('#address1');
    }
    
    get address2Input() {
        return this.rootEl.$('#address2');
    }

    get countrySelectbox() {
        return this.rootEl.$('#country');
    }
    
    get stateInput() {
        return this.rootEl.$('#state');
    }

    get cityInput() {
        return this.rootEl.$('#city');
    }
    
    get zipcodeInput() {
        return this.rootEl.$('#zipcode');
    }
    
    get mobileNumberInput() {
        return this.rootEl.$('#mobile_number');
    }

    get createAccountBtn() {
        return this.rootEl.$('//button[@data-qa="create-account"]');
    }

}

module.exports = AccountInformationFormComponent;