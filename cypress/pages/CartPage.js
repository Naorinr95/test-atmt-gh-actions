class CartPage {
  verifyProductQuantity(expectedQty) {
    cy.get('.cart_quantity').first().invoke('text').then((text) => {
      expect(text.trim()).to.eq(String(expectedQty));
    });
  }
}

export default new CartPage();