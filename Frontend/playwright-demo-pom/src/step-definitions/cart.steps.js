const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const ProductsPage = require('../pages/ProductsPage');

When('agrega un producto al carrito', async function () {
  const productsPage = new ProductsPage(this.page);
  await productsPage.addProduct();
});

Then('el carrito muestra el producto agregado', async function () {
  const productsPage = new ProductsPage(this.page);
  const count = await productsPage.getCartCount();
  await expect(count).toBe('1');
});