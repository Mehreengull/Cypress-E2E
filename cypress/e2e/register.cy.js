import { RegisterPage } from "../pages/registerPage";
const neatCSV = require("neat-csv");

let table;

describe("template spec", () => {
  before(() => {
    cy.fixture("register.csv")
      .then(neatCSV) // Convert CSV file into an object
      .then((data) => {
        table = data;
      });
  });

  it("Register users from csv", () => {
    table.forEach((user) => {
      const register = new RegisterPage();
      register.openUrl();
      register.enterFirstName(user.FirstName);
      register.enterLastName(user.LastName);
      register.enterEmail(user.Email);
      register.enterPhone(user.Phone);
      register.enterPassword(user.Password);
      register.enterConfirmPassword(user.confirmPassword);
      register.isSubscribed(user.subscribe);
      register.checkPolicy();
      register.clickContinue();
      register.logOut();
    });
  });
});
