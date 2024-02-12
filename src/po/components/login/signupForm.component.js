const BaseComponent = require('../common/base.component');

class SignupFormComponent extends BaseComponent {

    constructor() {
        super('.signup-form');
    }

    get title() {
        return this.rootEl.$('h2');
    }

    get nameInput() {
        return this.rootEl.$('//input[@data-qa="signup-name"]');
    }

    get emailInput() {
        return this.rootEl.$('//input[@data-qa="signup-email"]');
    }

    get signupBtn() {
        return this.rootEl.$('//button[@data-qa="signup-button"]');
    }

    get registeredEmailMsg() {
        return this.rootEl.$('//p[@style="color: red;"]');
    }

}

module.exports = SignupFormComponent;