describe('Escenario3: Reversar una Pagina Publicada', () => {
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
        cy.screenshot('Escenario3_login')
        cy.get('button.login.gh-btn-login').click()
    })
    cy.wait(1000)
    //logged in
  
    //click on Page Menu
    cy.get('a[id="ember26"]').click()
    cy.screenshot('Escenario3_page_menu')
    cy.wait(1000)

    //Calculate Draft item before unpublish
    var sizeDraft = 0;
    cy.get('span[class="draft"]').then(($btnDraft) => {
      sizeDraft = $btnDraft.length
    })

    //Click on page with status published
    cy.get('span[class="published "]').then(($btn2) => {
      for ( var i = 0; i < $btn2.length; i++ ) {
          $btn2.click()
        }})

    //click on Unpublish
    cy.wait(1000)
    cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger').click()
    cy.wait(500)
    cy.screenshot('Escenario3_unpublish_page')
    cy.get('button.gh-revert-to-draft').click()
    cy.wait(1000)
    cy.screenshot('Escenario3_confirm_unpublish_page')

    // Verify the Draft page
    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('a[id="ember11"]').click()
    cy.wait(1000)
        
    cy.screenshot('Escenario3_view_draft_page')
    //Calculate Draft item after unpublish
    var sizeDraftNew = 0;
    cy.get('span[class="draft"]').then(($btnDraftNew) => {
      sizeDraftNew = $btnDraftNew.length
      expect(sizeDraft).to.be.below(sizeDraftNew)
    })

  })
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};