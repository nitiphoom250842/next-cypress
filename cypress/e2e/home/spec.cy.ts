describe('Text Presence Test', () => {
  it('should check if the page contains specific text', () => {
    // Visit your application's URL
    cy.visit('/'); // Change this to the relevant path or baseUrl

    // Check if specific text exists anywhere on the page
    cy.contains('Expected Text').should('exist');

    // Alternatively, check text inside a specific element (e.g., a <h1> tag)
    cy.get('h1').contains('Welcome to Our Website').should('be.visible');

    // You can also check for text inside any other element like div, span, etc.
    cy.get('.my-class').contains('Some Inner Text').should('exist');
  });
});
