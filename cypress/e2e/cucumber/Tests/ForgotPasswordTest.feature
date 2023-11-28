Feature: Forgot Password Functionality

    Background:
        Given the user is on the login page

    Scenario: Forgot password link is accessible
        When the user clicks on the "Forgot Password" link
        Then the user should be redirected to the forgot password page
        And the user should see the "Forgot Your Password?" title

    Scenario Outline: Request password recovery with valid email
        When the user clicks on the "Forgot Password" link
        When the user provides a valid email "<email>" for password recovery
        And submits the password recovery form
        Then a success message for password recovery should be displayed

        Examples:
            | email                   |
            | naufalazhar65@gmail.com |
            | naufalazhar12@gmail.com |

    Scenario Outline: Request password recovery with invalid email
        When the user clicks on the "Forgot Password" link
        When the user provides an invalid email "<email>" for password recovery
        And submits the password recovery form
        Then an error message for invalid email should be displayed

        Examples:
            | email                      |
            | invalid.email@             |
            | nonexistent.email@site.com |
