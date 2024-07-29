class DashBoardPage {
  constructor(page) {
    this.page = page;
    this.signUpButton = page.locator("#signin2");
    this.dialogBoxLocator = page.locator("button[class='btn btn-primary']");
    this.signUpUserNameTextBox = page.locator("#sign-username");
    this.signUpPasswordTextBox = page.locator("#sign-password");
    this.logoutButton = page.locator("#logout2");
    this.categoryType = page.locator("div [class='list-group'] a");
    this.loginButton = page.locator("#login2");
    this.signUpButtonInDialogBox=page.getByRole('button',{name : 'Sign up'})
  }
  async goTo(URL) {
    await this.page.goto(URL);
  }
  async SignUp(username, password) {
  
    await this.signUpButton.click();
    await this.signUpUserNameTextBox.fill(username);
    await this.signUpPasswordTextBox.fill(password);
    await this.signUpButtonInDialogBox.click();
  }
  async verifySignUpVerificationPopUpText() {
    const dialog = await this.page.waitForEvent("dialog");
    const dialogMessage = await dialog.message();
    if (dialogMessage === "Sign up successful") {
      await dialog.accept();
    } else {
      throw new Error(`Unexpected dialog message: ${dialogMessage}`);
    }
  }
  async userClickOnLoginButtonFromNavigationMenu() {
    await this.loginButton.click();
  }
  async userClickOnLogout() {
    await this.logoutButton.click();
  }
  async ClickOnCategory(categoryName) {
    const specificCategory = await this.categoryType.filter({
      hasText: `${categoryName}`,
    });
    await specificCategory.click();
  }
}
export default DashBoardPage;
