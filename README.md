Cypress Automation Framework for SauceDemo
Overview
This project is a Cypress-based automation framework for testing https://www.saucedemo.com. It demonstrates:

 Page Object Model (POM) for maintainability
 Secure credentials using cypress.env.json (Base64 encoded)
 Detailed reporting with Mochawesome
 Scalable structure for future enhancements


 Project Structure
CYPRESS_PROJECT/
│
├── cypress/
│   ├── e2e/                # Test cases
│   │   ├── login.cy.js
│   │   ├── cart.cy.js
│   │   ├── checkout.cy.js
│   │   └── sort.cy.js
│   ├── pages/              # Page Objects
│   │   ├── LoginPage.js
│   │   ├── ProductsPage.js
│   │   └── CheckoutPage.js
│   ├── support/            # Custom commands
│   │   └── commands.js
│   └── fixtures/           # Test data
│       └── users.json
│
├── cypress.config.js       # Cypress configuration
├── cypress.env.json        # Encrypted credentials (Base64)
├── package.json
└── README.md               # Project documentation


 Environment Setup (Secure Credentials)


1- Create a file named cypress.env.json in the root directory:
    JSON{  "username": "c3RhbmRhcmRfdXNlcg==",  "password": "c2VjcmV0X3NhdWNl"}

    c3RhbmRhcmRfdXNlcg== → standard_user
    c2VjcmV0X3NhdWNl → secret_sauce

2- Add cypress.env.json to .gitignore:
    cypress.env.json

3- Decode credentials in tests:
    
    const username = atob(Cypress.env('username'));
    const password = atob(Cypress.env('password'));
    cy.login(username, password);

Installation
1- 
    git clone <your-repo-link>
    cd CYPRESS_PROJECT

2- Install dependencies:
    npm install

Running Tests

1- Open Cypress Test Runner:npx cypress open
2- Run all tests in headless mode


Reporting with Mochawesome

1- Install Mochawesome:
    npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

2- Configure cypress.config.js: 
    reporter: "mochawesome",
    reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
    }
3- Generate report after tests:
    npx mochawesome-merge cypress/reports/*.json > mochawesome.json

4- Find the HTML report in the folder under mochawesome-report/
