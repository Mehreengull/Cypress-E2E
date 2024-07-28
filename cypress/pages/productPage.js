export class ProductPage {
  webLocators = {
    search: "input[placeholder='Search']",
    clickSearch: ".btn.btn-default.btn-lg",
    addToCart: "Add to Cart",
    addedProductAlert: ".alert.alert-success.alert-dismissible",
  };

  searchBar(productName) {
    cy.get(this.webLocators.search).type(productName);
    cy.get(this.webLocators.clickSearch).click();
  }
  addToCart() {
    cy.contains(this.webLocators.addToCart).click();
    cy.get(this.webLocators.addedProductAlert).should("be.visible");
  }
}
