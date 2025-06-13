class ProductDetailsPage {
  verifyProductDetailsVisible() {
    cy.get('.product-information').should('be.visible');
  }
  setQuantity(qty) {
    cy.get('#quantity').clear().type(qty);
  }
  clickAddToCart() {
    cy.contains('Add to cart').click();
  }
  clickViewCart() {
    cy.contains('View Cart').click();
  }
}
export default new ProductDetailsPage();