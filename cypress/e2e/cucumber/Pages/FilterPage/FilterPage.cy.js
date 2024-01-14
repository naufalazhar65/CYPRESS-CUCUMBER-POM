class FilterPage {
	enterURL() {
		cy.visit('index.php?route=product/search&search=')
	}

	filterProductsByCategory(category) {
		cy.get('.col-sm-4').find('.custom-select').select(category)
		cy.get('#button-search').click()
		cy.wait(3000)
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
			10,
		)

		this.setSliderPercentage(
			'//body/div[1]/div[6]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/span[2]',
			36,
		)
	}

	verifyFilteredProducts(category, minPrice, maxPrice) {
		cy.get('.col-sm-4')
			.find('.custom-select')
			.should('have.value', category)

		cy.get('[name="mz_fp[min]"]').should('have.value', minPrice)
		cy.get('[name="mz_fp[max]"]').should('have.value', maxPrice)
	}
}

const filterPage = new FilterPage()
export default filterPage
