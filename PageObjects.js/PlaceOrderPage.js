import { expect } from "@playwright/test";

class PlaceOrderPage {
  constructor(page) {
    this.page = page;
    this.nameTextBox = page.locator("#name");
    this.countryTextBox = page.locator("#country");
    this.cityTextBox = page.locator("#city");
    this.creditCardTextBox = page.locator("#card");
    this.monthTextBox = page.locator("#month");
    this.yearTextBox = page.locator("#year");
    this.purchaseButton = page.getByRole("button", {
      name: "Purchase",
      exact: true,
    });
    this.thankYouMessage = page.getByRole("heading", {
      name: "Thank you for your purchase!",
    });
  }
  async UserClickOnAddToCartButton() {
    await this.addToCartButton.click();
  }
  async UserFillPlaceOrderInformation() {
    await this.page.waitForTimeout(2000);
    await this.nameTextBox.fill("Test user");
    await this.countryTextBox.fill("Egypt");
    await this.cityTextBox.fill("Giza");
    await this.creditCardTextBox.fill("1010");
    await this.monthTextBox.fill("2");
    await this.yearTextBox.fill("1996");
  }
  async UserClickOnPurchaseButton() {
    await this.purchaseButton.click();
  }
  async userVerifySuccessfulPurchaseMessage() {
    await expect(await this.thankYouMessage).toBeVisible();
  }
}
export default PlaceOrderPage;
