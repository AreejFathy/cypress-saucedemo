import { ProductsSelectors } from './selectors';

class ProductsPage {
  verifyPageTitle() {
    cy.get(ProductsSelectors.pageTitle).should('have.text', 'Products');
  }

  addItems(count) {
    cy.get(ProductsSelectors.addToCartButtons).each(($btn, index) => {
      if (index < count) cy.wrap($btn).click();
    });
  }

  goToCart() {
    cy.get(ProductsSelectors.cartLink).click();
  }

  getCartBadge() {
    return cy.get(ProductsSelectors.cartBadge);
  }

  sortByPriceLowToHigh() {
    cy.get(ProductsSelectors.sortDropdown).select('Price (low to high)');
  }

  getPrices() {
    return cy.get(ProductsSelectors.itemPrices).then($prices => {
      return Cypress._.map($prices, price => parseFloat(price.innerText.replace('$', '')));
    });
  }
}

export default new ProductsPage();
