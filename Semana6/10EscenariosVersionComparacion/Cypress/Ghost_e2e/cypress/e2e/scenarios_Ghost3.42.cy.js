import faker from '@faker-js/faker';

function login() {
  cy.get('input[name=identification]').type('a.benitezm@uniandes.edu.co')
  cy.wait(500)
  cy.get('input[name=password]').type('TQ2uKv*$rR3Sa5!')
  cy.wait(500)
  cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click({force: true})
  cy.wait(1000)
}

function logout() {
  cy.get('div[role=button].ember-view.ember-basic-dropdown-trigger.outline-0.pointer').click({force: true})
  cy.wait(500)
  cy.get('a[href="#/signout/"]').click()
  cy.wait(500)
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const takeScreenshot = function screenshotInit(initVal) {
  let number = initVal;
  Cypress.Screenshot.defaults({
      overwrite: true
  })
  return function (filename, time=4000) {
      cy.screenshot(`${number}-3.42-${filename}`)
      number++
  }
}(1)

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

function hideExportOptions() {
  cy.get('ul[class="dropdown gh-member-actions-menu dropdown-menu dropdown-triangle-top-right closed fade-out closed ember-view"]').invoke('remove')
  cy.wait(500)
}

function ClickOnMembersLink() {
  cy.get('a[href="#/members/"].ember-view').first().click()
  cy.wait(500)
}

function IsInMembersView() {
  cy.contains('h2.gh-canvas-title', 'Members')
  cy.wait(500)
}

function ClickOnNewMembersLink() {
  cy.get('a[href="#/members/new/"]').first().click()
  cy.wait(500)
}

function IsInNewMembersView() {
  cy.contains('h2.gh-canvas-title', 'New member')
  cy.wait(500)
}

function FillNewMemberForm() {
  var name = faker.word.adjective()
  var email = name+'@gmail.com'
  var note = faker.lorem.sentence(10)
  cy.get('input[id=member-name]').type(name)
  cy.get('input[id=member-email]').type(email)
  cy.get('textarea[id=member-note]').type(note)
  return name
}

function filUpdateMember() {
  var name = faker.word.adjective()
  var note = faker.lorem.sentence(10)
  cy.get('input[id=member-name]').focus()
  cy.get('input[id=member-name]').clear({force: true})
  cy.get('input[id=member-name]').type(name, {force: true})
  cy.get('textarea[id=member-note]').focus()
  cy.get('textarea[id=member-note]').clear({force: true})
  cy.get('textarea[id=member-note]').type(note, {force: true})
  return name
}

function clickOnCurrentLink() {
  cy.get('a.active.ember-view').click()
  cy.wait(500)
}

function saveForm() {
  cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
  cy.wait(500)
}

function isMemberInList(name) {
  cy.contains('h3.gh-members-list-name', name)
  cy.wait(500)
}

function clickOnTagLink() {
  cy.get('a[href="#/tags/"].ember-view').first().click()
      cy.wait(700)
}

function isInTagView() {
  cy.contains('h2.gh-canvas-title', 'Tags')
      cy.wait(700)
}

function getRandomMember() {
  cy.get('.members-list.gh-list>li:nth-child(3)>a').then(($trs) =>{
      const tr = $trs.get(getRandomInt(0, $trs.length - 1))
      cy.get(tr).click()
  })
  cy.wait(500)
}

function FillChangeTittle() {
  var randomNumber = getRandomInt(0, 1000);
  cy.get('input[id=ember101]').focus()
  cy.get('input[id=ember101]').clear({force: true})
  cy.get('input[id=ember101]').type('Nuevo Titulo ' + randomNumber, {force: true})
  cy.wait(1000)
}

function clickOnSpecificLink (link) {
      cy.get('a[href="'+link+'"].ember-view').click()
      cy.wait(1000)
}


// //--------- FIRST SCENARIO CREATE A NEW MEMBER -----

describe('should create a new member', function() {
  beforeEach(() => {
      Cypress.Cookies.preserveOnce('ghost-admin-api-session')
  })
  after(() => {
      cy.clearCookie('ghost-admin-api-session')
  })
  it('should visit ghost admin', function() {
      cy.visit('http://localhost:3001/ghost/');
      cy.wait(1000);
  })
  it('should login', function() {
      takeScreenshot('before-login')
      login()
      takeScreenshot('after-login')
  })
  it('should click on members link', function () {
      ClickOnMembersLink()
      IsInMembersView()
  })
  it('should click on New member', function () {
      takeScreenshot('before-creating-new-member')
      ClickOnNewMembersLink()
      IsInNewMembersView()
      
  })
  it('should create a new member', function () {
      let name = FillNewMemberForm()
      saveForm()
      clickOnCurrentLink()
      isMemberInList(name)
      hideExportOptions()
      takeScreenshot('after-creating-new-member')
  })
  it('should logout', function() {
      logout()
  })
})

//--------- SECOND SCENARIO EDIT AN EXISTING MEMBER -----

describe('should edit an existing member', function() {
  beforeEach(() => {
      Cypress.Cookies.preserveOnce('ghost-admin-api-session')
  })
  after(() => {
      cy.clearCookie('ghost-admin-api-session')
  })
  it('should visit ghost admin', function() {
      cy.visit('http://localhost:3001/ghost/');
      cy.wait(1000);
  })
  it('should login', function() {
      login()
  })
  it('should click on members link', function () {
      ClickOnMembersLink()
      IsInMembersView()
  })
  it('should click on any member', function () {
      //hideExportOptions()
      takeScreenshot('before-updating-a-member')
      getRandomMember()
  })
  it('should edit an existing member', function () {
      let name = filUpdateMember()
      saveForm()
      clickOnCurrentLink()
      isMemberInList(name)
      //hideExportOptions()
      takeScreenshot('after-updating-a-member')
  })
  it('should logout', function() {
      logout()
  })
})

//--------- THIRD SCENARIO CREATE A PUBLIC TAG -----

describe('should create a new public tag', function() {
  beforeEach(() => {
      Cypress.Cookies.preserveOnce('ghost-admin-api-session')
  })
  after(() => {
      cy.clearCookie('ghost-admin-api-session')
  })
  it('should visit ghost admin', function() {
      cy.visit('http://localhost:3001/ghost/');
      cy.wait(1000);
  })
  it('should login', function() {
      login()
  })
  it('should click on tags link', function () {
      clickOnTagLink()
      isInTagView()
  })
  it('should click on New tag', function () {
      takeScreenshot('before-creating-a-public-tag')
      cy.get('a[href="#/tags/new/"].ember-view').first().click()
      cy.wait(700)
      cy.contains('h2.gh-canvas-title', 'New tag')
      cy.wait(700)
  })
  it('should create a new tag', function () {
      let name = faker.word.adjective()
      let color = faker.random.numeric(6)
      var description = faker.lorem.sentence(10)
      cy.get('input[id=tag-name]').type(name)
      cy.get('input[name="accent-color"].gh-input').type(color)
      cy.get('textarea[id=tag-description]').type(description)
      cy.wait(1000)
      saveForm()
      clickOnTagLink()
      cy.contains('h3.gh-tag-list-name', name)
      takeScreenshot('after-creating-a-public-tag')
  })
  it('should logout', function() {
      logout()
  })
})

//--------- FOURTH  SCENARIO UPDATE A PUBLIC TAG -----

describe('should edit an existing public tag', function() {
  beforeEach(() => {
      Cypress.Cookies.preserveOnce('ghost-admin-api-session')
  })
  after(() => {
      cy.clearCookie('ghost-admin-api-session')
  })
  it('should visit ghost admin', function() {
      cy.visit('http://localhost:3001/ghost/');
      cy.wait(1000);
  })
  it('should login', function() {
      login()
  })
  it('should click on tags link', function () {
      clickOnTagLink()
      isInTagView()
  })
  it('should click on any public tag', function () {
      takeScreenshot('before-updating-a-public-tag')
      cy.get('ol.tags-list.gh-list  > li.gh-list-row.gh-tags-list-item').then(($lis) =>{
          const li = $lis.get(getRandomInt(0, $lis.length - 1))
          cy.get(li).click()
      })
      cy.wait(1000)
  })
  it('should edit an existing public tag', function () {
      let name = faker.word.adjective()
      let color = faker.random.numeric(6)
      var description = faker.lorem.sentence(10)
      cy.get('input[id=tag-name]').focus()
      cy.get('input[id=tag-name]').clear({force: true})
      cy.get('input[id=tag-name]').type(name, {force: true})
      cy.get('input[name="accent-color"].gh-input').focus()
      cy.get('input[name="accent-color"].gh-input').clear({force: true})
      cy.get('input[name="accent-color"].gh-input').type(color, {force: true})
      cy.get('textarea[id=tag-description]').focus()
      cy.get('textarea[id=tag-description]').clear({force: true})
      cy.get('textarea[id=tag-description]').type(description, {force: true})

      saveForm()
      clickOnTagLink()
      cy.contains('h3.gh-tag-list-name', name)
      takeScreenshot('after-updating-a-public-tag')
  })
  it('should logout', function() {
      logout()
  })
})

//---------  FIFTH SCENARIO CHANGE A TITLE SITE -----

describe('should edit a tittle site', function() {
  beforeEach(() => {
      Cypress.Cookies.preserveOnce('ghost-admin-api-session')
  })
  after(() => {
      cy.clearCookie('ghost-admin-api-session')
  })
  it('should visit ghost admin', function() {
      cy.visit('http://localhost:3001/ghost/');
      cy.wait(1000);
  })
  it('should login', function() {
      login()
  })
  it('should click on General link', function () {
      clickOnSpecificLink('#/settings/general/')
      cy.contains('h2.gh-canvas-title', 'General settings')
      cy.wait(700)
  })
  it('should Expand Title and Description', function () {
      cy.get('button.gh-btn').eq(1).click()
      cy.wait(1000) 
      takeScreenshot('before-change-tittle-site')   
      
  })
  it('should Change Title', function () {
      FillChangeTittle()
      saveForm()    
      takeScreenshot('after-change-tittle-site')
    })
  
  it('should logout', function() {
      logout()
  })
})
