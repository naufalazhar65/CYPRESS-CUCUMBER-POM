class AddToCartPage {
    verifyUserIsOnHomepage() {
        cy.visit('index.php?route=common/home');
        cy.url().should('include', '/home');
    }

    addProductToCart() {
        // cy.get('.product-thumb').eq(6).click();
        cy.get('.product-action').find('.cart-28').first().click({ force: true });
        cy.get('.product-action').find('.cart-28').first().click({ force: true });

    }

    verifyProductInCart() {
        cy.get('#entry_217825 > .cart > .cart-icon')
			.find('.cart-item-total')
			.should('contain', '2')
    }
}

const addToCartPage = new AddToCartPage();
export default addToCartPage;
