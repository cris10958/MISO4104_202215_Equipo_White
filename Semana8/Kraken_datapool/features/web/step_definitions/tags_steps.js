const { When, Then  } = require("@cucumber/cucumber");
const faker = require('faker');
const expect = require('chai').expect;

function genearTextLen(len){
    return faker.random.alpha(len);
}

const buttonblack=".gh-btn.gh-btn-primary.gh-btn-icon.ember-view";


When("I clic tag", async function(){
    let  element = this.driver.$('.gh-nav-list.gh-nav-manage>li:nth-child(3)')
    return await element.click();
});

When("I clic new tag", async function(){
    let  element = this.driver.$('.ember-view.gh-btn.gh-btn-primary')
    return await element.click();
});

When("I clic save tag", async function(){
    let  element = this.driver.$(buttonblack)
    return await element.click();
});

When('I validate bug name tag {string}', async function (error) {
    let element = await this.driver.$('span.error>p:nth-child(1)');
    let result =await element.getText();
    return expect(result).to.equal(error);
});

When('I validate bug slug tag {string}', async function (error) {
    let element = await this.driver.$('.form-group.error.ember-view:nth-child(2)>p.response');
    let result =await element.getText();
    return expect(result).to.equal(error);
});

When('I enter tag color {kraken-string}', async function (value) {
    let element = await this.driver.$('.input-color>input');
    return await element.setValue(value);
});

When('I validate bug color tag {string}', async function (error) {
    let element = await this.driver.$('span.error>p:nth-child(2)');
    let result =await element.getText();
    return expect(result).to.equal(error);
});

When('I enter tag description', async function () {
    let value=genearTextLen(550)
    let element = await this.driver.$('.no-margin.form-group.ember-view>textarea');
    return await element.setValue(value);
});

When('I validate bug description tag {string}', async function (error) {
    let element = await this.driver.$('[name="description"]+p');
    let result =await element.getText();
    return expect(result).to.equal(error);
});

When('I enter tag slug top length', async function () {
    let value=genearTextLen(200)
    let element = await this.driver.$('[name="slug"]');
    return await element.setValue(value);
});

When('I enter tag name top length', async function () {
    let value=genearTextLen(200)
    let element = await this.driver.$('[name="name"]');
    return await element.setValue(value);
});

When("I open Meta data", async function(){
    let  element = this.driver.$('.gh-expandable>div:nth-child(1)>div>button')
    return await element.click();
});

When('I enter Meta title top length', async function () {
    let value=genearTextLen(310)
    let element = await this.driver.$('[name="metaTitle"]');
    return await element.setValue(value);
});

When('I validate bug Meta title {string}', async function (error) {
    let element = await this.driver.$('[name="metaTitle"]+p');
    let result =await element.getText();
    return expect(result).to.equal(error);
});

When('I enter Meta description top length', async function () {
    let value=genearTextLen(510)
    let element = await this.driver.$('[name="metaDescription"]');
    return await element.setValue(value);
});

When('I validate bug Meta description {string}', async function (error) {
    let element = await this.driver.$('[name="metaDescription"]+p');
    let result =await element.getText();
    return expect(result).to.equal(error);
});

When('I enter tag name {kraken-string}', async function (value) {
    let element = await this.driver.$('[name="name"]');
    return await element.setValue(value);
});

When("I open Twitter card", async function(){
    let  element = this.driver.$('.gh-expandable>div:nth-child(2)>div>button')
    return await element.click();
});

When('I enter Twitter title top length', async function () {
    let value=genearTextLen(310)
    let element = await this.driver.$('[name="twitterTitle"]');
    return await element.setValue(value);
});

When('I validate bug alert {string}', async function (error) {
    let element = await this.driver.$('.gh-alerts');
    let result =await element.getText();
    return expect(result).to.equal(error);
});

When('I enter Twitter description top length', async function () {
    let value=genearTextLen(510)
    let element = await this.driver.$('[name="twitterDescription"]');
    return await element.setValue(value);
});

When("I open Facebook card", async function(){
    let  element = this.driver.$('.gh-expandable>div:nth-child(3)>div>button')
    return await element.click();
});

