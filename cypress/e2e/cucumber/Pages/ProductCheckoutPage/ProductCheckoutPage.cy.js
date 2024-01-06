class ProductCheckoutPage {
	enterURL() {
		cy.visit('/index.php?route=account/login')
		cy.get('#input-email').type('naufalazhar65@gmail.com')
		cy.get('#input-password').type('naufal354')
		cy.get('form > .btn').click()
		cy.visit('/index.php?route=common/home')
	}
	addProductToCart() {
		// cy.get('.product-action').find('.cart-107').first().click({ force: true });
		cy.get('#entry_217825 > .cart > .cart-icon')
			.find('.cart-item-total')
			.should('contain', '1')
		cy.get('#entry_217825 > .cart > .cart-icon').click({ force: true })
		cy.contains('Cart').should('be.visible')
		cy.contains('Sub-Total:').should('be.visible')
		cy.contains('Total').should('be.visible')
		cy.get(':nth-child(2) > .text-right > strong').should('be.visible')
		cy.get('#entry_217850 > .icon-right').should('have.text', '  Edit cart')
		cy.get('#entry_217851 > .icon-right').should('have.text', '  Checkout')
		cy.get('#entry_217850 > .icon-right').click()
	}

	proceedToCheckout() {
		cy.get('.buttons.d-flex > .btn-primary').click()
	}

	unCheckShippingNew() {
		cy.get('input[type="checkbox"]').uncheck({ force: true })
		return this
	}
	verifyCheckoutPage() {
		cy.url().should('include', '/checkout')
		cy.title().should('eq', 'Checkout')
		// cy.get('input[type="checkbox"]').uncheck({ force: true })
		cy.get('#checkout-cart').should('be.visible')
		cy.get('#payment-address').should('be.visible')
		cy.get('#account-edit').should('be.visible')
		cy.get('#payment-method')
			.scrollIntoView()
			.should('be.visible')
			.and(
				'contain',
				'Please select the preferred payment method to use on this order.',
			)
		cy.get('#shipping-method')
			.scrollIntoView()
			.should('be.visible')
			.find('h4')
			.and(
				'contain',
				'Please select the preferred shipping method to use on this order.',
			)
		cy.get('#checkout-total')
			.should('be.visible')
			.find('tbody tr')
			.and('contain', 'Sub-Total:')
			.and('contain', 'Flat Shipping Rate:')
			// .and('contain', 'Eco Tax (-2.00):')
			// .and('contain', 'VAT (20%):')
			.and('contain', 'Total')

		cy.contains('Use Coupon Code').should('be.visible')
		cy.contains('Use Gift Certificate').should('be.visible')
		cy.contains('Shipping Address').scrollIntoView().should('be.visible')
		// cy.get('#shipping-new').scrollIntoView().should('be.visible')
		cy.get('.form-group')
			.should('be.visible')
			.and('contain', 'Add Comments About Your Order')
			.find('#input-comment')
			.should('be.visible')

		return this
	}

	// Test 1: for add new address
	completeCheckoutProcess(telephone,firstName,lastName,company,address1,address2,city,postCode,comment
	) {
		cy.get('#input-telephone').scrollIntoView().clear().type(telephone)
		cy.get('#input-payment-firstname').type(firstName)
		cy.get('#input-payment-lastname').type(lastName)
		cy.get('#input-payment-company').type(company)
		cy.get('#input-payment-address-1').type(address1)
		cy.get('#input-payment-address-2').type(address2)
		cy.get('#input-payment-city').type(city)
		cy.get('#input-payment-postcode').type(postCode)
		cy.get('#input-payment-country')
			.select('100')
			.should('have.value', '100')
			.and('contain', 'Indonesia')
		cy.get('#input-payment-zone')
			.select('1515')
			.should('have.value', '1515')
			.and('contain', 'Jawa Barat')
        cy.get('#input-comment').scrollIntoView().type(comment)
		return this
	}

	// Test 2 ; for an existing address
	chooseAddress() {
		cy.get('select[name="address_id"]')
			.select('3842')
			.should('have.value', '3842')
			.and('contain', 'Naufal Azhar, jalan1, jakarta, Jawa Barat, Indonesia');
			}
	

	checkTermsConditions() {
		cy.get('input[name="agree"]').scrollIntoView().check({ force: true })
	}

    checkShippingNew() {
		cy.get('input[name="shipping_address_same"]').scrollIntoView().check({ force: true })
		return this
	}

	clickContinueButton() {
		cy.get('#button-save').scrollIntoView().should('be.visible').click()
	}

	verifyConfirmationOrder() {
        cy.url().should('include', '/checkout')
        cy.title().should('eq', 'Confirm Order')
		cy.contains('Confirm Order').should('be.visible')
		cy.contains('Payment Address').should('be.visible')
		cy.contains('Shipping Address').should('be.visible')
		cy.contains('Shipping Method:').should('be.visible')
		cy.get('.table-responsive').should('be.visible').find('tbody').and('have.length', 2)

	}	
}

const productCheckoutPage = new ProductCheckoutPage()
export default productCheckoutPage
