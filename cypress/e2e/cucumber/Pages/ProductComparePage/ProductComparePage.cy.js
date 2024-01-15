class ProductComparePage {
    
    enterURL() {
        cy.visit('index.php?route=common/home')
    }

    addProductToCompare() {
        // PRODUCT 1
        cy.xpath("//div[@aria-label='1 / 24']//button[@title='Compare this Product']").scrollIntoView().click({ force: true })
        cy.get('.d-flex').find('p').should('be.visible').and('contain', 'Success: You have added ')
        cy.get('.toast-body').find('.btn').first().should('be.visible').and('contain', 'Product Compare (1) ')

        cy.wait(2000)

        // PRODUCT 2
        cy.xpath("//div[@aria-label='2 / 24']//button[@title='Compare this Product']").click({ force: true });
        cy.get('.d-flex').find('p').should('be.visible').and('contain', 'Success: You have added ')
        cy.get('.toast-body').find('.btn').eq(1).should('be.visible').and('contain', 'Product Compare (2) ')

    }

    comparePage() {
        cy.get('.toast-body').first().find('.btn').click()
    }

    verifyComparedProducts() {
        cy.get('#content > .table').should('be.visible')
        cy.get('tbody tr').find('td').should('be.visible').and('have.length', '2')
    }
}

const productComparePage = new ProductComparePage();
export default productComparePage;
