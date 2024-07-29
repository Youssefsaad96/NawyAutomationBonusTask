import { expect } from "@playwright/test";

class LoginPage {
  constructor(page) {
    this.page = page;
    this.nameOfTheUser = page.locator("#nameofuser");
    this.dialogBoxLocator = page.locator("button[class='btn btn-primary']");
    this.loginUserNameTextBox = page.locator("#loginusername");
    this.loginPasswordTextBox = page.locator("#loginpassword");
    this.loginButton = page.locator("#login2");
    this.loginButtonInDialogBox = page.getByRole("button", { name: "Log in" });
  }

  async UserVerifyUserNameIsVisible(username) {
    await expect(this.nameOfTheUser).toContainText(username);
  }

  async UserVerifyLoginButtonIsVisible() {
    await expect(this.loginButton).toContainText('Log in');
  }
  async login(username, password) {
    await this.page.waitForSelector("#logInModal", { state: "visible" });
    await this.page.waitForTimeout(500);
    await this.loginUserNameTextBox.type(username);
    await this.page.keyboard.press("Tab");
    await this.page.waitForTimeout(500);
    await this.loginPasswordTextBox.type(password);
    await this.page.keyboard.press("Tab");
  }
  async userClickOnLoginButtonInDialogBox() {
    await this.page.waitForTimeout(500);
    await this.loginButtonInDialogBox.click({ force: true });
  }
}

export default LoginPage;
