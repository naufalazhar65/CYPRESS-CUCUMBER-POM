class ProductRatingPage {
    
	enterURL() {
		cy.visit('/index.php?route=product/product&product_id=28')
	}

	addProductRating() {
		cy.get('.start-form-check')
			.find('input')
			.should('have.length', 6)
			.eq(1)
			.click({ force: true })
	}

	addProductComments() {
		cy.get('#input-name').should('be.visible').clear().type('Naufal Azhar')
		cy.get('#input-review')
			.should('be.visible')
			.type('This is a great producttttttttttttttttttttttttttttt!')
	}

	submitRatingAndReview() {
		cy.get('#button-review').click()
	}

	verifyRatingAndReview() {
		cy.get('.alert-success')
			.should('be.visible')
			.and(
				'have.text',
				' Thank you for your review. It has been submitted to the webmaster for approval.',
			)
	}
}

const productRatingPage = new ProductRatingPage()
export default productRatingPage
