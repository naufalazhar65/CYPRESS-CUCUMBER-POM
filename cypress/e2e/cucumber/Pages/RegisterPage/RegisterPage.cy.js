class RegisterPage {
	enterURL() {
		cy.visit('/index.php?route=account/register')
	}

	enterRegistrationDetails(
		firstName,
		lastName,
		email,
		telephone,
		password,
		confirmPassword,
	) {
		cy.get('#input-firstname').type(firstName)
		cy.get('#input-lastname').type(lastName)
		cy.get('#input-email').type(email)
		cy.get('#input-telephone').type(telephone)
		cy.get('#input-password').type(password)
		cy.get('#input-confirm').type(confirmPassword)
		return this
	}

	clickRegisterButton() {
		cy.get('#input-newsletter-yes').check({ force: true })
		cy.get('input[type="checkbox"]').check({ force: true })
		cy.get('input[value="Continue"]').click()
		return this
	}

	verifyPageTitle() {
		return cy.title().should('eq', 'Register Account')
	}

	verifyErrorMessage() {
		cy.get('#account-register').then(($error) => {
			if (
				$error
					.text()
					.includes('Password confirmation does not match password!')
			) {
				cy.get('.text-danger')
					.should('be.visible')
					.and(
						'include.text',
						'Password confirmation does not match password!',
					)
			} else if (
				$error
					.text()
					.includes('Warning: E-Mail Address is already registered!')
			) {
				cy.get('#account-register > .alert')
					.should('be.visible')
					.and(
						'include.text',
						'Warning: E-Mail Address is already registered!',
					)
			} else {
				throw new Error('Unexpected error message!')
			}
		})
		return this
	}

	verifySuccessfulRegistration() {
		return cy.contains(' Your Account Has Been Created!')
	}
}

const registerPage = new RegisterPage()
export default registerPage
