const BaseComponent = require('../common/base.component');

class AccountStatusMessageComponent extends BaseComponent {

    constructor() {
        super('#form');
    }

    get title() {
        return this.rootEl.$('.title');
    }

    get continueBtn() {
        return this.rootEl.$('//a[@data-qa="continue-button"]');
    }

}

module.exports = AccountStatusMessageComponent;