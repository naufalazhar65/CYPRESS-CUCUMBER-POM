class LoginPage {
	enterURL() {
		cy.visit('/index.php?route=account/login')
	}

	enterUserNamePassword(email, password) {
		cy.get('[id="input-email"]').type(email)
		cy.get('#input-password').type(password)
		return this
	}

	clickSubmitButton() {
		cy.get('form > .btn').click()
		return this
	}

	verifyPageTitle() {
		return cy.title().should('eq', 'My Account')
	}

	verifyPageUrl() {
		return cy.url().should('include', '/account')
	}

	verifyErrorMessage() {
		return cy
			.get('#account-login > .alert')
			.should('be.visible')
			.then(($alert) => {
				const alertText = $alert.text()

				if (
					alertText.includes(
						'No match for E-Mail Address and/or Password',
					)
				) {
					expect(alertText).to.equal(
						' Warning: No match for E-Mail Address and/or Password.',
					)
				} else if (
					alertText.includes(
						'Your account has exceeded allowed number of login attempts',
					)
				) {
					expect(alertText).to.equal(
						' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.',
					)
				} else {
					throw new Error('Unexpected error message: ' + alertText)
				}
			})
	}
}

const login = new LoginPage()
export default login
