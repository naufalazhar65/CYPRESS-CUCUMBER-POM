/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import registerPage from '../../Pages/RegisterPage/RegisterPage.cy'

Given('the user is on the registration page', () => {
	registerPage.enterURL()
})

When('the user registers with the following details:', (datatable) => {
	datatable.hashes().forEach((element) => {
		registerPage.fillRegistrationForm(
			element.FirstName,
			element.LastName,
			element.Email,
			element.Telephone,
			element.Password,
			element.ConfirmPassword,
		)
	})
})

And('user check the privacy policy box', () => {
	registerPage.checkBox();
})

And('user click the submit button', () => {
	registerPage.submitForm();
})

Then('the user should be redirected to the dashboard', () => {
	registerPage.verifySuccessfulRegistration()
})

Then('an error message should be displayed:', (dataTable) => {
    const expectedError = dataTable.hashes()[0].ErrorMessage;
    registerPage.verifyErrorMessage(expectedError);
});
