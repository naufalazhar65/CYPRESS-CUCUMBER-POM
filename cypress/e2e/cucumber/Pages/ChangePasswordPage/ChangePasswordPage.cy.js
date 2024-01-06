class ChangePasswordPage {
	loginURL() {
		cy.visit('/index.php?route=account/login')
		cy.get('#input-email').type('naufalazhar354@gmail.com')
		cy.get('#input-password').type('naufal21')
		cy.get('form > .btn').click()
	}

	enterURL() {
		cy.visit('/index.php?route=account/password')
		cy.url().should('include', 'account/password')
		cy.wait(2000)
	}

	changePassword(newPassword, confirmNewPassword) {
		cy.get('#input-password')
			.type(newPassword)
			.should('have.value', newPassword)
		cy.get('#input-confirm')
			.type(confirmNewPassword)
			.should('have.value', confirmNewPassword)
	}

	clickContinueButton() {
		cy.get('input[value="Continue"]').click()
	}

	verifySuccessMessage() {
		cy.get('#account-account > .alert').should(
			'include.text',
			'Success: Your password has been successfully updated.',
		)
	}

	logout() {
		cy.get('.mz-sub-menu-96.dropdown-menu')
			.find('li')
			.contains('Logout')
			.click({ force: true })
		cy.contains('Account Logout').should('be.visible')
	}

	loginWithNewPassword() {
		cy.visit('/index.php?route=account/login')
		cy.get('#input-email').type('naufalazhar354@gmail.com')
		cy.get('#input-password').type('naufal22')
		cy.get('form > .btn').click()
	}
    
	verifyUserDirectedOnDashboard() {
		cy.url().should('include', '/account')
		cy.title().should('eq', 'My Account')
	}
}

const changePasswordPage = new ChangePasswordPage()
export default changePasswordPage
