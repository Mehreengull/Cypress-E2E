import { RegisterPage } from "../pages/registerPage";

describe("Register user using fast csv", () => {
  it("Register users from csv file ", () => {
    //jsonData is the sheet
    cy.readFromCSV("cypress/fixtures/register.csv").then((result) => {
      result.forEach((user) => {
        const register = new RegisterPage();
        register.openUrl();
        register.enterFirstName(user.FirstName);
        register.enterLastName(user.LastName);
        let random = Math.random().toString().substring(2, 6);
        //Using split to spilt email when find @
        let emailParts = user.Email.split("@");
        //Concatenate all the emailParts with randomString in between
        let newEmail = emailParts[0] + random + "@" + emailParts[1];
        register.enterEmail(newEmail);
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
});
