class AddressPage {
    enterURL() {
        cy.visit('/index.php?route=account/login');
        cy.get('#input-email').type('naufalazhar88@gmail.com');
        cy.get('#input-password').type('naufal354');
        cy.get('form > .btn').click();
        cy.visit('/index.php?route=account/address');
    }

    addNewAddress(firstName,lastName,company,address1,address2,city,postCode
        ) {
            cy.get('.float-right > .btn').click();
            cy.get('#input-firstname').type(firstName)
            cy.get('#input-lastname').type(lastName)
            cy.get('#input-company').type(company)
            cy.get('#input-address-1').type(address1)
            cy.get('#input-address-2').type(address2)
            cy.get('#input-city').type(city)
            cy.get('#input-postcode').type(postCode)
            cy.get('#input-country')
                .select('100')
                .should('have.value', '100')
                .and('contain', 'Indonesia')
            cy.get('#input-zone')
                .select('1515')
                .should('have.value', '1515')
                .and('contain', 'Jawa Barat')
            // cy.get('input[value="1"]').check({ force: true });
            cy.get('.float-right > .btn').click();
            return this
        }
    
    verifyAddressList() {
        cy.get('.table-responsive').find('tbody tr').should('be.visible').and('have.length', 2)
        }

    editAddress(firstName,lastName,company,editAddress1,address2,city,postCode) {
        cy.get(':nth-child(1) > .text-right > .btn-info').click()
        cy.get('#input-firstname').clear().type(firstName)
        cy.get('#input-lastname').clear().type(lastName)
        cy.get('#input-company').clear().type(company)
        cy.get('#input-address-1').clear().type(editAddress1)
        cy.get('#input-address-2').clear().type(address2)
        cy.get('#input-city').clear().type(city)
        cy.get('#input-postcode').clear().type(postCode)
        cy.get('#input-country')
            .select('100')
            .should('have.value', '100')
            .and('contain', 'Indonesia')
        cy.get('#input-zone')
            .select('1515')
            .should('have.value', '1515')
            .and('contain', 'Jawa Barat')
        // cy.get('input[value="1"]').check({ force: true });
        return this
    }

    clickContinue() {
        cy.get('.float-right > .btn').click()
    }

    verifyUserAddressEdited(firstName,lastName,company,editAddress1,address2,city,postCode) {
        cy.get(':nth-child(1) > .text-right > .btn-info').click()
        cy.get('#input-address-1').should('have.value', editAddress1);
    }

    deleteAddress() {
        cy.get(':nth-child(1) > .text-right > .btn-danger').click()
    }

    verifyAddressDeleted() {
        cy.get('.table-responsive').find('tbody tr').should('be.visible').and('have.length', 1)
        cy.get('#account-address > .alert')
            .should('be.visible')
            .and('include.text',
                 'Your address has been successfully deleted')
    }
}

const addressPage = new AddressPage();
export default addressPage;
