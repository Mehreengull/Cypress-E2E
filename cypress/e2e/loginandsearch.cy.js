import testData from "../fixtures/usersData.json";
import { LoginPage } from "../pages/loginPage";
import { ProductPage } from "../pages/productPage";

describe("Login and search", () => {
  // code here
  const login = new LoginPage();
  const product = new ProductPage();
  it("Login and search for a valid product", () => {
    login.openUrl();
    // code here
    cy.Login(testData.login.email, testData.login.password);
    product.searchBar(testData.product.productName);
    //get all 3 product in an array and loop until find macbookpro and add it to cart
  });
});
