describe('Interface', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has content', () => {
    cy.get('section').its('length').should('be.gt', 0)
  })
})
