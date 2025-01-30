class RegisterPage {
	enterURL() {
		cy.visit('/index.php?route=account/register')
		cy.title().should('eq', 'Register Account')
	}

	fillRegistrationForm(firstName, lastName, email, telephone, password, confirmPassword) {
		cy.get('#input-firstname').type(firstName).should('have.value', firstName)
		cy.get('#input-lastname').type(lastName).should('have.value', lastName)
		cy.get('#input-email').type(email).should('have.value', email)
		cy.get('#input-telephone').type(telephone).should('have.value', telephone)
		cy.get('#input-password').type(password).should('have.value', password)
		cy.get('#input-confirm').type(confirmPassword).should('have.value', confirmPassword)
		return this
	}
	
	checkBox() {
		cy.get('#input-newsletter-yes').check({ force: true }).should('be.checked')
		cy.get('input[type="checkbox"]').check({ force: true }).should('be.checked')
	}

	submitForm() {
		cy.get('input[value="Continue"]').click()
	}
	
	verifySuccessfulRegistration() {
		return cy.contains('Your Account Has Been Created!')
	}
	
	verifyErrorMessage(expectedError) {
		cy.get('#account-register').then($register => {
			if ($register.length) {
				cy.get('.text-danger, #account-register > .alert')
					.should('be.visible')
					.and('include.text', expectedError)
			} else {
				cy.get('.alert-dismissible')
					.should('be.visible')
					.and('include.text', expectedError)
			}
		})
		return this
	}
}

const registerPage = new RegisterPage()
export default registerPage
