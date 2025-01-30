# CYPRESS-CUCUMBER-POM

A robust testing framework integrating Cypress with Cucumber using the Page Object Model (POM) for better maintainability and readability.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12+)
- [npm](https://www.npmjs.com/) (included with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/naufalazhar65/CYPRESS-CUCUMBER-POM.git
cd CYPRESS-CUCUMBER-POM
npm install
```

## Project Structure

- `cypress/e2e/` → Feature files written in Gherkin
- `cypress/support/step_definitions/` → Step definitions implementing test steps
- `cypress/pages/` → Page Object classes encapsulating UI interactions

## Writing Tests

### Feature File Example

```gherkin
Feature: User Login
  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should see the dashboard
```

### Step Definitions Example

```javascript
Given('I am on the login page', () => cy.visit('/login'));
When('I enter valid credentials', () => {
  cy.get('#username').type('user');
  cy.get('#password').type('pass');
  cy.get('button').click();
});
Then('I should see the dashboard', () => cy.url().should('include', '/dashboard'));
```

## Running Tests

Execute tests using the following command:

```bash
npm run cypress:open
```

## Reporting

Test reports are generated automatically and can be found at:

```
cypress/reports/html/index.html
```

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Submit a pull request with your changes.

## License

This project is licensed under the MIT License.

