
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

  it('login fails with wrong password', function() {
    cy.visit('http://localhost:3000')
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('wrong')
    cy.get('#submit_button').click()
    cy.contains('Wrong credentials')
  })
  it('login succed with wrong password', function() {
    cy.visit('http://localhost:3000')
    cy.get('#username').type('MyUser')
    cy.get('#password').type('salainen')
    cy.get('#submit_button').click()
    cy.contains('Logged in!')
  })