const BaseComponent = require('./base.component');

class TopbarComponent extends BaseComponent {

    constructor() {
        super('#header');
    }

    get loginBtn() {
        return this.rootEl.$('//a[@href="/login"]');
    }

    get logoutBtn() {
        return this.rootEl.$('//a[@href="/logout"]');
    }

    get deleteAccountBtn() {
        return this.rootEl.$('//a[@href="/delete_account"]');
    }

    get loggedMessageItem() {
        return this.rootEl.$('//li[contains(., " Logged in as ")]');
    }

}

module.exports = TopbarComponent;