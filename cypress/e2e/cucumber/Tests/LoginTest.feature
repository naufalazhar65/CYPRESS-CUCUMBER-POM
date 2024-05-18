@smoke
Feature: I want to login into the site with valid data
    As a user, I want to log in with valid or invalid credentials.

    Background: Navigate to the Website
        Given I navigate to the Website

    Scenario: Login as new sign up user with valid data
        When I entered valid credential
            | email                   | password   |
            | naufalazhar65@gmail.com | naufal354  |
        And User click on sign in button
        Then Validate the title after login

    @regression
    Scenario: Login with invalid credentials
        When I entered invalid credential
            | email           | password |
            | invalidUsername | invali   |
        And User click on sign in button
        Then Validate the error message for invalid login
            | ErrorMessage                                                                                     |
            | No match for E-Mail Address and/or Password                                                      |
            | Warning: No match for E-Mail Address and/or Password.                                            |
            | Your account has exceeded allowed number of login attempts                                       |
            | Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour. |