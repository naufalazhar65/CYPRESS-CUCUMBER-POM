Feature: Home Page Test
    As a user, I want to verify elements and functionalities on the home page.
    
    Background:
        Given the user is on the home page

    # @sanity
    # Scenario: Verify Elements on Home Page
    #     Then the user should see the site logo 
    #     And the user should see the navigation menu
    #     And the user should see top products
    #     And the user should see the footer

    # @sanity
    # Scenario: Navigate to Login Page
    #     When the user clicks on the "Login" link
    #     Then the user should be redirected to the login page
    #     And the user should see the login form

    # @regression
    # Scenario: Navigate to Product Details Page
    #     When the user clicks on a featured product
    #     Then the user should be redirected to the product details page
    #     And the user should see product details

    @regression
    Scenario: Search for a Product
        When the user enters a search query
        And the user clicks the search button
        Then the user should see search results
        And the user should be able to navigate to a product from the search results

    # @regression
    # Scenario: View Shopping Cart
    #     When the user clicks on the shopping cart icon
    #     Then the user should be redirected to the shopping cart page
    #     And the user should see the added products in the cart
