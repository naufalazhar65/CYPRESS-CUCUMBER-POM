Feature: Edit User Profile

    Background:
        Given the user is logged in
        And the user is on the edit user page

    Scenario: Edit User Profile
        When the user updates their profile with the following details
            | FirstName | LastName | Email                   | Telephone |
            | Naufal    | Azhar    | naufalazhar65@gmail.com | 123456789 |
        And the user clicks the "Continue" button
        Then the user should see a success message
        And the user details should be updated
            | FirstName | LastName | Email                   | Telephone |
            | Naufal    | Azhar    | naufalazhar65@gmail.com | 123456789 |
