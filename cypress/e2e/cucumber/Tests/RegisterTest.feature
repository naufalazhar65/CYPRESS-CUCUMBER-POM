Feature: User Registration
    As a user, I want to register on the website with valid and invalid data.

    Background:
        Given the user is on the registration page


    @regression
    Scenario: Successful registration
        When the user registers with the following details:
            | FirstName | LastName | Email                    | Telephone  | Password    | ConfirmPassword |
            | Naufal    | Azhar    | naufalazhar013@gmail.com | 1234567890 | password123 | password123     |
        And user check the privacy policy box
        And user click the submit button
        Then the user should be redirected to the dashboard

    @regression
    Scenario: Registration with existing email
        When the user registers with the following details:
            | FirstName | LastName | Email                    | Telephone  | Password    | ConfirmPassword |
            | Naufal    | Azhar    | naufalazhar005@gmail.com | 1234567890 | password123 | password123     |
        And user check the privacy policy box
        And user click the submit button
        Then an error message should be displayed:
            | ErrorMessage                                   |
            | Warning: E-Mail Address is already registered! |

    @regression
    Scenario: Registration with weak password
        When the user registers with the following details:
            | FirstName | LastName | Email                  | Telephone  | Password | ConfirmPassword |
            | Naufal    | Azhar    | naufalazhar1@gmail.com | 1234567890 | 123      | 123             |
        And user check the privacy policy box
        And user click the submit button
        Then an error message should be displayed:
            | ErrorMessage                                   |
            | Warning: E-Mail Address is already registered! |

    @regression
    Scenario: Registration with mismatched passwords
        When the user registers with the following details:
            | FirstName | LastName | Email                  | Telephone  | Password    | ConfirmPassword |
            | Naufal    | Azhar    | naufalazhar1@gmail.com | 1234567890 | password123 | password12356   |
        And user check the privacy policy box
        And user click the submit button
        Then an error message should be displayed:
            | ErrorMessage                                   |
            | Password confirmation does not match password! |

    Scenario: Registration without checking privacy policy
        When the user registers with the following details:
            | FirstName | LastName | Email                  | Telephone  | Password    | ConfirmPassword |
            | Naufal    | Azhar    | naufalazhar1@gmail.com | 1234567890 | password123 | password123     |
        And user click the submit button
        Then an error message should be displayed:
            | ErrorMessage                                   |
            | Warning: You must agree to the Privacy Policy! |