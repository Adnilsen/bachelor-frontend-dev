import { A11Y_OPTIONS } from '../../accessebility-options';

describe('house loan', () => {
  beforeEach(() => {
    cy.restoreLocalStorageCache();
    cy.intercept('GET', 'http://localhost:8080/cases', {
      statusCode: 200,
      body: [
        {
          caseId: 133,
          status: "Klar til å fortsette",
          loanAmount: 2323333,
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
    cy.intercept('GET', 'http://localhost:8080/brokers', {
      statusCode: 200,
      body: [
        {
          brokerId: 1,
          name: "Nordvik"
        }
      ]
    });
    cy.intercept('GET', 'http://localhost:8080/contract/broker/*/socialSecNumber/*', {
      statusCode: 200,
      body:
        {
          id: 1,
          brokerId: 22,
          socialSecurityNr: 22099734456,
          brokerAccount: 3434344,
          purchaseAmount: 2000000,
          purchaseDate: new Date(),
          realEstate: {
            id: 1,
            address: "Solli gata 2",
            type: "Borettslag",
            energyClass: "A",
            cooperativeName: "Turten Borettslag",
            unitNumber: 23,
            sharedDebt: 120_000,
            postalCode: "0165",
            leaseNumber: 44,
            sectionNumber: 3455,
            titleNumber: 4555,
            cadastralNumber: 5666
          }
        }
    });
    cy.intercept('GET', 'http://localhost:8080/cases/*', {
      statusCode: 200,
      body:
        {
          caseId: 133,
          status: "Klar til å fortsette",
          purchaseAmount: 3000000,
          loanAmount: 2400000,
          amount: 2_500_000,
          finished: true,
          date: new Date(),
          income: 600000,
          equity: 20000,
          debt: 10000,
          product: {
            type: "Boliglån Grønn",
            name: "Boliglån Grønn",
            description: "Boliglån Grønn",
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
    });
  });
  afterEach(() => {
    cy.saveLocalStorageCache();
  });


  it('your loan applications page', () => {
    cy.visit('http://localhost:4200/', { timeout: 30000 });
    cy.injectAxe();
    cy.wait(3000);
    cy.checkA11y(null, A11Y_OPTIONS);
    cy.wait(3000);
    cy.get('.nextButton').first().click();
  });

  it('landing page', () => {
    cy.wait(3000);
    cy.url().should('include', 'landing');
    cy.checkA11y(null, A11Y_OPTIONS);
    cy.wait(3000);
    cy.get('.mat-raised-button').first().click();
  })

  it('broker page', () => {
    cy.wait(3000);
    cy.url().should('include', 'broker');
    cy.checkA11y(null, A11Y_OPTIONS);
    cy.wait(3000);
    cy.get('mat-select').first().click();
    cy.wait(3000);
    cy.get('mat-option').first().click();
    cy.get('mat-checkbox').first().click();
    cy.get('.nextBtn').first().click();
  });

  it('collateral page', () => {
    cy.wait(3000);
    cy.url().should('include', 'collateral');
    cy.checkA11y(null, A11Y_OPTIONS);
    cy.wait(3000);
    cy.get('mat-select').first().click();
    cy.wait(3000);
    cy.get('mat-option').eq(2).click();
    cy.get('.mat-raised-button').first().click();
  });

  it('summary page', () => {
    cy.wait(3000);
    cy.url().should('include', 'summary');
    cy.checkA11y(null, A11Y_OPTIONS);
    cy.wait(3000);
    cy.get('mat-checkbox').first().click();
    cy.get('.mat-raised-button').first().click();
  });

  it('loan page', () => {
    cy.wait(3000);
    cy.url().should('include', 'loan');
    cy.checkA11y(null, A11Y_OPTIONS);
    cy.wait(3000);
    cy.get('mat-select').eq(0).click();
    cy.wait(3000);
    cy.get('mat-option').eq(1).click();
    cy.get('mat-select').eq(1).click();
    cy.wait(3000);
    cy.get('mat-option').eq(1).click();
    cy.get('.mat-raised-button').first().click();
  });
  it('loan page', () => {
    cy.wait(3000);
    cy.url().should('include', 'result');
    cy.checkA11y(null, A11Y_OPTIONS);
    cy.wait(3000);
  });
});

