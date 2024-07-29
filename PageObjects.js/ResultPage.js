class ResultPage {
  constructor(page) {
    this.page = page;
    this.ResultList = page.locator("[class='card-block'] h4");
  }
  async UserClickOnSpecificProductByName(productName) {
    await this.page.waitForTimeout(2000);
    const productNumber = await this.ResultList.count();
    for (let i = 0; i <= productNumber; i++) {
      const product = await this.ResultList.nth(i).textContent();
      if (product == `${productName}`) {
        await this.ResultList.nth(i).click();
        break;
      }
    }
  }
}
export default ResultPage;
