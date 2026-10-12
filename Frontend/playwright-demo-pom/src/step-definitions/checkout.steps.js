const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

When('el usuario va al carrito y da click en checkout', async function () {
  const cartPage = new CartPage(this.page);
  await cartPage.goToCart();
  await cartPage.clickCheckout();
});

When('ingresa sus datos personales', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.fillForm('Manuel', 'QA', '12345');
});

When('finaliza la compra', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.finishPurchase();
});

Then('visualiza mensaje de compra exitosa', async function () {
  const mensaje = this.page.locator('.complete-header');
  await expect(mensaje).toHaveText('Thank you for your order!');
});
