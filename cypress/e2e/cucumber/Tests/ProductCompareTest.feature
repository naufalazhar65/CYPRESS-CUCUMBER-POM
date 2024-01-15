Feature: Product Comparison
    As a user, I want to compare multiple products.

    Background:
        Given the user is on the home page

    @smoke
    Scenario: Compare Products
        When the user adds products the comparison list
        And the user is on the product comparison page
        Then the user should see compared products in the comparison table
