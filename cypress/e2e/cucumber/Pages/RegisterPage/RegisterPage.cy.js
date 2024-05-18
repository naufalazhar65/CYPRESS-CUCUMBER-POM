class RegisterPage {
	enterURL() {
		cy.visit('/index.php?route=account/register')
		cy.title().should('eq', 'Register Account')

	}

	fillRegistrationForm(firstName, lastName, email, telephone, password, confirmPassword,
	) {
		cy.get('#input-firstname').type(firstName)
		cy.get('#input-lastname').type(lastName)
		cy.get('#input-email').type(email)
		cy.get('#input-telephone').type(telephone)
		cy.get('#input-password').type(password)
		cy.get('#input-confirm').type(confirmPassword)
		return this
	}

	submitForm() {
		cy.get('#input-newsletter-yes').check({ force: true })
		cy.get('input[type="checkbox"]').check({ force: true })
		cy.get('input[value="Continue"]').click()
		return this
	}

	verifyErrorMessage(expectedError) {
        cy.get('#account-register').then(() => {
            cy.get('.text-danger, #account-register > .alert')
                .should('be.visible')
                .and('include.text', expectedError);
        });
        return this;
    }

	verifySuccessfulRegistration() {
		return cy.contains(' Your Account Has Been Created!')
	}
}

const registerPage = new RegisterPage()
export default registerPage
