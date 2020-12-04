describe('PowerFarm - Create job', () => {

    it('Log in', () => {
      cy.visit('https://staging.powerfarm.ai/')
      cy.fixture('credentials').then((credential)=>{
        cy.get('#PolarisTextField1').type(credential.email)
        cy.get('#PolarisTextField2').type(credential.password, { log: false })
      })
      cy.get('button').contains('Sign in').click()
    })
    it('Log in to organization', () => {
        cy.get('button').contains('Sign in').click()
      })
    it('Go to the workflows', () => {
        cy.get('.Polaris-Navigation__Text').contains('Workflows').click()
    })
    it('Filter by me', () => {
        cy.get('#Activator-authorFilter').click({force: true})
        cy.get('.Polaris-ChoiceList__Choices').contains('Wiktor Milczarek').click()
    })
    it('Create Job', () => {
        cy.contains('Walking').click()
        cy.contains('Create job').click()
        cy.contains('Save and go to Arguments collections').click()
        cy.contains('W test').click()
        cy.contains('Save and go to Arguments values').click()
        cy.contains('Save and go to Schedule').click()
        cy.get('.Polaris-Modal-Footer').contains('Create job').click()
        cy.contains('Go to the job details').click()
    })
    it('Log out', () => {
        cy.wait(30000)
        cy.get('.Polaris-TopBar-Menu__Activator').click()
        cy.get('.Polaris-ActionList').contains('Log out').click()
    })
  })