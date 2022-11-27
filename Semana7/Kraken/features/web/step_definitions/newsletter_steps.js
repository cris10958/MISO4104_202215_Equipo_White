const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require('chai').expect;
const faker = require('faker');

const email_newsletter_link = "/html/body/div[2]/div/main/section/section/div[4]/a[2]";
const add_newsletter = "/html/body/div[2]/div/main/section/section/div/div/a";
const create_newsletter_button = "/html/body/div[5]/div/div/div[2]/button[2]";
const name_newsletter_error = "/html/body/div[5]/div/div/div[1]/fieldset/div[1]/p";
const name_newsletter_input = "/html/body/div[5]/div/div/div[1]/fieldset/div[1]/input";
const description_newsletter_textarea = "/html/body/div[5]/div/div/div[1]/fieldset/div[2]/textarea";
const name_edit_newsletter_input = "/html/body/div[5]/div/div/div/div/div[1]/div/div[1]/fieldset[1]/div/div[1]/div/div/div/div[1]/input";
const save_edit_newsletter_button = "/html/body/div[5]/div/div/div/div/div[2]/div[1]/button[2]";
const name_edit_newsletter_error = "/html/body/div[5]/div/div/div/div/div[1]/div/div[1]/fieldset[1]/div/div[1]/div/div/div/div[1]/p";


function fakerText(length) {
  return faker.random.alpha(Number(length));
}

async function findNewsletter(driver, nameNewsletter) {
  for (let index = 1; index < 200; index++) {
    let xpath = `/html/body/div[2]/div/main/section/section/div/div/section/div/div/div[${index}]/div/a/h3`;
    let element = await driver.$(xpath);
    if (element) {
      let newsletterText = await element.getText();
      if (newsletterText === nameNewsletter) {
        return element.click();
      }
    }
  }
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

When("I enter random name newsletter {kraken-string}", async function (name) {
  let element = await this.driver.$(name_newsletter_input);
  return element.setValue(name);
});

When("I enter random description newsletter {kraken-string}", async function (description) {
  let element = await this.driver.$(description_newsletter_textarea);
  return element.setValue(description);
});

When("I find {kraken-string} newsletter", async function (nameNewsletter) {
  await findNewsletter(this.driver, nameNewsletter)
});

Then("I enter {string} random characters on edit newsletter name", async function (length) {
  let element = await this.driver.$(name_edit_newsletter_input);
  let txt = fakerText(length);
  return element.setValue(txt);
});

When("I click Save and close newsletter", async function () {
  let element = await this.driver.$(save_edit_newsletter_button);
  return element.click();
});

Then("I find edit name newsletter error {string}", async function (error) {
  let element = await this.driver.$(name_edit_newsletter_error);
  let errorText = await element.getText();
  expect(errorText).to.equal(error);
});
