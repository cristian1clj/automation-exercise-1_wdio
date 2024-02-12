const BasePage = require('./base.page');

const { SignupFormComponent, LoginFormComponent } = require('../components');

class LoginPage extends BasePage {

    constructor() {
        super('login');
        this.signupForm = new SignupFormComponent();
        this.loginForm = new LoginFormComponent();
    }

    async setSignupValues(name, email) {
        await this.signupForm.nameInput.setValue(name);
        await this.signupForm.emailInput.setValue(email);
    }

    async setLoginValues(email, password) {
        await this.loginForm.emailInput.setValue(email);
        await this.loginForm.passwordInput.setValue(password);
    }

}

module.exports = LoginPage;