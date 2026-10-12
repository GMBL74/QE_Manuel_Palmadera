class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.zipCode = '#postal-code';
    this.continueBtn = '#continue';
    this.finishBtn = '#finish';
  }

  async fillForm(nombre, apellido, zip) {
    await this.page.waitForSelector(this.firstName);

    await this.page.fill(this.firstName, nombre);
    await this.page.fill(this.lastName, apellido);
    await this.page.fill(this.zipCode, zip);

    await this.page.click(this.continueBtn);
  }

  async finishPurchase() {
    const btn = this.page.locator(this.finishBtn);

    await btn.waitFor();
    await btn.click();
  }
}

module.exports = CheckoutPage;
