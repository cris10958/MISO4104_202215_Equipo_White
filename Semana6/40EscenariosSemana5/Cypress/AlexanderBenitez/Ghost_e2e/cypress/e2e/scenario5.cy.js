describe('Escenario5: Crear Nuevo Post', () => {
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
        cy.screenshot('Escenario5_login')
        cy.get('button.login.gh-btn-login').click()
    })
    cy.wait(1000)
    //logged in
  
    //click on Post Menu
    cy.get('a[id="ember24"]').click()
    cy.screenshot('Escenario5_post_menu')
    cy.wait(1000)

    //click on new Post
    cy.get('.ember-view.gh-btn.gh-btn-primary').click()
    cy.screenshot('Escenario5_create_new_post')
    cy.wait(1000)

    //Create body Post
    var randomNumber = getRandomInt(0, 1000);
    cy.get('.gh-editor-title.ember-text-area.gh-input').type('Titulo de Post de Prueba: '+randomNumber)
    cy.get('.koenig-editor').type('Cuerpo de Post de Prueba ' +randomNumber)
    cy.wait(1000)
    cy.screenshot('Escenario5_create_text_post')

    //click on publish
    cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click()
    cy.wait(1000)
    cy.screenshot('Escenario5_accept_publish_post')
    cy.wait(1000)
    cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click()
    cy.wait(1000)
    cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse').click()
    cy.wait(1000)

    //Verify the creation Post
    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('a[id="ember9"]').click()
    cy.wait(1000)
    cy.screenshot('Escenario5_confirm_new_post')
    cy.get('h3[class="gh-content-entry-title"]').should('include.text', 'Titulo de Post de Prueba: '+randomNumber)
  })
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};