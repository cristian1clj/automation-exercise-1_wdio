const HomePage = require('./home.page');
const LoginPage = require('./login.page');
const SignupPage = require('./signup.page');
const AccountCreatedPage = require('./accountCeated.page');
const AccountDeletedPage = require('./accountDeleted.page');

/**
 * 
 * @param {'home' | 'login' | 'signup' | 'accountcreated' | 'accountdeleted'} name 
 * @returns {HomePage | LoginPage | SignupPage | AccountCreatedPage | AccountDeletedPage}
 */
function pages(name) {
    const items = {
        home: new HomePage(),
        login: new LoginPage(),
        signup: new SignupPage(),
        accountcreated: new AccountCreatedPage(),
        accountdeleted: new AccountDeletedPage(),
    }
    return items[name.toLowerCase()];
}

module.exports = {
    HomePage,
    LoginPage,
    SignupPage,
    AccountCreatedPage,
    AccountDeletedPage,
    pages
}