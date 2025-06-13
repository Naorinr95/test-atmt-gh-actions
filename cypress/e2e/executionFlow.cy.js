import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';

describe('Automation Task Full Flow', function () {
  let testData;

  before(() => {
    cy.fixture('product').then((data) => {
      testData = data;
    });
  });

  it('TC01 - Search for product and verify search results', () => {
    HomePage.visit();
    HomePage.verifyHomePageVisible();

    HomePage.clickProductsButton();
    ProductsPage.verifyAllProductsPage();

    ProductsPage.searchProduct(testData.productName);
    ProductsPage.verifySearchedProductsVisible();
    ProductsPage.verifySearchResultsContain(testData.productName);
  });

  it('TC02 - Add product to cart and verify quantity', () => {
    HomePage.visit();
    HomePage.verifyHomePageVisible();

    HomePage.clickFirstProductView();
    ProductDetailsPage.verifyProductDetailsVisible();

    ProductDetailsPage.setQuantity(testData.quantity);
    ProductDetailsPage.clickAddToCart();

    ProductDetailsPage.clickViewCart();
    CartPage.verifyProductQuantity(testData.quantity);
  });
});