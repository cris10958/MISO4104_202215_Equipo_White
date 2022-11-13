import faker from '@faker-js/faker';

function login() {
    cy.get('input[name=identification]').type('a.contrerast@uniandes.edu.co')
    cy.wait(500)
    cy.get('input[name=password]').type('desarrollado')
    cy.wait(500)
    cy.get('button[id=ember10]').click({force: true})
    cy.wait(1000)
}

function logout() {
    cy.get('div[role=button].ember-view.ember-basic-dropdown-trigger.outline-0.pointer').click()
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
    return function (filename, time=1000) {
        cy.wait(time)
        cy.screenshot(`${number}-${filename}`)
        number++
        cy.wait(time)
    }
}(1)

//--------- FIRST SCENARIO CREATE A NEW MEMBER -----

describe('should create a new member', function() {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    after(() => {
        cy.clearCookie('ghost-admin-api-session')
    })
    it('should visit ghost admin', function() {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
    })
    it('should login', function() {
        takeScreenshot('before-login')
        login()
        takeScreenshot('after-login')
        cy.contains('h2.gh-canvas-title', 'Dashboard')
        cy.wait(700)
    })
    it('should click on members link', function () {
        cy.get('a[id=ember35].ember-view').click()
        cy.wait(700)
        cy.contains('h2.gh-canvas-title', 'Members')
        cy.wait(700)
    })
    it('should click on New member', function () {
        takeScreenshot('before-creating-new-member')
        cy.get('div[class="view-actions-top-row"] > a[href="#/members/new/"]').click()
        cy.wait(700)
        cy.contains('h2.gh-canvas-title', 'New member')
        cy.wait(700)
        
    })
    it('should create a new member', function () {
        var name = faker.name.findName()
        var email = `${name.replace(/\s/g, "")}@gmail.com`
        var note = faker.lorem.sentence(10)
        cy.get('input[id=member-name]').type(name)
        cy.get('input[id=member-email]').type(email)
        cy.get('textarea[id=member-note]').type(note)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
        cy.wait(1000)
        cy.get('a.active.ember-view').click()
        cy.wait(700)
        cy.contains('h3.gh-members-list-name', name)
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
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
    })
    it('should login', function() {
        login()
        cy.contains('h2.gh-canvas-title', 'Dashboard')
        cy.wait(700)
    })
    it('should click on members link', function () {
        cy.get('a[id=ember35].ember-view').click()
        cy.wait(700)
        cy.contains('h2.gh-canvas-title', 'Members')
        cy.wait(700)
    })
    it('should click on any member', function () {
        takeScreenshot('before-updating-a-member')
        cy.get('tbody.ember-view > tr').then(($trs) =>{
            const tr = $trs.get(getRandomInt(0, $trs.length - 1))
            cy.get(tr).click()
        })
        cy.wait(1000)
    })
    it('should edit an existing member', function () {
        var name = faker.name.findName()
        var note = faker.lorem.sentence(10)
        cy.get('input[id=member-name]').focus().clear().type(name)
        cy.get('textarea[id=member-note]').focus().clear().type(note)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
        cy.wait(1000)
        cy.get('a.active.ember-view').click()
        cy.wait(700)
        cy.contains('h3.gh-members-list-name', name)
        takeScreenshot('after-updating-a-member')
    })
    it('should logout', function() {
        logout()
    })
})

//--------- THIRD SCENARIO DELETE AN EXISTING MEMBER -----

