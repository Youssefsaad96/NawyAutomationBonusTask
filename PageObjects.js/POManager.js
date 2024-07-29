import DashBoardPage from "./DashBoardPage";
import LoginPage from "./LoginPage";
import ResultPage from "./ResultPage";
import ProductDetailsPage from "./ProductDetailsPage";
import CartPage from "./CartPage";
import PlaceOrderPage from "./PlaceOrderPage";

class POManager {
  constructor(page) {
    this.page = page;
    this.dashboardPage = new DashBoardPage(page);
    this.loginPage = new LoginPage(page);
    this.cartPage = new CartPage(page);
    this.resultPage = new ResultPage(page);
    this.productDetailsPage = new ProductDetailsPage(page);
    this.placeOrderPage = new PlaceOrderPage(page);
  }
  getDashBoardPage() {
    return this.dashboardPage;
  }
  getLoginPage() {
    return this.loginPage;
  }
  getResultPage() {
    return this.resultPage;
  }
  getProductDetailsPage() {
    return this.productDetailsPage;
  }
  getCartPage() {
    return this.cartPage;
  }
  getPlaceOrderPage() {
    return this.placeOrderPage;
  }
}
export default POManager;
