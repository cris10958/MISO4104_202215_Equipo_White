describe('Escenario2: Editar una Pagina Publicada', () => {
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
        cy.screenshot('Escenario2_login')
        cy.get('button.login.gh-btn-login').click()
    })
    cy.wait(1000)
    //logged in
  
    //click on Page Menu
    cy.get('a[id="ember26"]').click()
    cy.screenshot('Escenario2_page_menu')
    cy.wait(1000)

    //Click on page with status published
    cy.get('span[class="published "]').then(($btn) => {
      for ( var i = 0; i < $btn.length; i++ ) {
          $btn.click()
      }})
    
    //Edit title and body page
    cy.wait(1000)
    var randomNumber = getRandomInt(0, 1000);
    cy.screenshot('Escenario2_before_edit_page')
    cy.get('.gh-editor-title.ember-text-area.gh-input').clear()
    cy.wait(500)
    cy.get('.gh-editor-title.ember-text-area.gh-input').type('Titulo de Pagina de Prueba Editada: '+randomNumber)
    cy.get('.koenig-editor').clear()
    cy.wait(500)
    cy.get('.koenig-editor').type('Cuerpo de Pagina de Prueba Editada ' +randomNumber)
    cy.wait(1000)
    cy.screenshot('Escenario2_after_edit_page')

     
    //click on Update
    cy.get('button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green').click()
    cy.screenshot('Escenario2_update_page')
    cy.wait(500)

    //Verify the creation page
    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('a[id="ember11"]').click()
    cy.wait(1000)
    cy.screenshot('Escenario2_confirm_edit_page')
    cy.get('h3[class="gh-content-entry-title"]').should('include.text', 'Titulo de Pagina de Prueba Editada: '+randomNumber)

  })
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};