describe('Escenario8: Borrar Post', () => {
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
        cy.screenshot('Escenario8_login')
        cy.get('button.login.gh-btn-login').click()
    })
    cy.wait(1000)
    //logged in
  
    //click on Post Menu
    cy.get('a[id="ember24"]').click()
    cy.screenshot('Escenario8_post_menu')
    cy.wait(1000)

    //Calculate Post item before delete
    var sizePublished = 0;
    cy.get('h3[class="gh-content-entry-title"]').then(($btnPublished) => {
      sizePublished = $btnPublished.length
    })

    //Click on Post with status published
    cy.get('h3[class="gh-content-entry-title"]').then(($btn2) => {
      for ( var i = 0; i < $btn2.length; i++ ) {
          $btn2.click()
      }})
    
    //Click on setting for Post  
    cy.get('button.gh-btn.gh-btn-editor.gh-btn-icon.icon-only').click()
    cy.wait(1000)
    cy.screenshot('Escenario8_setting_post_menu')
    
    //Click on delete Post  
    cy.get('button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()

    //Click for confirm de delete Post
    cy.wait(1000)
    cy.screenshot('Escenario8_delete_post_menu')
    cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click()
    cy.wait(1000)
    cy.screenshot('Escenario8_confirm_delete_post_menu')

    //Calculate Post item after delete
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