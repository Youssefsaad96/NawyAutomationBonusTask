class ProductDetailsPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.getByRole("link", { name: "Add to cart" });
  }
  async UserClickOnAddToCartButton() {
    await this.addToCartButton.click();
  }
  async verifyAddToCartVerificationPopUpText() {
    const dialog = await this.page.waitForEvent("dialog");
    const dialogMessage = dialog.message();
    if (dialogMessage === "Product added") {
      await dialog.accept();
    } else {
      throw new Error(`Unexpected dialog message: ${dialogMessage}`);
    }
  }
}
export default ProductDetailsPage;
