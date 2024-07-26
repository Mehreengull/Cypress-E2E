import testData from "../fixtures/usersData.json";
import { LoginPage } from "../pages/loginPage";
describe("Login and search", () => {
  // code here
  const login = new LoginPage();
  it("Login and search for a valid product", () => {
    login.openUrl();
    // code here
    cy.Login(testData.email, testData.password);
  });
});
