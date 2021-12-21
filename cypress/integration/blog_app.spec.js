
describe('Note app', function() {
    it('login form is shown', function() {
      cy.visit('http://localhost:3000')
      cy.contains('Enter username and password')
      cy.get('form').within(() => {
      cy.get('[id=username]').should('exist')
      cy.get('[id=password]').should('exist')
    })
    })
  })