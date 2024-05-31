class FilterPage {
	enterURL() {
		cy.visit('index.php?route=product/search&search=')
	}

	filterProductsByCategory(category) {
		cy.get('.col-sm-4').find('.custom-select').select(category)
		cy.get('#button-search').click()
		cy.wait(1000)
	}

	setMinPrice(minPrice) {
		cy.xpath('/html/body/div[1]/div[6]/div[1]/div[2]/div/div[2]/div[1]/div/div[2]/div[1]/div[2]/div/div[2]/input[1]')
			.invoke('val', minPrice)
			.as('minPrice')
	}

	setMaxPrice(maxPrice) {
		cy.xpath('/html/body/div[1]/div[6]/div[1]/div[2]/div/div[2]/div[1]/div/div[2]/div[1]/div[2]/div/div[2]/input[2]')
			.invoke('val', maxPrice)
			.as('maxPrice')
			.type('{enter}')
	}

	setSliderPercentage(sliderSelector, targetPercentage) {
		cy.xpath(sliderSelector)
			.first()
			.as('sliderHandle')
			.invoke('attr', 'style', `left: ${targetPercentage}%;`)
			.trigger('change')
		cy.get('@sliderHandle').should(
			'have.attr',
			'style',
			`left: ${targetPercentage}%;`,
		)
	}

	filterProductsByPriceRange() {
		this.setSliderPercentage(
			'//body/div[1]/div[6]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/span[1]',
			15.878,
		)

		this.setSliderPercentage(
			'//body/div[1]/div[6]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/span[2]',
			100,
		)
	}

	verifyFilteredProducts(category, minPrice, maxPrice) {
		cy.get('.col-sm-4')
			.find('.custom-select')
			.should('have.value', category)

		cy.get('@minPrice').should('have.value', minPrice)
		cy.get('@maxPrice').should('have.value', maxPrice)
	}
}

const filterPage = new FilterPage()
export default filterPage
