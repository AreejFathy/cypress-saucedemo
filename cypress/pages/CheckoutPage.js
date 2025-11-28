import { CheckoutSelectors } from './selectors';

class CheckoutPage {
  startCheckout() {
    cy.get(CheckoutSelectors.checkoutButton).click();
  }

  fillInformation(firstName, lastName, postalCode) {
    cy.get(CheckoutSelectors.firstNameInput).type(firstName);
    cy.get(CheckoutSelectors.lastNameInput).type(lastName);
    cy.get(CheckoutSelectors.postalCodeInput).type(postalCode);
    cy.get(CheckoutSelectors.continueButton).click();
  }

  finishCheckout() {
    cy.get(CheckoutSelectors.finishButton).click();
  }

  verifyThankYouMessage() {
    cy.get(CheckoutSelectors.thankYouMessage).should('contain', 'Thank you');
  }

  getErrorMessage() {
    return cy.get(CheckoutSelectors.errorMessage);
  }
}

export default new CheckoutPage();
