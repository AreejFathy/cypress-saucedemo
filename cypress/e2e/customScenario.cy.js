
import loginPage from '../pages/LoginPage';
import productsPage from '../pages/ProductPage';

describe('Custom Scenario: Sort Products by Price', () => {
  it('should sort products by price low to high and verify order', () => {
    loginPage.visit();
    loginPage.login(atob(Cypress.env('username')), atob(Cypress.env('password')));
    productsPage.verifyPageTitle();

    productsPage.sortByPriceLowToHigh();
    productsPage.getPrices().then(prices => {
      const sortedPrices = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sortedPrices);
    });
  });
});