When('I enter Facebook title top length', async function () {
    let value=genearTextLen(310)
    let element = await this.driver.$('[name="ogTitle"]');
    return await element.setValue(value);
});

When('I enter Facebook description top length', async function () {
    let value=genearTextLen(510)
    let element = await this.driver.$('[name="ogDescription"]');
    return await element.setValue(value);
});

When("I select a created tag", async function(){
    let  element = this.driver.$('.ember-view.gh-list-data.gh-tag-list-title.gh-list-cellwidth-70')
    return await element.click();
});

When("I back created tag", async function(){
    let  element = this.driver.$('.gh-canvas-breadcrumb>a')
    return await element.click();
});

When("I open settings", async function(){
    let  element = this.driver.$('.ember-view.gh-nav-bottom-tabicon')
    return await element.click();
});


When("I open general settings", async function(){
    let  element = this.driver.$('.view-container>div.gh-setting-header.gh-first-header+div>a:nth-child(1)')
    return await element.click();
});

When("I open title and description", async function(){
    let  element = this.driver.$('div:nth-child(1)>section.gh-expandable>div:nth-child(1)>div:nth-child(1)>button')
    return await element.click();
});

When('I enter Title setting top length', async function () {
    let value=genearTextLen(160)
    let element = await this.driver.$('div:nth-child(1)>section.gh-expandable>div:nth-child(1)>div.gh-expandable-content>div>div>div>div>input');
    return await element.setValue(value);
});

When("I clic save settings", async function(){
    let  element = this.driver.$(buttonblack)
    return await element.click();
});

When('I validate bug Title setting {string}', async function (error) {
    let element = await this.driver.$('div:nth-child(1)>section.gh-expandable>div:nth-child(1)>div.gh-expandable-content>div>div>div>div>p');
    let result =await element.getText();
    return expect(result).to.equal(error);
});

When('I enter description setting top length', async function () {
    let value=genearTextLen(210)
    let element = await this.driver.$('div:nth-child(1)>section.gh-expandable>div:nth-child(1)>div.gh-expandable-content>div>div>div>div.description-container.form-group.ember-view>input');
    return await element.setValue(value);
});

When('I validate bug description setting {string}', async function (error) {
    let element = await this.driver.$('div:nth-child(1)>section.gh-expandable>div:nth-child(1)>div.gh-expandable-content>div>div>div>div.description-container.form-group.ember-view>p');
    let result =await element.getText();
    return expect(result).to.equal(error);
});

When("I open Meta data setting", async function(){
    let  element = this.driver.$('div.gh-main-section:nth-child(2)>section>div:nth-child(1)>div>button')
    return await element.click();
});

When('I enter Meta title setting top length', async function () {
    let value=genearTextLen(310)
    let element = await this.driver.$('[for="metaTitle"]+input');
    return await element.setValue(value);
});

When('I enter Meta description setting top length', async function () {
    let value=genearTextLen(510)
    let element = await this.driver.$('[for="metaDescription"]+textarea');
    return await element.setValue(value);
});

When("I open Twitter card setting", async function(){
    let  element = this.driver.$('div.gh-main-section:nth-child(2)>section>div:nth-child(2)>div>button')
    return await element.click();
});

When('I enter Twitter title setting top length', async function () {
    let value=genearTextLen(310)
    let element = await this.driver.$('[for="twitterTitle"]+input');
    return await element.setValue(value);
});

When('I enter Twitter description setting top length', async function () {
    let value=genearTextLen(310)
    let element = await this.driver.$('[for="twitterDescription"]+textarea');
    return await element.setValue(value);
});

When("I open Facebook card setting", async function(){
    let  element = this.driver.$('div.gh-main-section:nth-child(2)>section>div:nth-child(3)>div>button')
    return await element.click();
});

When('I enter Facebook title setting top length', async function () {
    let value=genearTextLen(310)
    let element = await this.driver.$('[for="ogTitle"]+input');
    return await element.setValue(value);
});

When('I enter Facebook description setting top length', async function () {
    let value=genearTextLen(310)
    let element = await this.driver.$('[for="ogDescription"]+textarea');
    return await element.setValue(value);
});