const BasePage = require('./base.page');

const { AccountStatusMessageComponent } = require('../components');

class AccountCreatedPage extends BasePage {

    constructor() {
        super('account_created');
        this.accountStatusMessageComponent = new AccountStatusMessageComponent();
    }

}

module.exports = AccountCreatedPage;