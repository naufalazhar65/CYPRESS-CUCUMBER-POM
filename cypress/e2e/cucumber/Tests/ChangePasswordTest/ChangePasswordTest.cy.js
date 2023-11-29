/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import changePasswordPage from '../../Pages/ChangePasswordPage/ChangePasswordPage.cy'

Given('the user is logged in', () => {
	changePasswordPage.loginURL()
})

Given('the user is on the change password page', () => {
	changePasswordPage.enterURL()
})

When('the user enters the current password and sets a new password',
	(dataTable) => {
		const passwordDetails = dataTable.hashes()[0]
		changePasswordPage.changePassword(
			passwordDetails['NewPassword'],
			passwordDetails['ConfirmNewPassword'],
		)
	},
)

And('the user clicks the "Continue" button', () => {
	changePasswordPage.clickContinueButton()
})

Then('the user should see a success message', () => {
	changePasswordPage.verifySuccessMessage()
})

And('the user should be able to log in with the new password', () => {
	changePasswordPage.logout()
	changePasswordPage.loginWithNewPassword()
	changePasswordPage.verifyUserDirectedOnDashboard()
})