describe('should delete an existing member', function() {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    after(() => {
        cy.clearCookie('ghost-admin-api-session')
    })
    it('should visit ghost admin', function() {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
    })
    it('should login', function() {
        login()
        cy.contains('h2.gh-canvas-title', 'Dashboard')
        cy.wait(700)
    })
    it('should click on members link', function () {
        cy.get('a[id=ember35].ember-view').click()
        cy.wait(700)
        cy.contains('h2.gh-canvas-title', 'Members')
        cy.wait(700)
    })
    it('should click on any member', function () {
        takeScreenshot('before-deleting-a-member')
        cy.get('tbody.ember-view > tr').then(($trs) =>{
            const tr = $trs.get(getRandomInt(0, $trs.length - 1))
            cy.get(tr).click()
        })
        cy.wait(1000)
    })
    it('should delete member', function () {
        cy.get('h2[class="gh-canvas-title"]').invoke('text').as('memberName')
        cy.wait(1000)
        cy.get('button[role=button].gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view').click();
        cy.wait(1000)
        cy.get('button[type=button].mr2 > span[class=red]').click()
        cy.wait(1000)
        cy.get('div[class="modal-footer"] > button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click()
        cy.wait(1000)
        cy.get('@memberName').then($name => {
            cy.get('body').then($body => {
                if ($body.find('table[class="gh-list"]').length > 0) {
                    cy.get('tbody.ember-view tr').should('not.have.text', $name)
                }
            })
        })
        takeScreenshot('after-deleting-a-member')
    })
    it('should logout', function() {
        logout()
    })
})

//--------- FOURTH SCENARIO CREATE A PUBLIC TAG -----

describe('should create a new public tag', function() {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    after(() => {
        cy.clearCookie('ghost-admin-api-session')
    })
    it('should visit ghost admin', function() {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
    })
    it('should login', function() {
        login()
        cy.contains('h2.gh-canvas-title', 'Dashboard')
        cy.wait(700)
    })
    it('should click on tags link', function () {
        cy.get('a[href="#/tags/"].ember-view').click()
        cy.wait(700)
        cy.contains('h2.gh-canvas-title', 'Tags')
        cy.wait(700)
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
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
        cy.wait(1000)
        cy.get('a.active.ember-view').click()
        cy.wait(700)
        cy.contains('h3.gh-tag-list-name', name)
        takeScreenshot('after-creating-a-public-tag')
    })
    it('should logout', function() {
        logout()
    })
})

//--------- FIFTH SCENARIO UPDATE A PUBLIC TAG -----

describe('should edit an existing public tag', function() {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    after(() => {
        cy.clearCookie('ghost-admin-api-session')
    })
    it('should visit ghost admin', function() {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
    })
    it('should login', function() {
        login()
        cy.contains('h2.gh-canvas-title', 'Dashboard')
        cy.wait(700)
    })
    it('should click on tags link', function () {
        cy.get('a[href="#/tags/"].ember-view').click()
        cy.wait(700)
        cy.contains('h2.gh-canvas-title', 'Tags')
        cy.wait(700)
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
        cy.get('input[id=tag-name]').focus().clear().type(name)
        cy.get('input[name="accent-color"].gh-input').focus().clear().type(color)
        cy.get('textarea[id=tag-description]').focus().clear().type(description)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
        cy.wait(1000)
        cy.get('a.active.ember-view').click()
        cy.wait(700)
        cy.contains('h3.gh-tag-list-name', name)
        takeScreenshot('after-updating-a-public-tag')
    })
    it('should logout', function() {
        logout()
    })
})

//--------- SIXTH SCENARIO DELETE A PUBLIC TAG -----

describe('should delete an existing public tag', function() {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    after(() => {
        cy.clearCookie('ghost-admin-api-session')
    })
    it('should visit ghost admin', function() {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
    })
    it('should login', function() {
        login()
        cy.contains('h2.gh-canvas-title', 'Dashboard')
        cy.wait(700)
    })
    it('should click on tags link', function () {
        cy.get('a[href="#/tags/"].ember-view').click()
        cy.wait(700)
        cy.contains('h2.gh-canvas-title', 'Tags')
        cy.wait(700)
    })
    it('should click on any public tag', function () {
        takeScreenshot('before-deleting-a-public-tag')
        cy.get('ol.tags-list.gh-list li.gh-list-row.gh-tags-list-item').then(($lis) =>{
            const li = $lis.get(getRandomInt(0, $lis.length - 1))
            cy.get(li).click()
        })
        cy.wait(700)
    })
    it('should delete a public tag', function () {
        cy.get('h2[class="gh-canvas-title"]').invoke('text').as('tagName')
        cy.wait(1000)
        cy.get('button[type="button"].gh-btn.gh-btn-red.gh-btn-icon').click();
        cy.wait(1000)
        cy.get('div[class="modal-footer"] > button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // There is an error in ghost on this transition
            return false
        })
        cy.wait(1000)
        cy.get('@tagName').then($tagname => {
            cy.get('body').then($body => {
                if ($body.find('ol[class="tags-list.gh-list"]').length > 0) {
                    cy.get('ol.tags-list.gh-list  > li.gh-list-row.gh-tags-list-item').should('not.have.text', $tagname)
                }
            })
            cy.wait(1000)
        })
        takeScreenshot('after-deleting-a-public-tag')
    })
    it('should logout', function() {
        logout()
    })
})

