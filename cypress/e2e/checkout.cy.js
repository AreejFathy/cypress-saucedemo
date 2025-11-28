
import loginPage from '../pages/LoginPage';
import productsPage from '../pages/ProductPage';
import checkoutPage from '../pages/CheckoutPage';

describe('Checkout Tests', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.login(atob(Cypress.env('username')), atob(Cypress.env('password')));
    productsPage.addItems(2);
    productsPage.goToCart();
  });

  it('should complete checkout with valid data', () => {
    checkoutPage.startCheckout();
    checkoutPage.fillInformation('John', 'Doe', '12345');
    checkoutPage.finishCheckout();
    checkoutPage.verifyThankYouMessage();
  });

  it('should show error when required field is missing', () => {
    checkoutPage.startCheckout();
    cy.get('[data-test="continue"]').click();
    checkoutPage.getErrorMessage().should('contain', 'First Name is required');
  });
});
