const BasePage = require('./base.page');

const { AccountStatusMessageComponent } = require('../components');

class AccountDeletedPage extends BasePage {

    constructor() {
        super('delete_account');
        this.accountStatusMessageComponent = new AccountStatusMessageComponent();
    }

}

module.exports = AccountDeletedPage;