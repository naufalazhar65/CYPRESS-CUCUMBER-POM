class HomePage {
	enterURL() {
		cy.visit('/index.php?route=common/home')
		cy.url().should('include', '/home')
		cy.wait(2000)
	}

	verifySiteLogo() {
		cy.get('#entry_217821 > .figure > a > .figure-img').should('be.visible')
	}

	verifyNavigationMenu() {
		cy.get('.navbar-nav')
			.should('be.visible')
			.find('li')
			.and('contain', 'Home')
			.and('contain', 'Special')
			.and('contain', 'Blog')
			.and('contain', 'Mega Menu')
			.and('contain', 'AddOns')
			.and('contain', 'My account')
	}

	verifyNavbarVertical() {
		cy.contains('Shop by Category')
			.should('be.visible')
			.click({ force: true })
		cy.contains('Top categories ').should('be.visible')
		cy.get('.vertical')
			.should('be.visible')
			.find('.nav-item')
			.and('contain', 'Components')
			.and('contain', 'Cameras')
			.and('contain', 'Phone, Tablets & Ipod')
			.and('contain', 'Software')
			.and('contain', 'MP3 Players')
			.and('contain', 'Laptops & Notebooks')
			.and('contain', 'Desktops and Monitors')
			.and('contain', 'Printers & Scanners')
			.and('contain', 'Mice and Trackballs')
			.and('contain', 'Fashion and Accessories')
			.and('contain', 'Beauty and Saloon')
			.and('contain', 'Autoparts and Accessories')
			.and('contain', 'Washing machine')
			.and('contain', 'Gaming consoles')
			.and('contain', 'Air conditioner')
			.and('contain', 'Web Cameras')
	}

	verifyFeaturedProducts() {
		cy.get('.product-thumb').should('have.length.greaterThan', 0)
	}

	verifyFooter() {
		// Implementation for verifying the footer
	}

	clickLoginLink() {
		cy.get('.mz-sub-menu-96.dropdown-menu')
			.find('li')
			.contains('Login')
			.click({ force: true })
	}

	verifyLoginPageRedirect() {
		cy.url().should('include', 'account/login')
	}

	verifyLoginForm() {
		cy.get('#account-login').should('be.visible')
	}

	clickFeaturedProduct() {
		cy.get('.product-thumb').eq(6).click()
	}

	verifyProductDetailsPageRedirect() {
		cy.url().should('include', 'product/product&')
		cy.title().should('eq', 'HTC Touch HD')
	}
	verifyProductDetails() {
		cy.get('.content-extra')
			.should('be.visible')
			.find('ul li')
			.and('contain', 'Brand:')
			.and('contain', 'HTC')
			.and('contain', 'Viewed:')
			.and('contain', 'Availability:')
			.and('contain', 'In Stock')

		cy.get('#entry_216807 > .entry-section').should('be.visible')
		cy.get('.h3').should('be.visible').and('have.text', 'HTC Touch HD')
		cy.get(
			'#image-gallery-216811 > .image-thumb > .thumbnail > .img-fluid',
		).should('be.visible')
		cy.get('.price-new').should('be.visible').and('have.text', '$146.00')
	}

	//==============================================================================================================================

	enterSearchQuery(query) {
		cy.get(
			'#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input',
		).type(query)
		cy.get('.dropdown-menu')
			.should('have.length', 7)
			.should('contain', 'HTC Touch HD')
	}

	clickSearchButton() {
		cy.get('.type-text').click()
		cy.wait(2000)
	}

	verifySearchResults() {
		cy.get('.product-layout')
			.should('have.length', 8)
			.should('contain', 'HTC Touch HD')
	}

	navigateToProductFromSearchResults() {
		cy.get('.product-layout').eq(2).click()
		cy.get('.h3').should('be.visible').and('have.text', 'HTC Touch HD')
		cy.get(
			'#image-gallery-216811 > .image-thumb > .thumbnail > .img-fluid',
		).should('be.visible')
		cy.get('.price-new').should('be.visible').and('have.text', '$146.00')
	}

	//==============================================================================================================================

	clickShoppingCartIcon() {
		cy.visit('/index.php?route=account/login')
		cy.get('#input-email').type('naufalazhar65@gmail.com')
		cy.get('#input-password').type('naufal354')
		cy.get('form > .btn').click()

		// for add product to cart
		// cy.get('.product-action').find('.cart-107').first().click({ force: true });

		cy.get('#entry_217825 > .cart > .cart-icon')
			.find('.cart-item-total')
			.should('contain', '5')
		cy.get('#entry_217825 > .cart > .cart-icon').click({ force: true })
		cy.contains('Cart').should('be.visible')
		cy.contains('Sub-Total:').should('be.visible')
		cy.contains('Total').should('be.visible')
		cy.get(':nth-child(2) > .text-right > strong').should('be.visible')
		cy.get('#entry_217850 > .icon-right').should('have.text', '  Edit cart')
		cy.get('#entry_217851 > .icon-right').should('have.text', '  Checkout')
		cy.get('#entry_217850 > .icon-right').click()
		cy.wait(2000)
	}

	verifyShoppingCartPageRedirect() {
		/// cy.get('.product-action').find('.cart-107').first().click({ force: true });
		cy.get('#checkout-cart').should('be.visible')
		cy.title().should('eq', 'Shopping Cart')
		cy.url().should('include', '/cart')
	}

	verifyAddedProductsInCart() {
		cy.get('.row')
			.should('be.visible')
			.find('h1')
			.and('contain', 'Shopping Cart')

		cy.get('.table-responsive')
			.find('thead tr')
			.should('contain', 'Image')
			.and('contain', 'Product Name')
			.and('contain', 'Model')
			.and('contain', 'Quantity')
			.and('contain', 'Unit Price')
			.and('contain', 'Total')

		cy.get('.table-bordered')
			.should('be.visible')
			.find('tbody')
			.and('have.length', 2)
			.and('contain', 'HTC Touch HD')
			.and('contain', 'iMac')

		cy.get('#accordion')
			.should('be.visible')
			.find('h5')
			.and('have.length', 3)
			.and('contain', 'Use Coupon Code')
			.and('contain', 'Estimate Shipping & Taxes')
			.and('contain', 'Use Gift Certificate ')
	}
}

const homePage = new HomePage()
export default homePage
