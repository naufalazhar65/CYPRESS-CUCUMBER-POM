// FilterTest.cy.js

/// <reference types="cypress" />
require('cypress-xpath');

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import filterPage from '../../Pages/FilterPage/FilterPage.cy';

Given('the user is logged in and on the product filter page', () => {
    filterPage.enterURL();
});

When('the user filters products by category {string}', (category) => {
    filterPage.filterProductsByCategory(category);
});

And('filters products by price range {int} to {int}', (minPrice, maxPrice) => {
    filterPage.filterProductsByPriceRange(minPrice, maxPrice);
});

Then('the user should see filtered products with category {string} and price range {int} to {int}', (category, minPrice, maxPrice) => {
    filterPage.verifyFilteredProducts(category, minPrice, maxPrice);
});
