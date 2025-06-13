class HomePage {
  visit() {
    cy.visit('https://automationexercise.com');
  }

  verifyHomePageVisible() {
    cy.get('body').should('be.visible').and('contain.text', 'Home');
  }

  clickProductsButton() {
    cy.get("a[href='/products']").should('be.visible').and('contain.text', 'Products').click();
  }

  clickFirstProductView() {
    cy.get("a[href^='/product_details/']").first().click();
  }
}

export default new HomePage();