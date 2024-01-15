Feature: Product Comparison
    As a user, I want to compare multiple products.

    Background:
        Given the user is on the home page
        When the user adds products the comparison list
        And the user is on the product comparison page

    @smoke
    Scenario: Compare Products
        Then the user should see compared products in the comparison table

    Scenario: Remove Product from Comparison
        When the user removes a product from the comparison list
        Then the user should see the updated comparison table without the removed product