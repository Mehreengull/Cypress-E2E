// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { LoginPage } from "../pages/loginPage";
const login = new LoginPage();
Cypress.Commands.add("parseXlsx", (inputFile) => {
  return cy.task("parseXlsx", { filePath: inputFile });
});

Cypress.Commands.add("readFromCSV", (inputFile) => {
  return cy.task("readFromCSV", { filePath: inputFile });
});

Cypress.Commands.add("Login", (email, password) => {
  login.enterEmail(email);
  login.enterPassword(password);
  return login.clickLoginCTA();
});
