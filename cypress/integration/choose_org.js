describe('Choose Organization', () => {
    
    it('Log in to organization', () => {
      cy.get('button').contains('Sign in').click()
    })
  })