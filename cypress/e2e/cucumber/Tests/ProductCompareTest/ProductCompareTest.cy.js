/// <reference types="cypress" />
require('cypress-xpath');

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import productComparePage from '../../Pages/ProductComparePage/ProductComparePage.cy';

Given('the user is on the home page', () => {
    productComparePage.enterURL();
});

When('the user adds products the comparison list', () => {
    productComparePage.addProductToCompare();
});

And('the user is on the product comparison page', () => {
    productComparePage.comparePage()
});

Then('the user should see compared products in the comparison table', () => {
    productComparePage.verifyComparedProducts();
});
