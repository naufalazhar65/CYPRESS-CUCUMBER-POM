Feature: User Registration
    As a user, I want to register on the website with valid and invalid data.

    Background:
        Given the user is on the registration page

    @regression
    Scenario: Successful registration
        When the user registers with the following details:
            | FirstName | LastName | Email                   | Telephone  | Password    | ConfirmPassword |
            | Naufal    | Azhar    | naufalazhar35@gmail.com | 1234567890 | password123 | password123     |
        Then the user should be redirected to the dashboard

    @regression
    Scenario: Registration with existing email
        When the user registers with the following details:
            | FirstName | LastName | Email                   | Telephone  | Password    | ConfirmPassword |
            | Naufal    | Azhar    | naufalazhar35@gmail.com | 1234567890 | password123 | password123     |
        Then an error message should be displayed

    @regression
    Scenario: Registration with weak password
        When the user registers with the following details:
            | FirstName | LastName | Email                  | Telephone  | Password    | ConfirmPassword |
            | Naufal    | Azhar    | naufalazhar1@gmail.com | 1234567890 | password123 | password123     |
        Then an error message should be displayed

    @regression
    Scenario: Registration with mismatched passwords
        When the user registers with the following details:
            | FirstName | LastName | Email                  | Telephone  | Password    | ConfirmPassword |
            | Naufal    | Azhar    | naufalazhar1@gmail.com | 1234567890 | password123 | password12356   |
        Then an error message should be displayed
