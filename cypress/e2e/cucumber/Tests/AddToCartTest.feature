Feature: Add Product to Cart
  As a user, I want to add a product to the cart and verify its presence.

  Background:
    Given the user is on the home page

  @smoke
  Scenario: Add Product to Cart
    When the user adds a product to the cart
    Then the user should see the added product in the cart
