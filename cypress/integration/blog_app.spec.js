
describe('Blog app', function() {
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
  describe('When logged in', function() {
    beforeEach(function() { 
      cy.request('POST', 'http://localhost:3001/api/login', {
        username: 'MyUser', password: 'salainen'
      }).then(response => {
        localStorage.setItem('loggedNoteappUser', JSON.stringify(response.body))
        cy.visit('http://localhost:3000')
      })
    })

    it('5.19 a new blog can be created', function() {
      cy.get('#toggleablebutton_newblog').click()
      cy.contains('Create new')
      cy.get('#Title1').type('QQQ')
      cy.get('#author').type('salainen')
      cy.get('#url').type('www.google.com')
      cy.get('#submit').click()
      cy.reload()
      cy.contains('QQQ')
      
    })

  })
  