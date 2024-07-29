import { test } from "@playwright/test";
import POManager from "../PageObjects.js/POManager";
const dataSet = JSON.parse(
  JSON.stringify(require("../Utils/placeorderTestData.json"))
);

test("Scenario 4)User Login and Place an order for an Apple monitor 24 successfully", async ({
  browser,
}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const poManager = new POManager(page);
  const dashboardPage = poManager.getDashBoardPage(page);
  const productResultPage = poManager.getResultPage(page);
  const productDetailsPage = poManager.getProductDetailsPage(page);
  const cartPage = poManager.getCartPage(page);
  const placeOrderPage = poManager.getPlaceOrderPage(page);

  await test.step("1)User Navigate to website", async () => {
    await dashboardPage.goTo("https://www.demoblaze.com/");
  });
  await test.step("2)User Select Monitors from categories", async () => {
    await page.waitForLoadState("domcontentloaded");
    await dashboardPage.ClickOnCategory("Monitors");
  });
  await test.step("3)User click on Apple monitor 24 from results", async () => {
    await productResultPage.UserClickOnSpecificProductByName(
      "Apple monitor 24"
    );
  });
  await test.step("5)User click on Add to cart button in product details page", async () => {
    await productDetailsPage.UserClickOnAddToCartButton();
  });
  await test.step("6)User verify pop up message text 'product added'", async () => {
    await productDetailsPage.verifyAddToCartVerificationPopUpText();
  });
  await test.step("7)User click on cart from navigation bar", async () => {
    await cartPage.UserClickOnCartInNavigationBar();
  });
  await test.step("8)User Verify that Apple monitor 24 is in cart", async () => {
    await cartPage.UserVerifyProductIsInCart();
  });
  await test.step("9)User click on Place order button", async () => {
    await cartPage.UserClickOnPlaceOrderButton();
  });
  await test.step("10)User fill in place order information", async () => {
    await placeOrderPage.UserFillPlaceOrderInformation();
  });
  await test.step("11)User click on Place order button", async () => {
    await placeOrderPage.UserClickOnPurchaseButton();
  });
  await test.step("12)User verify order is placed successfully through thank you message", async () => {
    await placeOrderPage.userVerifySuccessfulPurchaseMessage();
  });
});
