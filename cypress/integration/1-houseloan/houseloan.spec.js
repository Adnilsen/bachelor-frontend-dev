import { A11Y_OPTIONS } from '../../accessebility-options';

describe('your loan applications page', () => {
  beforeEach(() => {
    cy.intercept('GET', '/cases', {
      statusCode: 200,
      body: [
        {
          caseId: 133,
          status: "Klar til å fortsette",
          amount: 2_500_000,
          finished: true,
          date: new Date(),
          product: {
            type: "Finansieringsbevis bolig",
            name: "Finansieringsbevis bolig",
            description: "Bra finbev",
            id: 1
          },
          customer: {
            role: "owner",
            customerFirstName: "Kari",
            customerLastName: "Normann",
            id: 123,
          },
          gatheredDebt: 200000,
          totalEquity: 500000
        }
      ],
    });

    cy.visit('http://localhost:4200');
  });

  const caseItem = {
    caseId: 133,
    status: "Klar til å fortsette",
    amount: 2_500_000,
    finished: true,
    date: new Date(),
    product: {
      type: "Finansieringsbevis bolig",
      name: "Finansieringsbevis bolig",
      description: "Bra finbev",
      id: 1
    },
    customer: {
      role: "owner",
      customerFirstName: "Kari",
      customerLastName: "Normann",
      id: 123,
    },
    gatheredDebt: 200000,
    totalEquity: 500000
  }

  it('check accessebility', () => {
    cy.wait(3000);
    cy.injectAxe();
    cy.checkA11y(null, A11Y_OPTIONS);
  });

  it('navigate to landig page', () => {
    localStorage.setItem('caseItem', JSON.stringify(caseItem));
    cy.get('.nextButton').first().click();
  })
});
describe('Landing page', () => {
  it('check accessebility', () => {
    cy.wait(3000);
    cy.injectAxe();
    cy.checkA11y(null, A11Y_OPTIONS);
  });

  it('start application', () => {
    cy.get('.mat-raised-button').first().click();
  })
});

  describe('Broker page', () => {

    beforeEach(() => {
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
    })
    it('check accessebility', () => {
      cy.wait(3000);
      cy.injectAxe();
      cy.checkA11y(null, A11Y_OPTIONS);
    });

    it('has the correct title', () => {
      cy.get('h1').contains('Boligen jeg har kjøpt');
    });

    it('chooses a broker and navigate to collateral page', () => {
      cy.get('mat-select').click();
      cy.get('mat-option').eq(1).click();
      cy.get('mat-checkbox').click();
      cy.get('.nextBtn').click();
    });
  });

describe('collateral page', () => {
  it('check accessebility', () => {
    cy.wait(3000);
    cy.injectAxe();
    cy.checkA11y(null, A11Y_OPTIONS);
  });
});
