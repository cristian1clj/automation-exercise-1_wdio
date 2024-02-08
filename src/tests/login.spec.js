const { pages } = require('./../po');

const testData = require('./testData.json');

describe('Login/Signup page tests', () => {
    beforeEach(async () => {
        await pages('home').open();
    });

    it('Test case 1: Register user', async () => {
        await expect(browser).toHaveTitle('Automation Exercise');
        await pages('home').topbar.loginBtn.click();

        const signupFormTitle = await pages('login').signupForm.title;
        await expect(signupFormTitle).toHaveText('New User Signup!');
        await expect(signupFormTitle).toBeDisplayed();

        await pages('login').setSignupValues(testData.user1.username, testData.user1.email);
        await pages('login').signupForm.signupBtn.click();

        const accountInformationFormTitle = await pages('signup').accountInformationForm.title;
        await expect(accountInformationFormTitle).toHaveText('ENTER ACCOUNT INFORMATION');
        await expect(accountInformationFormTitle).toBeDisplayed();

        await pages('signup').setAccountInformationValues(testData.user1.gender, testData.user1.username, testData.user1.email, testData.user1.password, testData.user1.birthDay, testData.user1.birthMonth, testData.user1.birthYear);
        await pages('signup').accountInformationForm.newsletterCheckbox.click();
        await pages('signup').accountInformationForm.offersCheckbox.click();
        await pages('signup').setAddressInformationValues(testData.user1.firstName, testData.user1.lastName, testData.user1.company, testData.user1.address1, testData.user1.address2, testData.user1.country, testData.user1.state, testData.user1.city, testData.user1.zipcode, testData.user1.mobileNumber);
        await pages('signup').accountInformationForm.createAccountBtn.click();

        const accountCreatedTitle = await pages('accountcreated').accountStatusMessageComponent.title;
        await expect(accountCreatedTitle).toHaveText('ACCOUNT CREATED!');
        await expect(accountCreatedTitle).toBeDisplayed();
        await pages('accountcreated').accountStatusMessageComponent.continueBtn.click();

        const loggedMessageItem = await pages('home').topbar.loggedMessageItem;
        await expect(loggedMessageItem).toHaveText(`Logged in as ${testData.user1.username}`);
        await expect(loggedMessageItem).toBeDisplayed();

        await pages('home').topbar.deleteAccountBtn.click();

        const accountDeletedTitle = await pages('accountdeleted').accountStatusMessageComponent.title;
        await expect(accountDeletedTitle).toHaveText('ACCOUNT DELETED!');
        await expect(accountDeletedTitle).toBeDisplayed();
        await pages('accountdeleted').accountStatusMessageComponent.continueBtn.click();
    });
});