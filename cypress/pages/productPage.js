export class ProductPage {
  webLocators = {
    search: "input[placeholder='Search']",
    clickSearch: ".btn.btn-default.btn-lg",
  };

  searchBar(productName) {
    cy.get(this.webLocators.search).type(productName);
    cy.get(this.webLocators.clickSearch).click();
  }
}
