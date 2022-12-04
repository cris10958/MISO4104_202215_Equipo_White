const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('.email.ember-text-field.gh-input.ember-view');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('.password.ember-text-field.gh-input.ember-view');
    return await element.setValue(password);
});

Then('I click login', async function () {
    let element = await this.driver.$('.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view');
    return await element.click();
});

When('I click button page', async function () {
    let element = await this.driver.$('.gh-nav-list.gh-nav-manage>li:nth-child(2)');
    return await element.click();
});

When('I click button new', async function () {
    let element = await this.driver.$('.ember-view.gh-btn.gh-btn-primary.view-actions-top-row');
    return await element.click();
});

When('I enter description {kraken-string}', async function (description) {
    let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor');
    return await element.setValue(description);
});

When('I enter titulo {kraken-string}', async function (titulo) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(titulo);
});

When("I click Publish", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger')
    return await element.click();
});

When("I click Continue final review", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-black.gh-btn-large')
    return await element.click();
});

When("I click publish right now", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view')
    return await element.click();
});

When("I click back editor", async function(){
    let  element = this.driver.$('.gh-btn-editor.gh-publish-back-button')
    return await element.click();
});

When("I click back", async function(){
    let  element = this.driver.$('.ember-view.gh-btn-editor.gh-editor-back-button')
    return await element.click();
});

When("I open edition", async function(){
    let  element = this.driver.$('.published')
    return await element.click();
});



When("I update", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view')
    return await element.click();
});


When("I open post", async function(){
    let  element = this.driver.$('.gh-nav-list.gh-nav-manage>li:nth-child(1)')
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
