describe('Escenario9: Change Title Site', () => {
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
        cy.screenshot('Escenario9_login')
        cy.get('button.login.gh-btn-login').click()
    })
    cy.wait(1000)
    //logged in

    //click on Setting Menu
    cy.get('a[id="ember32"]').click()
    cy.wait(1000)
    cy.screenshot('Escenario9_setting_menu')

    //click on General Options
    cy.get('a[id="ember57"]').click()
    cy.wait(1000)
    cy.screenshot('Escenario9_general_options')

    //click on Expand Title and Description
    cy.get('button.gh-btn').eq(1).click()
    cy.wait(1000)    
    cy.screenshot('Escenario9_before_change')

    //Change Title
    var randomNumber = getRandomInt(0, 1000);
    cy.get('input[id="ember101"]').clear()
    cy.wait(1000)
    cy.get('input[id="ember101"]').type('Nuevo Titulo ' + randomNumber)    
    cy.wait(1000)        
    cy.screenshot('Escenario9_after_change')

    //Save New Title
    cy.get('button.gh-btn').eq(0).click()
    cy.wait(2000)

    //Verify new Title
    cy.get(".gh-nav-menu-details-sitetitle").invoke('text').then((text) => {
      expect(text.trim()).equal('Nuevo Titulo '+randomNumber)
    });
    cy.screenshot('Escenario9_new_title')
  })
})

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };