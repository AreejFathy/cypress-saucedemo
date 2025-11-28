
// import { ProductsSelectors } from './selectors';

// class ProductsPage {
//   elements = {
//     pageTitle: () => cy.get(ProductsSelectors.pageTitle),
//     addToCartButtons: () => cy.get(ProductsSelectors.addToCartButtons),
//     cartBadge: () => cy.get(ProductsSelectors.cartBadge),
//     cartLink: () => cy.get(ProductsSelectors.cartLink),
//     sortDropdown: () => cy.get(ProductsSelectors.sortDropdown),
//     itemPrices: () => cy.get(ProductsSelectors.itemPrices)
//   };

//   verifyOnProductsPage() {
//     this.elements.pageTitle().should('have.text', 'Products');
//   }

//   addItemsToCart(count) {
//     this.elements.addToCartButtons().each(($btn, index) => {
//       if (index < count) cy.wrap($btn).click();
//     });
//   }

//   goToCart() {
//     this.elements.cartLink().click();
//   }

//   sortByPriceLowToHigh() {
//     this.elements.sortDropdown().select('Price (low to high)');
//   }

//   getPrices() {
//     return this.elements.itemPrices().then($prices => {
//       return Cypress._.map($prices, price => parseFloat(price.innerText.replace('$', '')));
//     });
//   }
// }

// export default new ProductsPage();

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
