Feature: Change User Password
    As a logged-in user, I want to change my password.

    Background:
        Given the user is logged in
        And the user is on the change password page

    @regression
    Scenario: Change Password
        When the user enters the current password and sets a new password
            | NewPassword | ConfirmNewPassword |
            | naufal16    | naufal16           |
        And the user clicks the "Continue" button
        Then the user should see a success message
        And the user should be able to log in with the new password
