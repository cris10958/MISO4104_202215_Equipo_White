describe('Escenario1: Crear Nueva Pagina', () => {
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
        cy.screenshot('Escenario1_login')
        cy.get('button.login.gh-btn-login').click()
    })
    cy.wait(1000)
    //logged in
  
    //click on Page Menu
    cy.get('a[id="ember26"]').click()
    cy.screenshot('Escenario1_page_menu')
    cy.wait(1000)
    

    //click on new Page
    cy.get('.ember-view.gh-btn.gh-btn-primary').click()
    cy.screenshot('Escenario1_create_new_page')
    cy.wait(1000)

    //Create body Page
    var randomNumber = getRandomInt(0, 1000);
    cy.get('.gh-editor-title.ember-text-area.gh-input').type('Titulo de Pagina de Prueba: '+randomNumber)
    cy.get('.koenig-editor').type('Cuerpo de Pagina de Prueba ' +randomNumber)
    cy.wait(1000)
    cy.screenshot('Escenario1_create_text_page')
   

    //click on publish
    cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click()
    cy.wait(1000)
    cy.screenshot('Escenario1_accept_publish_page')
    cy.wait(1000)
    cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click()
    cy.wait(1000)
    cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse').click()
    cy.wait(1000)
    

    //Verify the creation page
    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('a[id="ember11"]').click()
    cy.wait(1000)
    cy.screenshot('Escenario1_confirm_new_page')
    cy.get('h3[class="gh-content-entry-title"]').should('include.text', 'Titulo de Pagina de Prueba: '+randomNumber)
  })
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};