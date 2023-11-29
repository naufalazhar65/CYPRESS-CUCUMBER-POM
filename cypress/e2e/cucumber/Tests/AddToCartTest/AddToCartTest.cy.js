/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import addToCartPage from '../../Pages/AddToCartPage/AddToCartPage.cy';

Given('the user is on the home page', () => {
    addToCartPage.verifyUserIsOnHomepage();
});

When('the user adds a product to the cart', () => {
    addToCartPage.addProductToCart();
});

Then('the user should see the added product in the cart', () => {
    addToCartPage.verifyProductInCart();
});
