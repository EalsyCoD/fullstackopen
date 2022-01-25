describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user ={
      name: 'cod',
      username: 'CoD',
      password: 'ealsy'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.contains('login').click
    cy.get('input:first').type('CoD')
    cy.get('input:last').type('ealsy')
    cy.get('#login-button').click()

    cy.contains('cod logged in')
  })
  it('fails with wrong credentials', function(){
    cy.contains('login').click()
    cy.get('input:first').type('cid')
    cy.get('input:last').type('retert')
    cy.get('#login-button').click()
    cy.contains('Wrong credentials')
  })
})