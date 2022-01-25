describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user ={
      name: 'test',
      username: 'test',
      password: 'test'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.contains('username')
    cy.contains('password')
    cy.contains('login')
  })
  describe('Login', function(){
    it('succeeds with correct credentials', function(){
      cy.contains('login').click()
      cy.get('#username').type('test')
      cy.get('#password').type('test')
      cy.get('#login-button').click()

      cy.contains('test logged in')
      cy.contains('Logout').click()
    })


    it('fails with wrong credentials', function () {
      cy.contains('login').click()
      cy.get('#username').type('test')
      cy.get('#password').type('t')
      cy.get('#login-button').click()

      cy.get('#notification').should('contain', 'Wrong credentials')
    })
  })
  describe('when logged in', function(){
    beforeEach(function () {
      cy.contains('login').click()
      cy.get('#username').type('test')
      cy.get('#password').type('test')
      cy.get('#login-button').click()
    })

    it('a new blog can be created', function () {
      cy.contains('create new Blog').click()
      cy.get('#title').type('test Blog')
      cy.get('#author').type('test')
      cy.get('#url').type('http://test.com')
      cy.get('#create').click()
      cy.contains('new blog not added')
    })
  })
})


