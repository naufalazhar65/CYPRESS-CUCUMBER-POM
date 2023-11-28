class EditUserPage {
    enterURL() {
        cy.visit('/index.php?route=account/login');
        cy.get('#input-email').type('naufalazhar65@gmail.com');
        cy.get('#input-password').type('naufal354');
        cy.get('form > .btn').click();
        cy.visit('/index.php?route=account/edit');
    }

    verifyURL () {
        cy.url().should('include', '/edit');
        cy.title().should('eq', 'My Account Information')
    }

    updateProfile(firstName, lastName, email, telephone) {
        cy.get('#input-firstname').clear().type(firstName).should('have.value', firstName);
        cy.get('#input-lastname').clear().type(lastName).should('have.value', lastName);
        cy.get('#input-email').clear().type(email).should('have.value', email);
        cy.get('#input-telephone').clear().type(telephone).should('have.value', telephone);
    }

    clickContinueButton() {
        cy.get('input[value="Continue"]').click();
    }

    verifySuccessMessage() {
        cy.contains('Success: Your account has been successfully updated.').should('be.visible');
        cy.visit('/index.php?route=account/edit');

    }

    verifyUpdatedUserInfoOnDashboard(firstName, lastName, email, telephone) {
        cy.get('#input-firstname').should('have.value', firstName);
        cy.get('#input-lastname').should('have.value', lastName);
        cy.get('#input-email').should('have.value', email);
        cy.get('#input-telephone').should('have.value', telephone);
    }
}

const editUserPage = new EditUserPage();
export default editUserPage;
