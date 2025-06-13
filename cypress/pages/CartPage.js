class CartPage {
  verifyProductQuantity(expectedQty) {
    cy.contains('.cart_quantity', expectedQty);
  }
}

export default new CartPage();