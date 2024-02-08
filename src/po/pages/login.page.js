const BasePage = require('./base.page');

const { SignupFormComponent } = require('../components');

class LoginPage extends BasePage {

    constructor() {
        super('login');
        this.signupForm = new SignupFormComponent();
    }

    async setSignupValues(name, email) {
        await this.signupForm.nameInput.setValue(name);
        await this.signupForm.emailInput.setValue(email);
    }

}

module.exports = LoginPage;