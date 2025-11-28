
import loginPage from '../pages/LoginPage';
import productsPage from '../pages/ProductPage';

describe('Cart Tests', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.login(atob(Cypress.env('username')), atob(Cypress.env('password')));
    productsPage.verifyPageTitle();
  });

  it('should add two items and verify cart badge = 2', () => {
    productsPage.addItems(2);
    productsPage.getCartBadge().should('have.text', '2');
  });

  it('should remove one item and verify badge decrements', () => {
    productsPage.addItems(2);
    productsPage.goToCart();
    cy.get('.cart_item').should('have.length', 2);
    cy.get('.cart_item').first().find('.cart_button').click();
    cy.get('.cart_item').should('have.length', 1);
  });
});
