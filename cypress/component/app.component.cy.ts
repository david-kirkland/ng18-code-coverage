import { AppComponent } from 'src/app/app.component';

describe('app.component.cy.ts', () => {
  beforeEach(() => {
    cy.mount(AppComponent);
  });

  // You can also run tests against the UI, but we'll leave this commented out for now.
  /*
  it('has text', () => {
    cy.contains('app is running');
  });

  it('test button', () => {
    cy.get('#test-button').click();
    cy.get('#test-data').contains('2');
    cy.get('#test-button').click();
    cy.get('#test-data').contains('3');
  });
  */

  it('unreachable', () => {
    const component = new AppComponent();
    component.unreachableFromUI();
    expect(component.unreachableData).to.equal(2);
  });
});
