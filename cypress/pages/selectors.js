
export const LoginSelectors = {
  usernameInput: '#user-name',
  passwordInput: '#password',
  loginButton: '#login-button',
  errorMessage: '[data-test="error"]'
};

export const ProductsSelectors = {
  pageTitle: '.title',
  addToCartButtons: '.btn_inventory',
  cartBadge: '.shopping_cart_badge',
  cartLink: '.shopping_cart_link',
  sortDropdown: '[data-test="product-sort-container"]',
  itemPrices: '.inventory_item_price'
};

export const CheckoutSelectors = {
  checkoutButton: '[data-test="checkout"]',
  firstNameInput: '[data-test="firstName"]',
  lastNameInput: '[data-test="lastName"]',
  postalCodeInput: '[data-test="postalCode"]',
  continueButton: '[data-test="continue"]',
  finishButton: '[data-test="finish"]',
  thankYouMessage: '.complete-header',
  errorMessage: '[data-test="error"]'
};