//--------- SEVENTH SCENARIO CREATE AN INTERNAL TAG -----

describe('should create a new internal tag', function() {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    after(() => {
        cy.clearCookie('ghost-admin-api-session')
    })
    it('should visit ghost admin', function() {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
    })
    it('should login', function() {
        login()
        cy.contains('h2.gh-canvas-title', 'Dashboard')
        cy.wait(700)
    })
    it('should click on tags link', function () {
        cy.get('a[href="#/tags/"].ember-view').click()
        cy.wait(700)
        cy.contains('h2.gh-canvas-title', 'Tags')
        cy.wait(700)
    })
    it('should click on New tag', function () {
        takeScreenshot('before-creating-an-internal-tag')
        cy.get('a[href="#/tags/new/"].ember-view').first().click()
        cy.wait(700)
        cy.contains('h2.gh-canvas-title', 'New tag')
        cy.wait(700)
    })
    it('should create a new internal tag', function () {
        let name = faker.word.adjective()
        name = '#' + name
        let color = faker.random.numeric(6)
        var description = faker.lorem.sentence(10)
        cy.get('input[id=tag-name]').type(name)
        cy.get('input[name="accent-color"].gh-input').type(color)
        cy.get('textarea[id=tag-description]').type(description)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
        cy.wait(1000)
        cy.get('a.active.ember-view').click()
        cy.wait(700)
        cy.get('div[class="gh-contentfilter gh-btn-group"] > button').eq(1).click()
        cy.contains('h3.gh-tag-list-name', name)
        takeScreenshot('after-creating-an-internal-tag')
    })
    it('should logout', function() {
        logout()
    })
})

//--------- EIGHTH SCENARIO UPDATE AN EXISTING INTERNAL TAG -----

describe('should update a new internal tag', function() {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    after(() => {
        cy.clearCookie('ghost-admin-api-session')
    })
    it('should visit ghost admin', function() {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
    })
    it('should login', function() {
        login()
        cy.contains('h2.gh-canvas-title', 'Dashboard')
        cy.wait(700)
    })
    it('should click on tags link', function () {
        cy.get('a[href="#/tags/"].ember-view').click()
        cy.wait(700)
        cy.contains('h2.gh-canvas-title', 'Tags')
        cy.wait(700)
    })
    it('should click on any internal tag', function () {
        takeScreenshot('before-updating-an-internal-tag')
        cy.get('div[class="gh-contentfilter gh-btn-group"] > button').eq(1).click()
        cy.get('ol.tags-list.gh-list  > li.gh-list-row.gh-tags-list-item').then(($lis) =>{
            const li = $lis.get(getRandomInt(0, $lis.length - 1))
            cy.get(li).click()
        })
        cy.wait(1000)
    })
    it('should update a new internal tag', function () {
        let name = faker.word.adjective()
        name = '#' + name
        let color = faker.random.numeric(6)
        var description = faker.lorem.sentence(10)
        cy.get('input[id=tag-name]').focus().clear().type(name)
        cy.get('input[name="accent-color"].gh-input').focus().clear().type(color)
        cy.get('textarea[id=tag-description]').focus().clear().type(description)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
        cy.wait(1000)
        cy.get('a.active.ember-view').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // There is an error in ghost on this transition
            return false
        })
        cy.wait(700)
        cy.get('div[class="gh-contentfilter gh-btn-group"] > button').eq(1).click()
        cy.contains('h3.gh-tag-list-name', name)
        takeScreenshot('after-updating-an-internal-tag')
    })
    it('should logout', function() {
        logout()
    })
})

