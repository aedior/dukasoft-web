describe('section <Menu/> links change url', () => { it('check dashboard link work', () =>  {

    // set menu component to testing
    cy.visit('/panel/dashboard')
    // click menu item of dashboard
    cy.get('a[href*="/panel/dashboard"]').click()
    // check for url of panel
    cy.url().should('include', '/panel/dashboard')
    // need to have a title for panel
    cy.get('h2').contains('dashboard')
})
it('check visit link work', () =>  {

    // set menu component to testing
    cy.visit('/panel/visit')
    // click menu item of visit
    cy.get('a[href*="/panel/visit"]').click()
    // check for url of panel
    cy.url().should('include', '/panel/visit')
    // need to have a title for panel
    cy.get('h2').contains('visit')
})
it('check presonels link work', () =>  {

    // set menu component to testing
    cy.visit('/panel/presonels')
    // click menu item of presonels
    cy.get('a[href*="/panel/presonels"]').click()
    // check for url of panel
    cy.url().should('include', '/panel/presonels')
    // need to have a title for panel
    cy.get('h2').contains('presonels')
})
it('check items link work', () =>  {

    // set menu component to testing
    cy.visit('/panel/items')
    // click menu item of items
    cy.get('a[href*="/panel/items"]').click()
    // check for url of panel
    cy.url().should('include', '/panel/items')
    // need to have a title for panel
    cy.get('h2').contains('items')
})
it('check services link work', () =>  {

    // set menu component to testing
    cy.visit('/panel/services')
    // click menu item of services
    cy.get('a[href*="/panel/services"]').click()
    // check for url of panel
    cy.url().should('include', '/panel/services')
    // need to have a title for panel
    cy.get('h2').contains('services')
}) })