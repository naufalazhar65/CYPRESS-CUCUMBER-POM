/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import registerPage from '../../Pages/RegisterPage/RegisterPage.cy'

Given('the user is on the registration page', () => {
	registerPage.enterURL()
	registerPage.verifyPageTitle()
})

When('the user registers with the following details:', (datatable) => {
	datatable.hashes().forEach((element) => {
		registerPage.enterRegistrationDetails(
			element.FirstName,
			element.LastName,
			element.Email,
			element.Telephone,
			element.Password,
			element.ConfirmPassword,
		)
		registerPage.clickRegisterButton()
	})
})

Then('the user should be redirected to the dashboard', () => {
	registerPage.verifySuccessfulRegistration()
})

Then('an error message should be displayed', () => {
	registerPage.verifyErrorMessage()
})
