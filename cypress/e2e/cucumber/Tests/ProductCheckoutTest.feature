Feature: Product Checkout
    As a user, I want to add a product to the cart and complete the checkout process.

    Background:
        Given the user is on the home page

    @smoke
    Scenario: Checkout Product
        When the user adds a product to the cart
        And the user proceeds to checkout
        Then the user should be on the checkout page
        And the user completes the checkout process
            | Telephone | FirstName | LastName | Company    | Address1 | Address2 | City    | PostCode | Comment |
            | 123456    | Naufal    | Azhar    | Pt.mamkmur | jalan1   | jalan2   | jakarta | 1234     | hallo   |
        And the user should see a confirmation order
        # And the user should see the success message "Your order has been placed successfully!"

