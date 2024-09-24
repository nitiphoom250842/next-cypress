describe('Text Presence Test', () => {
  it('should check if the page contains specific text and interact with elements', () => {
    // Visit your application's URL
    cy.visit('/home'); // Change this to the relevant path or baseUrl

    // Check if the element with ID 't-01' contains the text 'My Home Page'
    cy.get('#t-01').should('contain', 'My Home Page');
    cy.screenshot('test-screenshot');

    // Add text 'nitiphoom' into the input field with ID 'in-name'
    cy.get('#in-name').type('nitiphoom');
    cy.screenshot('test-screenshot');


    // Check if the 'Content' button is visible
    cy.get('#bt-to-content').should('be.visible');

    // Click the 'Content' button
    cy.get('#bt-to-content').click();

    // After clicking, you may want to verify navigation to the '/content' page
    cy.url().should('include', '/content');
    cy.screenshot('test-screenshot');

  });
});
