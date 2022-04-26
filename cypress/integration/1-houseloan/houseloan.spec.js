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

  });

  it('check accessebility', () => {
    cy.visit('/', { timeout: 30000 });
    cy.wait(3000);
    cy.injectAxe();
    cy.checkA11y(null, A11Y_OPTIONS);
  });

  it('navigate to landig page', () => {
    cy.get('.nextButton').first().click();
  })
});

