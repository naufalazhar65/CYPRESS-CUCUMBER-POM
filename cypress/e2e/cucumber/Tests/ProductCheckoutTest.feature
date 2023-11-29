Feature: Product Checkout

    Background:
        Given the user is on the home page

    Scenario: Checkout Product
        When the user adds a product to the cart
        And the user proceeds to checkout
        Then the user should be on the checkout page
        And the user completes the checkout process
            | Telephone | FirstName | LastName | Company    | Address1 | Address2 | City    | PostCode | Comment |
            | 123456    | Naufal    | Azhar    | Pt.mamkmur | jalan1   | jalan2   | jakarta | 1234     | hallo   |
        And the user should see a confirmation order
