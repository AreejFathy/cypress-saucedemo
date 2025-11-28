
import loginPage from '../pages/LoginPage';

describe('Login Tests', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with valid credentials from env', () => {
    const username = atob(Cypress.env('username')); // Decode Base64
    const password = atob(Cypress.env('password'));
    loginPage.login(username, password);
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('should fail login with wrong username', () => {
    loginPage.login('wrong_user', 'secret_sauce');
    loginPage.getErrorMessage().should('contain', 'Username and password do not match');
  });

  it('should fail login with wrong password', () => {
    loginPage.login('standard_user', 'wrong_pass');
    loginPage.getErrorMessage().should('contain', 'Username and password do not match');
  });

  it('should fail login with locked_out_user', () => {
    loginPage.login('locked_out_user', 'secret_sauce');
    loginPage.getErrorMessage().should('contain', 'locked out');
  });
});
