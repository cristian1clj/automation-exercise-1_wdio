const { pages } = require('../../po');

const usersData = require('../testData/usersData.json');

async function createAccount(userData) {
    await pages('home').open();
    await pages('home').topbar.loginBtn.click();
    await pages('login').setSignupValues(userData.username, userData.email);
    await pages('login').signupForm.signupBtn.click();
    await pages('signup').setAccountInformationValues(userData.gender, userData.username, userData.email, userData.password, userData.birthDay, userData.birthMonth, userData.birthYear);
    await pages('signup').setAddressInformationValues(userData.firstName, userData.lastName, userData.company, userData.address1, userData.address2, userData.country, userData.state, userData.city, userData.zipcode, userData.mobileNumber);
    await pages('signup').accountInformationForm.createAccountBtn.click();
    await pages('accountcreated').accountStatusMessageComponent.continueBtn.click();
    await pages('home').topbar.logoutBtn.click();
}

describe('Login/Signup page tests', () => {
    before(async () => {
        // Account to use in the Test case 2
        await createAccount(usersData.user2);
    });

    beforeEach(async () => {
        await pages('home').open();
    });

    it('Test case 1: Register user', async () => {
        await expect(browser).toHaveTitle('Automation Exercise');
        await pages('home').topbar.loginBtn.click();

        const signupFormTitle = await pages('login').signupForm.title;
        await expect(signupFormTitle).toHaveText('New User Signup!');
        await expect(signupFormTitle).toBeDisplayed();

        const userInfo = usersData.user1;
        await pages('login').setSignupValues(userInfo.username, userInfo.email);
        await pages('login').signupForm.signupBtn.click();

        const accountInformationFormTitle = await pages('signup').accountInformationForm.title;
        await expect(accountInformationFormTitle).toHaveText('ENTER ACCOUNT INFORMATION');
        await expect(accountInformationFormTitle).toBeDisplayed();

        await pages('signup').setAccountInformationValues(userInfo.gender, userInfo.username, userInfo.email, userInfo.password, userInfo.birthDay, userInfo.birthMonth, userInfo.birthYear);
        await pages('signup').accountInformationForm.newsletterCheckbox.click();
        await pages('signup').accountInformationForm.offersCheckbox.click();
        await pages('signup').setAddressInformationValues(userInfo.firstName, userInfo.lastName, userInfo.company, userInfo.address1, userInfo.address2, userInfo.country, userInfo.state, userInfo.city, userInfo.zipcode, userInfo.mobileNumber);
        await pages('signup').accountInformationForm.createAccountBtn.click();

        const accountCreatedTitle = await pages('accountcreated').accountStatusMessageComponent.title;
        await expect(accountCreatedTitle).toHaveText('ACCOUNT CREATED!');
        await expect(accountCreatedTitle).toBeDisplayed();
        await pages('accountcreated').accountStatusMessageComponent.continueBtn.click();

        const loggedMessageItem = await pages('home').topbar.loggedMessageItem;
        await expect(loggedMessageItem).toHaveText(`Logged in as ${userInfo.username}`);
        await expect(loggedMessageItem).toBeDisplayed();

        await pages('home').topbar.deleteAccountBtn.click();

        const accountDeletedTitle = await pages('accountdeleted').accountStatusMessageComponent.title;
        await expect(accountDeletedTitle).toHaveText('ACCOUNT DELETED!');
        await expect(accountDeletedTitle).toBeDisplayed();
        await pages('accountdeleted').accountStatusMessageComponent.continueBtn.click();
    });

    it('Test case 2: Login user with correct email and password', async () => {
        await expect(browser).toHaveTitle('Automation Exercise');
        await pages('home').topbar.loginBtn.click();

        const loginFormTitle = await pages('login').loginForm.title;
        await expect(loginFormTitle).toHaveText('Login to your account');
        await expect(loginFormTitle).toBeDisplayed();

        const userInfo = usersData.user2;
        await pages('login').setLoginValues(userInfo.email, userInfo.password);
        await pages('login').loginForm.loginBtn.click();

        const loggedMessageItem = await pages('home').topbar.loggedMessageItem;
        await expect(loggedMessageItem).toHaveText(`Logged in as ${userInfo.username}`);
        await expect(loggedMessageItem).toBeDisplayed();

        await pages('home').topbar.deleteAccountBtn.click();

        const accountDeletedTitle = await pages('accountdeleted').accountStatusMessageComponent.title;
        await expect(accountDeletedTitle).toHaveText('ACCOUNT DELETED!');
        await expect(accountDeletedTitle).toBeDisplayed();
    });

    it('Test case 3: Login user with incorrect email and password', async () => {
        await expect(browser).toHaveTitle('Automation Exercise');
        await pages('home').topbar.loginBtn.click();

        const loginFormTitle = await pages('login').loginForm.title;
        await expect(loginFormTitle).toHaveText('Login to your account');
        await expect(loginFormTitle).toBeDisplayed();

        const userInfo = usersData.user3;
        await pages('login').setLoginValues(userInfo.email, userInfo.password);
        await pages('login').loginForm.loginBtn.click();

        const incorrectEmailMsg = await pages('login').loginForm.incorrectEmailMsg;
        await expect(incorrectEmailMsg).toHaveText('Your email or password is incorrect!');
        await expect(incorrectEmailMsg).toBeDisplayed();
    });

    it('Test case 4: Logout user', async () => {
        await expect(browser).toHaveTitle('Automation Exercise');
        await pages('home').topbar.loginBtn.click();

        const loginFormTitle = await pages('login').loginForm.title;
        await expect(loginFormTitle).toHaveText('Login to your account');
        await expect(loginFormTitle).toBeDisplayed();

        const userInfo = usersData.user4;
        await pages('login').setLoginValues(userInfo.email, userInfo.password);
        await pages('login').loginForm.loginBtn.click();

        const loggedMessageItem = await pages('home').topbar.loggedMessageItem;
        await expect(loggedMessageItem).toHaveText(`Logged in as ${userInfo.username}`);
        await expect(loggedMessageItem).toBeDisplayed();

        await pages('home').topbar.logoutBtn.click();
        await expect(browser).toHaveTitle('Automation Exercise - Signup / Login');
    });

    it('Test case 5: Register user with existing email', async () => {
        await expect(browser).toHaveTitle('Automation Exercise');
        await pages('home').topbar.loginBtn.click();

        const signupFormTitle = await pages('login').signupForm.title;
        await expect(signupFormTitle).toHaveText('New User Signup!');
        await expect(signupFormTitle).toBeDisplayed();

        const userInfo = usersData.user4;
        await pages('login').setSignupValues(userInfo.username, userInfo.email);
        await pages('login').signupForm.signupBtn.click();

        const registeredEmailMsg = await pages('login').signupForm.registeredEmailMsg;
        await expect(registeredEmailMsg).toHaveText('Email Address already exist!');
        await expect(registeredEmailMsg).toBeDisplayed();
    });
});