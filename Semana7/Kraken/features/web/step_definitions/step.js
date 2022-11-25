const { Given, When, Then } = require("@cucumber/cucumber");
const faker = require('faker');

function fakerLargeText(length) {
  console.log(faker.random.alpha(length));
}

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("/html/body/div[2]/div/main/div[1]/div/section/form/div[1]/span/input");
  return element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("/html/body/div[2]/div/main/div[1]/div/section/form/div[2]/span/input");
  return element.setValue(password);
});

When("I click Sign in", async function () {
  let element = await this.driver.$("/html/body/div[2]/div/main/div[1]/div/section/form/button");
  return element.click();
});

When("I click Members option", async function () {
  let element = await this.driver.$("/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]");
  return element.click();
});

When("I click Tags option", async function () {
  let element = await this.driver.$("/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[3]");
  return element.click();
});

When("I click Pages option", async function () {
  let element = await this.driver.$("/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[2]");
  return element.click();
});

When("I click Posts option", async function () {
  let element = await this.driver.$("/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]");
  return element.click();
});

When("I click Posts - Drafts option", async function () {
  let element = await this.driver.$("/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/div/div/ul/li[1]");
  return element.click();
});

When("I click Posts - Scheduled option", async function () {
  let element = await this.driver.$("/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/div/div/ul/li[2]");
  return element.click();
});

When("I click Posts - Published option", async function () {
  let element = await this.driver.$("/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/div/div/ul/li[3]");
  return element.click();
});
