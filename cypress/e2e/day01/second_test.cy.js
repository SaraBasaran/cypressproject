/// <reference types="cypress"/>

context('My Second Test', () => {

    //we can use context instead of describe

    beforeEach('It will work before each test', () => {
        cy.visit('/')
    })
    it('URL  Test', () => {
    
    cy.url().should('include', 'google')

    cy.url().should('eq', 'https://www.google.com/')
    })
    
    
    it('Title test', () => {
        cy.title().should('include', 'Google')
        cy.title().should('eq', 'Google')    
        
    })
    
    
    it('Search Test', () => {
    
        cy.get('.SDkEP').type('Cypress.io{enter}') //==> cypress gives auotomatically locators

        //cy.get("input[name='q']").type('Cypress.io{enter}')
        // get gets the locator
        // type()==> sendText
        // {enter}==>presses Enter button 
    
    
    })
    
    
    it('Search test', () => {
    
        cy.get('.SDkEP', {timeout: 3000}).type('Cypress.io{enter}')
        
    })

    //if we want to skip the tests we should type it.skip('method name')....
    
    it('Click Test', () => {

        //if we want to run only one test then we should type it.only('method name')...<z"      a

        cy.get('.gb_A').click()
    
    })

})

