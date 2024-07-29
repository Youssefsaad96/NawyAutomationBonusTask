import { test } from "@playwright/test";
import POManager from "../PageObjects.js/POManager";
const dataSet = JSON.parse(
  JSON.stringify(require("../Utils/placeorderTestData.json"))
);

test("Scenario 1) User can register with valid data", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const poManager = new POManager(page);
  const dashboardPage = poManager.getDashBoardPage(page);

  await test.step("1)User Navigate to website", async () => {
    await dashboardPage.goTo("https://www.demoblaze.com/");
  });
  await test.step("2)User sign up with valid username and password", async () => {
    await page.waitForLoadState("networkidle");
    await dashboardPage.SignUp(dataSet.username, dataSet.password);
  });
});
