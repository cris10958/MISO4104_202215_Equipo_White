const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember6');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(password);
});

Then('I click login', async function () {
    let element = await this.driver.$('#ember10');
    return await element.click();
});

When('I click button page', async function () {
    let element = await this.driver.$('.gh-nav-list.gh-nav-manage>li:nth-child(2)');
    return await element.click();
});

When('I click button new page', async function () {
    let element = await this.driver.$('.ember-view.gh-btn.gh-btn-primary.view-actions-top-row');
    return await element.click();
});

When('I enter description page {kraken-string}', async function (description) {
    let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
    return await element.setValue(description);
});

When('I enter titulo page {kraken-string}', async function (titulo) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(titulo);
});

When('I click button publish', async function(){
    let element = await this.driver.$('.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    return await element.click();
});

When("I click Continue final review", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-black.gh-btn-large')
    return await element.click();
});


When("I click Publish page right now", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view')
    return await element.click();
});

When("I click Publish", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger')
    return await element.click();
});


When("I click publish post right now", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view')
    return await element.click();
});


When("I click back editor", async function(){
    let  element = this.driver.$('.gh-btn-editor.gh-publish-back-button')
    return await element.click();
});

When("I click back page", async function(){
    let  element = this.driver.$('.ember-view.gh-btn-editor.gh-editor-back-button')
    return await element.click();
});
When("I click back post", async function(){
    let  element = this.driver.$('.ember-view.gh-btn-editor.gh-editor-back-button')
    return await element.click();
});


When("I open edition", async function(){
    let  element = this.driver.$('.published')
    return await element.click();
});

When("I open setting", async function(){
    let  element = this.driver.$('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon')
    return await element.click();
});

When("I delete", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button')
    return await element.click();
});

When("I confirm delete", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon.ember-view')
    return await element.click();
});


When('I edit titulo page {kraken-string}', async function (titulo) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(titulo);
});

Then('I edit titulo post {kraken-string}', async function (titulo) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(titulo);
});

When("I update", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view')
    return await element.click();
});

When("I unpublish", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-editor.darkgrey.gh-unpublish-trigger')
    return await element.click();
});

When("I confirm unpublish", async function(){
    let  element = this.driver.$('.gh-revert-to-draft')
    return await element.click();
});

When("I select unpublish", async function(){
    let  element = this.driver.$('.draft')
    return await element.click();
});

When("I open post", async function(){
    let  element = this.driver.$('.gh-nav-list.gh-nav-manage>li:nth-child(1)')
    return await element.click();
});

When("I click new post", async function(){
    let  element = this.driver.$('.ember-view.gh-btn.gh-btn-primary.view-actions-top-row')
    return await element.click();
});

When('I enter description post {kraken-string}', async function (description) {
    let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    return await element.setValue(description);
});

When('I enter titulo post {kraken-string}', async function (titulo) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(titulo);
});

When("I open genral setting", async function(){
    let  element = this.driver.$('.ember-view.gh-nav-bottom-tabicon')
    return await element.click();
});


When("I open general tarject", async function(){
    let  element = this.driver.$('.yellow')
    return await element.click();
});

When("I open title and description", async function(){
    let  element = this.driver.$('.gh-expandable-header>button')
    return await element.click();
});

When('I edit tittle general {kraken-string}', async function (titulo) {
    let element = await this.driver.$('.ember-text-field.gh-input.ember-view');
    return await element.setValue(titulo);
});

Then('I edit description general {kraken-string}', async function (description) {
    let element = await this.driver.$('.description-container.form-group.ember-view>input');
    return await element.setValue(description);
});


When("I save settings", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view')
    return await element.click();
});

When("I open view site", async function(){
    let  element = this.driver.$('#ember23')
    return await element.click();
});

When("I open menu person", async function(){
    let  element = this.driver.$('.flex-auto.flex.items-center')
    return await element.click();
});

When("I sing out aplication", async function(){
    let  element = this.driver.$('.ember-view.dropdown-item.user-menu-signout')
    return await element.click();
});













