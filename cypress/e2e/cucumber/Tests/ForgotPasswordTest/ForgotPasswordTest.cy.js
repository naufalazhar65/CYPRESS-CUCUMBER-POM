/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import forgotPasswordPage from '../../Pages/ForgotPasswordPage/ForgotPasswordPage.cy'

Given('the user is on the login page', () => {
	forgotPasswordPage.enterURL()
})

When('the user clicks on the "Forgot Password" link', () => {
	forgotPasswordPage.clickForgotPasswordLink()
})

Then('the user should be redirected to the forgot password page', () => {
	forgotPasswordPage.verifyPageUrl()
})

And('the user should see the "Forgot Your Password?" title', () => {
	forgotPasswordPage.verifyPageTitle()
})

When(
	'the user provides a valid email {string} for password recovery',
	(email) => {
		forgotPasswordPage.enterValidEmail(email)
	},
)

When(
	'the user provides an invalid email {string} for password recovery',
	(email) => {
		forgotPasswordPage.enterInvalidEmail(email)
	},
)

And('submits the password recovery form', () => {
	forgotPasswordPage.clickSubmitButton()
})

Then('a success message for password recovery should be displayed', () => {
	forgotPasswordPage.verifySuccessMessage()
})

Then('an error message for invalid email should be displayed', () => {
	forgotPasswordPage.verifyErrorMessage()
})
