import { test } from "@playwright/test";
import POManager from "../PageObjects.js/POManager";
const dataSet = JSON.parse(
  JSON.stringify(require("../Utils/placeorderTestData.json"))
);

test("Scenario 3)User can Logout successfully", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const poManager = new POManager(page);
  const dashboardPage = poManager.getDashBoardPage(page);
  const loginPage = poManager.getLoginPage(page);

  await test.step("1)User Navigate to website", async () => {
    await dashboardPage.goTo("https://www.demoblaze.com/");
  });
  await test.step("2)User click on login button from navigation menu ", async () => {
    await dashboardPage.userClickOnLoginButtonFromNavigationMenu();
  });
  await test.step("3)User Login with already registered valid username and password ", async () => {
    await loginPage.login(dataSet.username, dataSet.password);
  });
  await test.step("4)User click on login", async () => {
    await loginPage.userClickOnLoginButtonInDialogBox();
  });
  await test.step("5)User click on logout button from navigation bar ", async () => {
    await dashboardPage.userClickOnLogout();
  });
  await test.step("6)User verify that login button is visible in navigation bar", async () => {
    await page.waitForLoadState("domcontentloaded");
    await loginPage.UserVerifyLoginButtonIsVisible();
  });
});

