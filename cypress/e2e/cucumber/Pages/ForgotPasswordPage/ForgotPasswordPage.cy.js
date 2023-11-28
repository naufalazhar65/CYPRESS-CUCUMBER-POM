class ForgotPasswordPage {
	enterURL() {
		cy.visit('/index.php?route=account/login')
	}
	clickForgotPasswordLink() {
		cy.contains('Forgotten Password').click()
	}

	verifyPageUrl() {
		cy.url().should('include', '/forgotten')
	}

	verifyPageTitle() {
		cy.title().should('eq', 'Forgot Your Password?')
	}

	enterValidEmail(email) {
		cy.get('#input-email').type(email).and('have.value', email)
	}

	enterInvalidEmail(email) {
		cy.get('#input-email').type(email).and('have.value', email)
	}

	clickSubmitButton() {
		cy.get('.float-right > .btn').should('be.visible').click()
	}

	verifySuccessMessage() {
		cy.get('#account-login > .alert')
			.should('be.visible')
			.and(
				'include.text',
				'An email with a confirmation link has been sent your email address.',
			)
	}

	verifyErrorMessage() {
		cy.get('#account-forgotten > .alert')
			.should('be.visible')
			.and(
				'include.text',
				'Warning: The E-Mail Address was not found in our records, please try again!',
			)
	}
}

const forgotPasswordPage = new ForgotPasswordPage()
export default forgotPasswordPage
