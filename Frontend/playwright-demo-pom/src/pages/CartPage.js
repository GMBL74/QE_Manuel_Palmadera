class CartPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = '.shopping_cart_link';
    this.checkoutBtn = '#checkout';
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async clickCheckout() {
    await this.page.waitForSelector(this.checkoutBtn);
    await this.page.click(this.checkoutBtn);
  }
}

module.exports = CartPage;
