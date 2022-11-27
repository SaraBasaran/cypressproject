///<reference types="cypress"/>

describe('Koala Resort Hotel', () => {

    it('Login  Test', () => {
    
    cy.visit('https://qa-environment.koalaresorthotels.com/')
    //1.way:
    //cy.get('#navLogon > .nav-link').click()

    //2.way:
    cy.contains('Log in').click()
    cy.url().should('include', 'Account/Logon')

    //username:Manager
    cy.get('#UserName').type('Manager')

    //password:Manager1!
    //1.way
   // cy.get('#Password').type('Manager1!')
   //cy.get('#btnSubmit').click()
   //2.yol
   cy.get('#Password').type('Manager1!{enter}')
   cy.get('.hidden-480').click()


    })
      
    })