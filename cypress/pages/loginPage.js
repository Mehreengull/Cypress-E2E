import { th } from "@faker-js/faker";

export class LoginPage {
  webLocators = {
    email: "input[name='email']",
    password: "input[name='password']",
    loginCTA: "input[value='Login']",
  };

  openUrl() {
    cy.visit("/login");
  }

  enterEmail(email) {
    cy.get(this.webLocators.email).type(email);
  }

  enterPassword(password) {
    cy.get(this.webLocators.password).type(password);
  }

  clickLoginCTA() {
    cy.get(this.webLocators.loginCTA).click();
  }
}
