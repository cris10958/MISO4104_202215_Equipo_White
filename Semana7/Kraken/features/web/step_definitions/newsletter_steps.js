const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require('chai').expect;
const faker = require('faker');

const email_newsletter_link = "/html/body/div[2]/div/main/section/section/div[4]/a[2]";
const add_newsletter = "/html/body/div[2]/div/main/section/section/div/div/a";
const create_newsletter_button = "/html/body/div[5]/div/div/div[2]/button[2]";
const name_newsletter_error = "/html/body/div[5]/div/div/div[1]/fieldset/div[1]/p";
const name_newsletter_input = "/html/body/div[5]/div/div/div[1]/fieldset/div[1]/input";
const description_newsletter_textarea = "/html/body/div[5]/div/div/div[1]/fieldset/div[2]/textarea";


function fakerText(length) {
    return faker.random.alpha(Number(length));
}


When("I click Email newsletter", async function () {
    let element = await this.driver.$(email_newsletter_link);
    return element.click();
});

When("I click Add newsletter", async function () {
    let element = await this.driver.$(add_newsletter);
    return element.click();
});

When("I click Create newsletter", async function () {
    let element = await this.driver.$(create_newsletter_button);
    return element.click();
});

Then("I find name newsletter error {string}", async function (error) {
    let element = await this.driver.$(name_newsletter_error);
    let errorText = await element.getText();
    expect(errorText).to.equal(error);
});

When("I enter {string} random characters on newsletter name", async function (length) {
    let element = await this.driver.$(name_newsletter_input);
    let txt = fakerText(length);
    return element.setValue(txt);
});

When("I enter {string} random characters on newsletter description", async function (length) {
    let element = await this.driver.$(description_newsletter_textarea);
    let txt = fakerText(length);
    return element.setValue(txt);
});
