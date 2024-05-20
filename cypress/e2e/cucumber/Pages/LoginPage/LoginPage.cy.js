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

	verifyErrorMessages(expectedErrors) {
		cy.get('#account-login').then(() => {
			expectedErrors.forEach((error) => {
				cy.get('body').then(($body) => {
					if ($body.text().includes(error)) {
						cy.contains('.alert', error).should('be.visible')
					}
				})
			})
		})
		return this
	}
}

const login = new LoginPage()
export default login
