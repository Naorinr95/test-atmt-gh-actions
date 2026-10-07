class HomePage {
  visit() {
    cy.visit('/');
  }

  verifyHomePageVisible() {
    cy.url().should('eq', Cypress.config('baseUrl') + '/');
    cy.get('#slider').should('be.visible');
  }

  clickProductsButton() {
    cy.get("a[href='/products']").should('be.visible').and('contain.text', 'Products').click();
  }

  clickFirstProductView() {
    cy.get("a[href^='/product_details/']").first().click();
  }
}

export default new HomePage();