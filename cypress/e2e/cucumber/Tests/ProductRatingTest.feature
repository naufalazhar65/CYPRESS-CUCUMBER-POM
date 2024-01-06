Feature: Product Rating
    As a user, I want to rate and review a product.

    Background:
        Given the user is on the product page

    Scenario: Add Product Rating
        When the user rates the product with 4 stars
        And provides a review with comments
        And submits the rating and review
        Then the rating and review should be visible on the product page