//--------- NINETH SCENARIO DELETE AN EXISTING INTERNAL TAG -----

describe('should delete an existing internal tag', function() {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    after(() => {
        cy.clearCookie('ghost-admin-api-session')
    })
    it('should visit ghost admin', function() {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
    })
    it('should login', function() {
        login()
        cy.contains('h2.gh-canvas-title', 'Dashboard')
        cy.wait(700)
    })
    it('should click on tags link', function () {
        cy.get('a[href="#/tags/"].ember-view').click()
        cy.wait(700)
        cy.contains('h2.gh-canvas-title', 'Tags')
        cy.wait(700)
    })
    it('should click on any internal tag', function () {
        takeScreenshot('before-deleting-an-internal-tag')
        cy.get('div[class="gh-contentfilter gh-btn-group"] > button').eq(1).click()
        cy.get('ol.tags-list.gh-list  > li.gh-list-row.gh-tags-list-item').then(($lis) =>{
            const li = $lis.get(getRandomInt(0, $lis.length - 1))
            cy.get(li).click()
        })
        cy.wait(1000)
    })
    it('should delete an internal tag', function () {
        cy.get('h2[class="gh-canvas-title"]').invoke('text').as('tagName')
        cy.wait(1000)
        cy.get('button[type="button"].gh-btn.gh-btn-red.gh-btn-icon').click();
        cy.wait(1000)
        cy.get('div[class="modal-footer"] > button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
        cy.wait(1000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // There is an error in ghost on this transition
            return false
        })
        cy.get('div[class="gh-contentfilter gh-btn-group"] > button').eq(1).click()
        cy.wait(1000)
        cy.get('@tagName').then($tagname => {
            cy.get('body').then($body => {
                if ($body.find('ol[class="tags-list.gh-list"]').length > 0) {
                    cy.get('ol.tags-list.gh-list  > li.gh-list-row.gh-tags-list-item').should('not.have.text', $tagname)
                }
            })
            cy.wait(1000)
        })
        takeScreenshot('after-deleting-an-internal-tag')
    })
    it('should logout', function() {
        logout()
    })
})

//--------- TENTH SCENARIO VALIDATE DARK MODE -----

describe('should validate dark mode', function() {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('ghost-admin-api-session')
    })
    after(() => {
        cy.clearCookie('ghost-admin-api-session', '_hjSessionUser_2831152')
    })
    it('should visit ghost admin', function() {
        cy.visit('http://localhost:2368/ghost/');
        cy.wait(1000);
    })
    it('should login', function() {
        login()
        cy.contains('h2.gh-canvas-title', 'Dashboard')
        cy.wait(700)
    })
    it('should toggle dark mode', function () {
        takeScreenshot('before-night-mode-toggle')
        cy.get('body').then($body => {
            if ($body.find('div[class="nightshift-toggle on"]').length > 0) {
                cy.get('div[class="nightshift-toggle on"]').click()
            } else {
                cy.get('div[class="nightshift-toggle "]').click()
            }
        })
        takeScreenshot('after-night-mode-toggle')
    })
    it('should logout', function() {
        logout()
    })
})