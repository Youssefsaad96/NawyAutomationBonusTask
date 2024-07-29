class CartPage {
  constructor(page) {
    this.page = page;
    this.cartButton = page.getByRole("link", { name: "Cart", exact: true });
    this.PlaceOrderButton = page.getByRole("button", {
      name: "Place Order",
      exact: true,
    });
    this.rowLocator = page.locator("tbody tr");
    this.cellLocator = page.locator("tbody tr td");
  }
  async UserClickOnCartInNavigationBar() {
    await this.cartButton.click();
  }
  async UserClickOnPlaceOrderButton() {
    await this.PlaceOrderButton.click();
  }
  async UserVerifyProductIsInCart() {
    const cellCount = await this.cellLocator.count();
    for (let i = 0; i <= cellCount; i++) {
      let cell = await this.cellLocator.nth(i);
      if (cell == "Apple monitor 24")
        console.log("verification is successful ");
      break;
    }
  }
}
export default CartPage;
