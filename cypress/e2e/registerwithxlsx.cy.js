import { RegisterPage } from "../pages/registerPage";

describe("Registration flow with excel file", () => {
  it("Register users from excel file xlsx", () => {
    //jsonData is the sheet
    cy.parseXlsx("cypress/fixtures/registerQA.xlsx").then((jsonData) => {
      //rowLength is the number of rows in sheet 1
      const rowLength = Cypress.$(jsonData[0].data).length;
      cy.log(rowLength);
      //a loop to iterate over each row in sheet excluding header row
      for (let i = 1; i < rowLength; i++) {
        let value = jsonData[0].data[i];
        const register = new RegisterPage();
        register.openUrl();
        register.enterFirstName(value[0]);
        register.enterLastName(value[1]);
        //generate a random string to add in the email before domain so we have unique email on each run.
        let random = Math.random().toString().substring(2, 6);
        //Using split to spilt email when find @
        let emailParts = value[2].split("@");
        //Concatenate all the emailParts with randomString in between
        let newEmail = emailParts[0] + random + "@" + emailParts[1];
        register.enterEmail(newEmail);
        register.enterPhone(value[3]);
        register.enterPassword(value[4]);
        register.enterConfirmPassword(value[5]);
        register.isSubscribed(value[6]);
        register.checkPolicy();
        register.clickContinue();
        register.verifyAccountCreation();
        register.logOut();
      }
    });
  });
});
