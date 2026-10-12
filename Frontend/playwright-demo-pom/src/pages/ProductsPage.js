class ProductsPage {
  constructor(page) {
    this.page = page;
    this.addToCart = '#add-to-cart-sauce-labs-backpack'; 
    this.cartBadge = '.shopping_cart_badge';
  }

  async addProduct() {
    await this.page.click(this.addToCart);
  }

  async getCartCount() {
    return await this.page.locator(this.cartBadge).textContent();
  }
}

module.exports = ProductsPage;