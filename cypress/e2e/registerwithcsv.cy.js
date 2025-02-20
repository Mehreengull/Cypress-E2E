import { RegisterPage } from "../pages/registerPage";
const neatCSV = require("neat-csv");
let table;
let usersData = [];

describe("Register users using neat csv", () => {
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
      let random = Math.random().toString().substring(2, 6);
      // Using split to split email when finding @
      let emailParts = user.Email.split("@");
      // Concatenate all the emailParts with randomString in between
      let newEmail = emailParts[0] + random + "@" + emailParts[1];
      register.enterEmail(newEmail);
      register.enterPhone(user.Phone);
      register.enterPassword(user.Password);
      register.enterConfirmPassword(user.confirmPassword);
      register.isSubscribed(user.subscribe);
      register.checkPolicy();
      register.clickContinue();
      register.verifyAccountCreation();
      register.logOutUser();
    });
  });
});
