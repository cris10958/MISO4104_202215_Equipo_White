describe('Escenario10: Logout Session', () => {
  beforeEach(()=>{
      
    Cypress.Screenshot.defaults({
      overwrite: true,
      capture: 'runner'
    })

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
  })
  it('Login to Ghost', ()=>{
    //Login to Ghost
    cy.get('form').within(() => {
        cy.get('input[id="ember6"]').type('a.benitezm@uniandes.edu.co')
        cy.get('input[id="ember8"]').type('TQ2uKv*$rR3Sa5!')
        cy.screenshot('Escenario10_login')
        cy.get('button.login.gh-btn-login').click()
    })
    cy.wait(1000)
    //logged in
  
    //click on Logout
    cy.get('div[role=button].ember-view.ember-basic-dropdown-trigger.outline-0.pointer').click()
    cy.wait(500)
    cy.screenshot('Escenario10_options')
    cy.get('a[href="#/signout/"]').click()
    cy.wait(500)
    cy.screenshot('Escenario10_logout')

    //validate login page again
    cy.get("button.login.gh-btn-login").invoke('text').then((text) => {
      expect(text.trim()).equal('Sign in →')
    });

  })
})