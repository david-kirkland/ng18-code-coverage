describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits the initial project page', () => {
    cy.contains('app is running');
  });

  it('test button', () => {
    cy.get('#test-button').click();
    cy.get('#test-data').contains('2');
  });
});
