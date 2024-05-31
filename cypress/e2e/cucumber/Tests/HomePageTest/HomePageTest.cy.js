/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import homePage from '../../Pages/HomePage/HomePage.cy'

Given('the user is on the home page', () => {
	homePage.enterURL()
})

// Scenario: Verify Elements on Home Page
Then('the user should see the site logo', () => {
	homePage.verifySiteLogo()
})

And('the user should see the navigation menu', () => {
	homePage.verifyNavigationMenu()
	homePage.verifyNavbarVertical()
	homePage.closeNavbarVertical()
})

And('the user should see top products', () => {
	homePage.verifyTopProducts()
})

And('the user should see the footer', () => {
	homePage.verifyFooter()
})

// Scenario: Navigate to Login Page
When('the user clicks on the "Login" link', () => {
	homePage.clickLoginLink()
})

Then('the user should be redirected to the login page', () => {
	homePage.verifyLoginPageRedirect()
})

And('the user should see the login form', () => {
	homePage.verifyLoginForm()
})

// Scenario: Navigate to Product Details Page
When('the user clicks on a featured product', () => {
	homePage.clickFeaturedProduct()
})

Then('the user should be redirected to the product details page', () => {
	homePage.verifyProductDetailsPageRedirect()
})

And('the user should see product details', () => {
	homePage.verifyProductDetails()
})

// Scenario: Search for a Product
When('the user enters a search query', () => {
	homePage.enterSearchQuery('HTC Touch HD')
})

And('the user clicks the search button', () => {
	homePage.clickSearchButton()
})

Then('the user should see search results', () => {
	homePage.verifySearchResults()
})

And('the user should be able to navigate to a product from the search results', () => {
	homePage.navigateToProductFromSearchResults()
})

// Scenario: View Shopping Cart
When('the user clicks on the shopping cart icon', () => {
	homePage.clickShoppingCartIcon()
})

Then('the user should be redirected to the shopping cart page', () => {
	homePage.verifyShoppingCartPageRedirect()
})

And('the user should see the added products in the cart', () => {
	homePage.verifyAddedProductsInCart()
})
