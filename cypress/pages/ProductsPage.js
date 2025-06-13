class ProductsPage {
  verifyAllProductsPage() {
    cy.url().should('include', '/products');
    cy.get('.title.text-center').should('be.visible').and('contain.text', 'All Products')
  }
  searchProduct(name) {
    cy.get('#search_product').type(name);
    cy.get('#submit_search').click();
  }
  verifySearchedProductsVisible() {
    cy.get('.title.text-center').should('be.visible').and('have.text', 'Searched Products');
  }
  verifySearchResultsContain(name) {
    cy.get('.productinfo.text-center').each(($el) => {
      cy.wrap($el).should('contain.text', name);
    });
  }
}
export default new ProductsPage();