describe('Login to Power Farm', () => {
    
    it('Log in', () => {
      cy.visit('https://staging.powerfarm.ai/')
      cy.fixture('credentials').then((credential)=>{
        cy.get('#PolarisTextField1').type(credential.email)
        cy.get('#PolarisTextField2').type(credential.password)
      })
      cy.get('button').contains('Sign in').click()
    })
    it('Log in to organization', () => {
        cy.get('button').contains('Sign in').click()
      })
  })