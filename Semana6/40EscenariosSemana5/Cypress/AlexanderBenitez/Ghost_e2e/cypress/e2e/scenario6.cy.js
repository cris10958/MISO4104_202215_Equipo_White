describe('Escenario6: Editar un Post Publicado', () => {
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
        cy.screenshot('Escenario6_login')
        cy.get('button.login.gh-btn-login').click()
    })
    cy.wait(1000)
    //logged in
  
    //click on Post Menu
    cy.get('a[id="ember24"]').click()
    cy.screenshot('Escenario6_post_menu')
    cy.wait(1000)

    //Click on Post with status published
    cy.get('span[class="published "]').then(($btn) => {
      for ( var i = 0; i < $btn.length; i++ ) {
          $btn.click()
      }})
    
    //Edit title and body page
    cy.wait(1000)
    var randomNumber = getRandomInt(0, 1000);
    cy.screenshot('Escenario6_before_edit_post')
    cy.get('.gh-editor-title.ember-text-area.gh-input').clear()
    cy.wait(500)
    cy.get('.gh-editor-title.ember-text-area.gh-input').type('Titulo de Post de Prueba Editado: '+randomNumber)
    cy.get('.koenig-editor').clear()
    cy.wait(500)
    cy.get('.koenig-editor').type('Cuerpo  de Post de Prueba Editado ' +randomNumber)
    cy.wait(1000)
    cy.screenshot('Escenario6_after_edit_post')

     
    //click on Update
    cy.get('button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green').click()
    cy.screenshot('Escenario6_update_post')
    cy.wait(500)

    //Verify the creation page
    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('a[id="ember9"]').click()
    cy.wait(1500)
    cy.screenshot('Escenario6_confirm_edit_post')
    cy.get('h3[class="gh-content-entry-title"]').should('include.text', 'Titulo de Post de Prueba Editado: '+randomNumber)

  })
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};