/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import addToWishlistPage from '../../Pages/AddToWishlistPage/AddToWishlistPage.cy'

Given('the user is on the home page', () => {
	addToWishlistPage.enterURL()
})

When('the user selects a product', () => {
	addToWishlistPage.selectProduct()
})

And('adds the product to the wishlist', () => {
	addToWishlistPage.addToWishlist()
})

Then('the user should be redirected to the wishlist page', () => {
	addToWishlistPage.verifyWishlistPage()
})

And('the user should see the added product in the wishlist', () => {
	addToWishlistPage.verifyProductInWishlist()
})

When('the user is on the wishlist page', () => {
	addToWishlistPage.verifyWishlistPage()
})

And('removes the product from the wishlist', () => {
	addToWishlistPage.removeProduct()
})

Then('the product should be removed from the wishlist', () => {
	addToWishlistPage.verifyWishlistIsEmpty()
})

And('a success message should be displayed', () => {
	addToWishlistPage.verifyRemoveMessage()
})
