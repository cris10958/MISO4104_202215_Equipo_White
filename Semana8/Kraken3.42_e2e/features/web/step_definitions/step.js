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
    let element = await this.driver.$('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view');
    return await element.click();
});

When('I click button page', async function () {
    let element = await this.driver.$('.gh-nav-list.gh-nav-manage>li:nth-child(3)');
    return await element.click();
});

When('I click button new', async function () {
    let element = await this.driver.$('.ember-view.gh-btn.gh-btn-green');
    return await element.click();
});

When('I enter titulo {kraken-string}', async function (titulo) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(titulo);
});

When('I enter description {kraken-string}', async function (description) {
    let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    return await element.setValue(description);
});

When('I click button publish', async function(){
    let element = await this.driver.$('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger');
    return await element.click();
});

When("I confirm", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    return await element.click();
});

Then("I click back page", async function(){
    let  element = this.driver.$('.blue.link.fw4.flex.items-center.ember-view')
    return await element.click();
});

When("I open edition", async function(){
    let  element = this.driver.$('.gh-content-status-published.nowrap')
    return await element.click();
});

When('I edit titulo {kraken-string}', async function (titulo) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(titulo);
});

When("I update", async function(){
    let  element = this.driver.$('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger')
    return await element.click();
});

When("I confirm update", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    return await element.click();
});

When("I open post", async function(){
    let  element = this.driver.$('.gh-nav-list.gh-nav-manage>li:nth-child(2)>a')
    return await element.click();
});

When("I unpublish", async function(){
    let  element = this.driver.$('.gh-publishmenu-content.gh-publishmenu-section>div')
    return await element.click();
});