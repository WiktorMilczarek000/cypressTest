describe('My First Test', () => {
    it('Go To Power Farm', () => {
      cy.visit('https://powerfarm.ai/')

      cy.contains('Enroll Now!').click()
    })
  })