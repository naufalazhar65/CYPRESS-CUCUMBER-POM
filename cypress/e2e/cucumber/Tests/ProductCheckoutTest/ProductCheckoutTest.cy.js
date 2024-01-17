/// <reference types="cypress" />
require('cypress-xpath');

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import productCheckoutPage from '../../Pages/ProductCheckoutPage/ProductCheckoutPage.cy'

Given('the user is on the home page', () => {
	productCheckoutPage.enterURL()
})

When('the user adds a product to the cart', () => {
	productCheckoutPage.addProductToCart()
})

And('the user proceeds to checkout', () => {
	productCheckoutPage.proceedToCheckout()
})

Then('the user should be on the checkout page', () => {
	productCheckoutPage.unCheckShippingNew()
	productCheckoutPage.verifyCheckoutPage()
})

And('the user completes the checkout process', (datatable) => {
	// completeCheckoutProcess for add new address
	datatable.hashes().forEach((element) => {
		// productCheckoutPage.completeCheckoutProcess(
		// 	element.Telephone,
		// 	element.FirstName,
		// 	element.LastName,
		// 	element.Company,
		// 	element.Address1,
		// 	element.Address2,
		// 	element.City,
		// 	element.PostCode,
		//     element.Comment,
		// )


		//  chooseAddress for an existing address
		productCheckoutPage.chooseAddress()
		//=================================================================
		productCheckoutPage.checkTermsConditions()
		productCheckoutPage.checkShippingNew()
		productCheckoutPage.clickContinueButton()
	})
})

And('the user should see a confirmation order', () => {
	productCheckoutPage.verifyConfirmationOrder()
})

And('the user should see the success message {string}',(msg) => {
	productCheckoutPage.verifyCheckoutSuccessfully(msg)
})
