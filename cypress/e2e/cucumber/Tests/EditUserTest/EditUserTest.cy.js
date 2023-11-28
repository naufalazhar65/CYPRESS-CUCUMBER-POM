/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import editUserPage from '../../Pages/EditUserPage/EditUserPage.cy';

Given('the user is logged in', () => {
    editUserPage.enterURL();
});

And('the user is on the edit user page', () => {
    editUserPage.verifyURL();
});

When('the user updates their profile with the following details', (dataTable) => {
    const userDetails = dataTable.hashes()[0];
    editUserPage.updateProfile(
        userDetails['FirstName'],
        userDetails['LastName'],
        userDetails['Email'],
        userDetails['Telephone']
    );
});

And('the user clicks the "Continue" button', () => {
    editUserPage.clickContinueButton();
});

Then('the user should see a success message', () => {
    editUserPage.verifySuccessMessage();
});

And('the user details should be updated', (dataTable) => {
    const userDetails = dataTable.hashes()[0];
    editUserPage.verifyUpdatedUserInfoOnDashboard(
        userDetails['FirstName'],
        userDetails['LastName'],
        userDetails['Email'],
        userDetails['Telephone']
    );
});
