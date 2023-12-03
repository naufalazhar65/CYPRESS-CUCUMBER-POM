Feature: Address Management
    As a user, I want to manage my addresses on the website.

    Background:
        Given the user is on the address management page

    Scenario: Add New Address
        When the user adds a new address with valid details
            | FirstName | LastName | Company    | Address1 | Address2 | City    | PostCode |
            | Naufal    | Azhar    | Pt.mamkmur | jalan1   | jalan2   | jakarta | 1234     |
        Then the new address should be visible in the address list

    Scenario: Edit Address
        When the user edits an existing address
            | FirstName | LastName | Company    | EditedAddress1 | Address2 | City    | PostCode |
            | Naufal    | Azhar    | Pt.mamkmur | tangerang      | jalan2   | jakarta | 1234     |
        And updates the address details
        Then the changes should be reflected in the address list
            | FirstName | LastName | Company    | EditedAddress1 | Address2 | City    | PostCode |
            | Naufal    | Azhar    | Pt.mamkmur | tangerang      | jalan2   | jakarta | 1234     |

    Scenario: Delete Address
        When the user deletes an existing address
        Then the address should be removed from the address list
