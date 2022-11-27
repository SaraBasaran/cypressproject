/// <reference types="cypress"/>


describe('Koala Resort Hotel', () => {

it('Login Test', () => {

    cy.visit('https://qa-environment.koalaresorthotels.com/')

   //1)contains('Text')
   // cy.contains('Log in').click()

   //2)contains('locator', Text).click()
   //cy.contains('[class="nav-link"]' , 'Log in').click()
   
   //3)contains('tag name', text)
   //cy.contains('li', 'Log in').click()

   //4)contains('text', matchCase:false).click() ==>by this way case sensitivity will be ignored
    cy.contains('log in', {matchCase:false}).click()


    //ASSERT

    //1)have.text
    cy.get('#navLogon > .nav-link').should('have.text', "Log in")

    //2. cy.url().should()
    cy.contains('Log in').click()
    cy.url().should('include', 'Account/Logon')

    //3.be.visible
    cy.get('.row > .mb-4').should('be.visible')

    //4.cy.title()
    cy.title().should('equal', 'KoalaResortHotels - Log in')

    //5. include.text
    cy.get('.row > .mb-4').should('include.text', 'Log in')

    //Total link count
    cy.get('li a').should('have.length', 29)

    //find(): To find sub elements of an html specific element

    cy.get('li').find('a[href="/Rooms/320"]').should("have.text", "Twin 2")


    //within()
    cy.get('div.categories').within(()=>{

        cy.get('a[href="/Rooms/320"]').click()

        //Note:Weblements should be located by get() firstly, if we cannot find it by using get(), we can 
        //try to fnd the Webelement by using find() however f we cannot find it with fnd we can try within
        //Parent tag ==>div.'a[href="/Rooms/320"] ==> child tag
    })

})

})