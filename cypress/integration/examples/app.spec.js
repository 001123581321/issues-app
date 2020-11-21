/// <reference types="cypress" />

context('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('.type() - type into a DOM element', () => {

    cy.get('[class*=issuesPage_]')

  })
})
