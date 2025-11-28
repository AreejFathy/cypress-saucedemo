import { LoginSelectors } from './selectors';

class LoginPage {
  visit() {
    cy.visit('/');
  }

  login(username, password) {
    cy.get(LoginSelectors.usernameInput).type(username);
    cy.get(LoginSelectors.passwordInput).type(password);
    cy.get(LoginSelectors.loginButton).click();
  }

  getErrorMessage() {
    return cy.get(LoginSelectors.errorMessage);
  }
}

export default new LoginPage();

