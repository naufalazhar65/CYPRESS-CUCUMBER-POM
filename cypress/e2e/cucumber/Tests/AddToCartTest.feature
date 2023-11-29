Feature: Add Product to Cart

  Background:
    Given the user is on the home page

  Scenario: Add Product to Cart
    When the user adds a product to the cart
    Then the user should see the added product in the cart
