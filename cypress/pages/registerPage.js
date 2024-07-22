export class RegisterPage {
  webLocators = {
    firstName: "#input-firstname",
    lastName: "#input-lastname",
    email: "#input-email",
    telephone: "#input-telephone",
    password: "#input-password",
    confirmPassword: "#input-confirm",
    yesSubscribe: "input[value='1'][name='newsletter']",
    noSubscribe: "input[value='0'][name='newsletter']",
    policyCheck: "input[type$='checkbox']",
    continue: "input[value='Continue']",
  };

  openUrl() {
    cy.visit("/register");
  }
  enterFirstName(FName) {
    cy.get(this.webLocators.firstName).type(FName);
  }
  enterLastName(LName) {
    cy.get(this.webLocators.lastName).type(LName);
  }
  enterFirstName(FName) {
    cy.get(this.webLocators.firstName).type(FName);
  }
  enterEmail(email) {
    cy.get(this.webLocators.email).type(email);
  }
  enterPhone(PNumber) {
    cy.get(this.webLocators.telephone).type(PNumber);
  }
  enterPassword(password) {
    cy.get(this.webLocators.password).type(password);
  }
  enterConfirmPassword(password) {
    cy.get(this.webLocators.confirmPassword).type(password);
  }
  isSubscribed(option) {
    if (option === "y") {
      cy.get(this.webLocators.yesSubscribe).check();
    }
  }
  checkPolicy() {
    cy.get(this.webLocators.policyCheck).check();
  }
  clickContinue() {
    cy.get(this.webLocators.continue).click();
  }
  verifyAccountCreation() {
    cy.get("div[id='content'] h1")
      .should("be.visible")
      .and("contain", "Your Account Has Been Created!");
  }
  logOut() {
    cy.get(".dropdown > .dropdown-toggle > .fa").click();
    cy.contains("Logout").click();
    cy.get("div[id='content'] h1")
      .should("be.visible")
      .and("contain", "Account Logout");
  }
}
