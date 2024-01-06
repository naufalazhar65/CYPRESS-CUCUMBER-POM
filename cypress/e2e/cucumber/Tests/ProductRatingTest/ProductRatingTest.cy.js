/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import productRatingPage from '../../Pages/ProductRatingPage/ProductRatingPage.cy'

Given('the user is on the product page', () => {
	productRatingPage.enterURL()
})

When('the user rates the product with {int} stars', () => {
	productRatingPage.addProductRating()
})

And('provides a review with comments', () => {
	productRatingPage.addProductComments()
})

And('submits the rating and review', () => {
	productRatingPage.submitRatingAndReview()
})

Then('the rating and review should be visible on the product page', () => {
	productRatingPage.verifyRatingAndReview()
})
