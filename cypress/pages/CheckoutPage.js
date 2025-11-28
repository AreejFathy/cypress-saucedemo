
// import { CheckoutSelectors } from './selectors';

// class CheckoutPage {
//   elements = {
//     checkoutButton: () => cy.get(CheckoutSelectors.checkoutButton),
//     firstNameInput: () => cy.get(CheckoutSelectors.firstNameInput),
//     lastNameInput: () => cy.get(CheckoutSelectors.lastNameInput),
//     postalCodeInput: () => cy.get(CheckoutSelectors.postalCodeInput),
//     continueButton: () => cy.get(CheckoutSelectors.continueButton),
//     finishButton: () => cy.get(CheckoutSelectors.finishButton),
//     thankYouMessage: () => cy.get(CheckoutSelectors.thankYouMessage),
//     errorMessage: () => cy.get(CheckoutSelectors.errorMessage)
//   };

//   startCheckout() {
//     this.elements.checkoutButton().click();
//   }

//   fillInformation(firstName, lastName, postalCode) {
//     this.elements.firstNameInput().type(firstName);
//     this.elements.lastNameInput().type(lastName);
//     this.elements.postalCodeInput().type(postalCode);
//     this.elements.continueButton().click();
//   }

//   finishCheckout() {
//     this.elements.finishButton().click();
//   }

//   verifyThankYouMessage() {
//     this.elements.thankYouMessage().should('contain', 'Thank you');
//   }
// }

// export default new CheckoutPage();

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
