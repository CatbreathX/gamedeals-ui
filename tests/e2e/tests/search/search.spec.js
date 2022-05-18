describe('Example test', () => {
  beforeEach(() => {
  });

  it('can search with filters', () => {
    cy.visit('/');
    cy.get('#store-filter', { timeout: 10000 }).should('be.visible');
    cy
      .get('#store-filter')
      .type('steam{downarrow}{enter}').debug();

    cy.get('button[type=reset]').click();
  });
});
