// API tests for https://automationexercise.com/api_list
// This site reports the API status inside the JSON body ("responseCode"),
// and sends the body as text, so the helper below parses it when needed.

const parse = (res) =>
  typeof res.body === 'string' ? JSON.parse(res.body) : res.body;

describe('Automation Exercise API', () => {
  it('API01 - GET productsList returns the product list', () => {
    cy.request('/api/productsList').then((res) => {
      expect(res.status).to.eq(200);
      const body = parse(res);
      expect(body.responseCode).to.eq(200);
      expect(body.products).to.be.an('array').and.not.be.empty;

      const first = body.products[0];
      expect(first).to.have.property('id');
      expect(first).to.have.property('name');
      expect(first).to.have.property('price');
      expect(first).to.have.property('brand');
      expect(first).to.have.property('category');
    });
  });

  it('API02 - POST to productsList is rejected (method not supported)', () => {
    cy.request({
      method: 'POST',
      url: '/api/productsList',
      failOnStatusCode: false,
    }).then((res) => {
      const body = parse(res);
      expect(body.responseCode).to.eq(405);
      expect(body.message).to.be.a('string').and.not.be.empty;
    });
  });

  it('API03 - GET brandsList returns the brand list', () => {
    cy.request('/api/brandsList').then((res) => {
      expect(res.status).to.eq(200);
      const body = parse(res);
      expect(body.responseCode).to.eq(200);
      expect(body.brands).to.be.an('array').and.not.be.empty;
    });
  });

  it('API04 - POST searchProduct returns matching products', () => {
    cy.request({
      method: 'POST',
      url: '/api/searchProduct',
      form: true,
      body: { search_product: 'top' },
    }).then((res) => {
      const body = parse(res);
      expect(body.responseCode).to.eq(200);
      expect(body.products).to.be.an('array').and.not.be.empty;
    });
  });

  it('API05 - POST searchProduct without a search term returns 400', () => {
    cy.request({
      method: 'POST',
      url: '/api/searchProduct',
      failOnStatusCode: false,
    }).then((res) => {
      const body = parse(res);
      expect(body.responseCode).to.eq(400);
    });
  });

  it('API06 - POST verifyLogin with an unknown user returns 404', () => {
    cy.request({
      method: 'POST',
      url: '/api/verifyLogin',
      form: true,
      failOnStatusCode: false,
      body: {
        email: 'no.such.user.qa@example.com',
        password: 'not-a-real-password',
      },
    }).then((res) => {
      const body = parse(res);
      expect(body.responseCode).to.eq(404);
      expect(body.message).to.eq('User not found!');
    });
  });
});
