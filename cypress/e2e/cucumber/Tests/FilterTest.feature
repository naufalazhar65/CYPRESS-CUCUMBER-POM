Feature: Filter Products
    As a user, I want to filter products based on category and price range.

    Background:
        Given the user is logged in and on the product filter page

    @smoke
    Scenario: Filter products by category and price range
        When the user filters products by category "18"
        And filters products by price range 380 to 800
        Then the user should see filtered products with category "18" and price range 380 to 800