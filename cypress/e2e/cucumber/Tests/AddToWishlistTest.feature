Feature: Add to Wishlist
    As a user, I want to add and remove a product from my wishlist.

    Background:
        Given the user is on the home page

    @smoke
    Scenario: Add product to Wishlist
        When the user selects a product
        And adds the product to the wishlist
        Then the user should be redirected to the wishlist page
        And the user should see the added product in the wishlist

    Scenario: Remove product from Wishlist
        When the user is on the wishlist page
        And removes the product from the wishlist
        Then the product should be removed from the wishlist
        And a success message should be displayed
