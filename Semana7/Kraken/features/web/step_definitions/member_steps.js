const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require('chai').expect;
const faker = require('faker');

const new_member_button = "/html/body/div[2]/div/main/section/div/header/section/div[2]/a";
const save_member_button = "/html/body/div[2]/div/main/section/div[1]/header/section/button";
const name_input = "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[1]/input";
const email_input = "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/input";
const note_textarea = "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[3]/textarea";
const search_members_input = "/html/body/div[2]/div/main/section/div/header/section/div[1]/div/input";
const members_table = "/html/body/div[2]/div/main/section/section/div[1]/table/tbody";
const first_member_row_table = "/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr[1]";
const note_member_error = "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[3]/p[1]";
const email_member_error = "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/p";
const label_textarea = "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[3]/textarea";
const label_member_input = "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[2]/div/div[1]/ul/input";
const first_label_member_ul = "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[2]/div/div[2]/div/ul";
const filter_member_span = "/html/body/div[2]/div/main/section/div/header/section/div[2]/div[1]/span";
const filter_member_input = "/html/body/div[1]/div/div/section/div[1]/div/div/input";
const filter_member_apply = "/html/body/div[1]/div/div/div/button[2]";
const filter_name_option = "/html/body/div[1]/div/div/section/div[1]/div/div/span[1]/select/optgroup[1]/option[1]";
const filter_email_option = "/html/body/div[1]/div/div/section/div[1]/div/div/span[1]/select/optgroup[1]/option[2]";
const filter_label_option = "/html/body/div[1]/div/div/section/div[1]/div/div/span[1]/select/optgroup[1]/option[3]";
const filter_is_option = "/html/body/div[1]/div/div/section/div[1]/div/div/span[2]/select/option[1]";
const filter_is_not_option = "/html/body/div[1]/div/div/section/div[1]/div/div/span[2]/select/option[2]";
const filter_contains_option = "/html/body/div[1]/div/div/section/div[1]/div/div/span[2]/select/option[2]";
const filter_does_not_contain_option = "/html/body/div[1]/div/div/section/div[1]/div/div/span[2]/select/option[3]";
const filter_starts_with_option = "/html/body/div[1]/div/div/section/div[1]/div/div/span[2]/select/option[4]";
const filter_ends_with_option = "/html/body/div[1]/div/div/section/div[1]/div/div/span[2]/select/option[5]";
const filter_no_members_match = "/html/body/div[2]/div/main/section/section/div[1]/h4";
const add_filter_button = "/html/body/div[1]/div/div/section/div[2]/button";
const second_filter_member_input = "/html/body/div[1]/div/div/section/div[2]/div/div/input";


function fakerText(length) {
  return faker.random.alpha(Number(length));
}

async function setUpFieldFilter(driver, field) {
  let element;
  if ('Name' === field) {
    element = await driver.$(filter_name_option);
  } else if ('Email' === field) {
    element = await driver.$(filter_email_option);
  } else if ('Label' === field) {
    element = await driver.$(filter_label_option);
  } else {
    console.error('Combinaci??n campo no v??lido');
  }
  return element.click();
}

async function setUpFilter(driver, filter) {
  let element;
  if ('is' === filter) {
    element = await driver.$(filter_is_option);
  } else if ('is not' === filter) {
    element = await driver.$(filter_is_not_option);
  } else if ('contains' === filter) {
    element = await driver.$(filter_contains_option);
  } else if ('does not contain' === filter) {
    element = await driver.$(filter_does_not_contain_option);
  } else if ('starts with' === filter) {
    element = await driver.$(filter_starts_with_option);
  } else if ('ends with' === filter) {
    element = await driver.$(filter_ends_with_option);
  } else {
    console.error('Combinaci??n filtro no v??lida');
  }
  return element.click();
}

When("I click New member button", async function () {
  let element = await this.driver.$(new_member_button);
  return element.click();
});

Then("I save member", async function () {
  let element = await this.driver.$(save_member_button);
  return element.click();
});

When("I find a member {kraken-string}", async function (email) {
  let element = await this.driver.$(search_members_input);
  element.setValue(email);
  element = await this.driver.$(first_member_row_table);
  return element.click();
});

When("I enter random name member {kraken-string}", async function (name) {
  let element = await this.driver.$(name_input);
  return element.setValue(name);
});

Then("I find the name member {kraken-string}", async function (name) {
  let element = await this.driver.$(name_input);
  let nameText = await element.getValue();
  expect(nameText).to.equal(name);
});

When("I enter random email member {kraken-string}", async function (email) {
  let element = await this.driver.$(email_input);
  return element.setValue(email);
});

When("I enter {string} random characters on notes member", async function (length) {
  let element = await this.driver.$(note_textarea);
  let txt = fakerText(length);
  return element.setValue(txt);
});

Then("I find note member error {string}", async function (error) {
  let element = await this.driver.$(note_member_error);
  let errorText = await element.getText();
  expect(errorText).to.equal(error);
});

Then("I find email member error {string}", async function (error) {
  let element = await this.driver.$(email_member_error);
  let errorText = await element.getText();
  expect(errorText).to.equal(error);
});

Then("I enter an empty email member", async function () {
  let element = await this.driver.$(email_input);
  return element.setValue("");
});

When("I add the member label {kraken-string}", async function (label) {
  let element = await this.driver.$(label_textarea);
  return element.setValue(label);
});

When("I add a member label {string} random characters", async function (length) {
  let label = fakerText(length);
  let element = await this.driver.$(label_member_input);
  element.setValue(label);
  element = await this.driver.$(first_label_member_ul);
  return element.click();
});

Then("I find the member label {kraken-string}", async function (label) {
  let element = await this.driver.$(label_textarea);
  let labelText = await element.getValue();
  expect(labelText).to.equal(label);
});

When("I click Filter", async function () {
  let element = await this.driver.$(filter_member_span);
  return element.click();
});

Then("I filter Name is {kraken-string}", async function (name) {
  let element = await this.driver.$(filter_name_option);
  element.click();
  element = await this.driver.$(filter_is_option);
  element.click();
  element = await this.driver.$(filter_member_input);
  return element.setValue(name);
});

Then("I filter Email is {kraken-string}", async function (email) {
  let element = await this.driver.$(filter_email_option);
  element.click();
  element = await this.driver.$(filter_is_option);
  element.click();
  element = await this.driver.$(filter_member_input);
  return element.setValue(email);
});

When("I apply Filter", async function () {
  let element = await this.driver.$(filter_member_apply);
  return element.click();
});

When("I find no members Message {string}", async function (errorMessage) {
  let element = await this.driver.$(filter_no_members_match);
  let errorText = await element.getText();
  expect(errorText).to.equal(errorMessage);
});

Then("I check {string} rows member table", async function (rows) {
  let element = await this.driver.$$(members_table);
  let tableRows = await element.length;
  expect(tableRows).to.equal(Number(rows));
});

When("I set the filter {string} {string} and set random string of {string} length", async function (field, filter, length) {
  console.log(field, filter, length);
  await setUpFieldFilter(this.driver, field);
  await setUpFilter(this.driver, filter);
  let element = await this.driver.$(filter_member_input);
  return element.setValue(fakerText(length));
});

When("I add a second filter Name is with a random string of {string} length", async function (length) {
  let element = await this.driver.$(add_filter_button);
  await element.click();
  element = await this.driver.$(second_filter_member_input);
  return element.setValue(fakerText(length));
});
