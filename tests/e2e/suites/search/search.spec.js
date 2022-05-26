const elements = {
  searchResults: 'table tbody',
  dataRows: 'table tbody tr',
  firstDataCell: 'table tbody tr td:first',
  nextPageButton: 'button[aria-label="Goto next page"]',
  pageNumber: '[aria-label="Page Number"]:first',
  previousPageButton: 'button[aria-label="Goto previous page"]',
  searchSubmitButton: 'button[type=submit]',
  steamStoreColumns: 'table tbody tr td:nth-child(2):contains(Steam)',
  storeColumn: 'table tbody tr td:nth-child(2)',
};

const PAGE_SIZE = 60;
const CHEAPSHARK_REDIRECTION_URL = 'https://www.cheapshark.com/redirect?dealID='

describe('Search', () => {
  it('can perform default search', () => {
    cy.visit('/');
    cy.get(elements.dataRows).should('have.length.at.least', 5);
  });

  it('can click and navigate to external game page', () => {
    cy.visit('/');

    cy.get(elements.dataRows).should(  'have.length.at.least', 5);

    cy.window().then((window) => {
      cy.stub(window, 'open', url => {
        expect(url).to.contain(CHEAPSHARK_REDIRECTION_URL)
      }).as("gameNewWindow")
    })


    cy.get(`${elements.dataRows}:first-child()`).click();
    cy.get('@gameNewWindow').should("be.called")
  })

  it('can navigate to next and previous page of search results', () => {
    cy.visit('/');
    cy.get(elements.previousPageButton).first().should('be.disabled');
    cy.get(elements.dataRows).should('have.length.at.least', 5);

    cy.get(elements.searchResults).invoke('text').then(($searchResults) => {
      cy.wrap($searchResults).as('pageOneListOfGames');
    });

    cy.get(elements.nextPageButton).first().click();

    cy.get(elements.searchResults).then(($searchResults) => {
      cy.get('@pageOneListOfGames').should(($text) => {
        expect($searchResults.text()).to.not.equal($text)
      })
    });

    cy.get(elements.pageNumber).then(($pageNumber) => {
      expect($pageNumber).to.have.text('Page: 2');
    });

    cy.get(elements.previousPageButton).first().click();

    cy.get(elements.pageNumber).then(($pageNumber) => {
      expect($pageNumber).to.have.text('Page: 1');
    });

    cy.get(elements.searchResults).then(($searchResults) => {
      cy.get('@pageOneListOfGames').should(($text) => {
        expect($searchResults.text()).to.equal($text)
      })
    });
  });

  it('can perform search by store', () => {
    cy.intercept('GET', '/api/1.0/deals?pageNumber=1&pageSize=60&storeID=1&title=').as('requestSteamGames');

    cy.visit('/');
    cy.get('#store-filter').should('be.visible');
    cy
      .get('#store-filter')
      .type('steam{downarrow}{enter}');

    cy.get(elements.searchSubmitButton).click();
    cy.get(elements.storeColumn).should('not.contain.text', 'AllYouPlay');
    cy.get(elements.steamStoreColumns).should('have.length', PAGE_SIZE);
  });
});
