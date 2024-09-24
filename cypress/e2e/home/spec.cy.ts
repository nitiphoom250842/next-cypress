describe('Text Presence Test', () => {
  it('should check if the page contains specific text', () => {
    // Visit your application's URL
    cy.visit('/home'); // Change this to the relevant path or baseUrl

    // Check if the element with ID 't-01' contains the text 'Welcome'
    cy.get('#t-home').should('contain', 'Home');
  });
});


