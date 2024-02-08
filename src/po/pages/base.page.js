const TopbarComponent = require('../components/common/topbar.component');

class BasePage {

    constructor(url) {
        this.url = url;
        this.topbar = new TopbarComponent();
    }

    open() {
        return browser.url(this.url);
    }

}

module.exports = BasePage;