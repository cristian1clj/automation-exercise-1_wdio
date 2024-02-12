const BaseComponent = require('../common/base.component');

class LoginFormComponent extends BaseComponent {

    constructor() {
        super('.login-form');
    }

    get title() {
        return this.rootEl.$('h2');
    }

    get emailInput() {
        return this.rootEl.$('//input[@data-qa="login-email"]');
    }

    get passwordInput() {
        return this.rootEl.$('//input[@data-qa="login-password"]');
    }

    get loginBtn() {
        return this.rootEl.$('//button[@data-qa="login-button"]');
    }

    get incorrectEmailMsg() {
        return this.rootEl.$('//p[@style="color: red;"]');
    }

}

module.exports = LoginFormComponent;