const { When, Then  } = require("@cucumber/cucumber");
const expect = require('chai').expect;

When("I open post", async function(){
    let  element = this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[1]')
    return await element.click();
});

When('I click button page', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[2]/a');
    return await element.click();
});

When("I click new post", async function(){
    let  element = this.driver.$('.ember-view.gh-btn.gh-btn-primary.view-actions-top-row')
    return await element.click();
});

When('I click button new page', async function () {
    let element = await this.driver.$('.ember-view.gh-btn.gh-btn-primary.view-actions-top-row');
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

When('I enter description {kraken-string}', async function (description) {
    let element = await this.driver.$('.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
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

When("I click publish post right now", async function(){
    let  element = this.driver.$('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view')
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

When("I click back post", async function(){
    let  element = this.driver.$('.ember-view.gh-btn-editor.gh-editor-back-button')
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

When('I edit titulo post {kraken-string}', async function (titulo) {
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

Then("I find note creation error {string}", async function (error) {
    let element = await this.driver.$('.gh-alert-content');
    let errorText = await element.getText();
    // console.error('el elemento es: ' + element);
    // console.error('el errorText es: ' + errorText);
    // console.error('el error es: ' + error);
    expect(errorText).to.equal(error);
  });