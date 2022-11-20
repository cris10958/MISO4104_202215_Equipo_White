describe('Escenario4: Borrar Pagina', () => {
  beforeEach(()=>{
      
    Cypress.Screenshot.defaults({
      overwrite: true,
      capture: 'runner',
      scale: true
    })

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
  })
  it('Login to Ghost', ()=>{
    //Login to Ghost
    cy.get('form').within(() => {
        cy.get('input[id="ember6"]').type('a.benitezm@uniandes.edu.co')
        cy.get('input[id="ember8"]').type('TQ2uKv*$rR3Sa5!')
        cy.screenshot('Escenario4_login')
        cy.get('button.login.gh-btn-login').click()
    })
    cy.wait(1000)
    //logged in
  
    //click on Page Menu
    cy.get('a[id="ember26"]').click()
    cy.screenshot('Escenario4_page_menu')
    cy.wait(1000)

    //Calculate Page item before delete
    var sizePublished = 0;
    cy.get('h3[class="gh-content-entry-title"]').then(($btnPublished) => {
      sizePublished = $btnPublished.length
    })

    //Click on page with status published
    cy.get('h3[class="gh-content-entry-title"]').then(($btn2) => {
      for ( var i = 0; i < $btn2.length; i++ ) {
          $btn2.click()
      }})
    
    //Click on setting for Page  
    cy.get('button.gh-btn.gh-btn-editor.gh-btn-icon.icon-only').click()
    cy.wait(1000)
    cy.screenshot('Escenario4_setting_page_menu')
    
    //Click on delete Page  
    cy.get('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()

    //Click for confirm de delete Page
    cy.wait(1000)
    cy.screenshot('Escenario4_delete_page_menu')
    cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click()
    cy.wait(1000)
    cy.screenshot('Escenario4_confirm_delete_page_menu')

    //Calculate Page item after delete
    var sizePublishedNew = 0;
    cy.get('h3[class="gh-content-entry-title"]').then(($btnPublishedNew) => {
      sizePublishedNew = $btnPublishedNew.length
      expect(sizePublishedNew).to.be.below(sizePublished)
    })
  })
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};