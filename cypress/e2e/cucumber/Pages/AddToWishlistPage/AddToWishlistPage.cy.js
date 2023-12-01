class AddToWishlistPage {
	enterURL() {
		cy.visit('/index.php?route=account/login')
		cy.get('#input-email').type('naufalazhar65@gmail.com')
		cy.get('#input-password').type('naufal354')
		cy.get('form > .btn').click()
		cy.visit('/index.php?route=common/home')
	}

	selectProduct() {
		cy.get('#mz-product-tab-37213259-0')
			.find('.product-thumb')
			.should('be.visible')
			.and('have.length', 10)
			.eq(5)
			.and('contain', 'HTC Touch HD')
		cy.get('.product-action').should('be.visible').as('selectProduct')
	}

	addToWishlist() {
		cy.get('@selectProduct')
			.find('.wishlist-103')
			.first()
			.click({ force: true })
		cy.get('.toast-body')
			.should('be.visible')
			.find('p')
			.and('contain', 'Success: You have added')
		cy.get('.toast-body > .btn').click({ force: true })
	}

	verifyWishlistPage() {
		cy.visit('/index.php?route=account/wishlist')
		cy.url().should('include', '/wishlist')
		cy.get('.table-responsive tbody')
			.should('have.length', 2)
			.as('addedProductName02')
	}

	verifyProductInWishlist() {
		cy.get('@addedProductName02')
			.find('tr')
			.eq(2)
			.should('contain', 'HTC Touch HD')
	}

	removeProduct() {
		cy.get('.text-danger > .fa').click({ force: true })
	}

	verifyWishlistIsEmpty() {
		cy.get('.table-responsive tbody').should('not.be.visible')
	}

	verifyRemoveMessage() {
		cy.get('#account-wishlist > .alert')
			.should('be.visible')
			.and('include.text', 'Success: You have modified your wish list!')
	}
}

const addToWishlistPage = new AddToWishlistPage()
export default addToWishlistPage
