import { A11Y_OPTIONS } from '../../accessebility-options';

describe('broker page', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.intercept('GET', '/brokers', {
      statusCode: 200,
      body: [
        {
          id: 1,
          name: 'Krogsveen',
        },
        {
          id: 2,
          name: 'Privatmegleren',
        },
        {
          id: 3,
          name: 'Aktiv Eiendomsmegling',
        },
        {
          id: 4,
          name: 'DnB Eiendom',
        },
      ],
    });
    cy.visit('/broker');
  });

  it('check accessebility', () => {
    cy.wait(3000);
    cy.injectAxe();
    cy.checkA11y(null, A11Y_OPTIONS);
  });

  it('has the correct title', () => {
    cy.get('h1').contains('Boligen vi har kjøpt');
  });

  it('chooses a broker and navigate to collateral page', () => {
    cy.get('mat-select').click();
    cy.get('mat-option').eq(2).click();
    cy.get('.nextBtn').click();
  });
});

describe('collateral page', () => {
  it('check accessebility', () => {
    cy.wait(3000);
    cy.injectAxe();
    cy.checkA11y(null, A11Y_OPTIONS);
  });

  it('see purchase contract', () => {
    cy.get('mat-expansion-panel').click();
  });
});
