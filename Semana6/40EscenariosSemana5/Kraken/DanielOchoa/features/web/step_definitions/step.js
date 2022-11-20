const { Given, When, Then } = require("@cucumber/cucumber");

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$("#ember6");
  return element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$("#ember8");
  return element.setValue(password);
});

When("I click Sign in", async function () {
  let element = await this.driver.$("#ember10");
  return element.click();
});

When("I click Members option", async function () {
  let element = await this.driver.$(
    ".gh-nav-top > ul:nth-child(2) > li:nth-child(4)"
  );
  return element.click();
});

When("I click New Member", async function () {
  let element = await this.driver.$(
    ".view-actions-top-row > .ember-view.gh-btn.gh-btn-primary"
  );
  return element.click();
});

When("I fill form name {string}", async function (name) {
  let element = await this.driver.$("//*[@id='member-name']");
  return element.setValue(name);
});

When("I fill form email {string}", async function (email) {
  let element = await this.driver.$("//*[@id='member-email']");
  return element.setValue(email);
});

Then("I save the member", async function () {
  let element = await this.driver.$(
    ".gh-btn.gh-btn-primary.gh-btn-icon.ember-view"
  );
  return element.click();
});

When("I find a member", async function () {
  let element = await this.driver.$(
    "table.gh-list > tbody.ember-view > tr:nth-child(2)"
  );
  return element.click();
});

When("I click Configuration", async function () {
  let element = await this.driver.$(
    ".gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view"
  );
  return element.click();
});

Then("I delete the member", async function () {
  let element = await this.driver.$(
    ".gh-member-actions-menu.dropdown-menu.dropdown-triangle-top-right.open.fade-in-scale.ember-view > li:nth-child(2)"
  );
  return element.click();
});

Then("I confirm action", async function () {
  let element = await this.driver.$(
    ".modal-footer > .gh-btn.gh-btn-red.gh-btn-icon.ember-view"
  );
  return element.click();
});

When("I click Tags option", async function () {
  let element = await this.driver.$(
    ".gh-nav-top > ul:nth-child(2) > li:nth-child(3)"
  );
  return element.click();
});

When("I click New Tag", async function () {
  let element = await this.driver.$(
    ".view-actions > .ember-view.gh-btn.gh-btn-primary"
  );
  return element.click();
});

When("I fill form tag name {string}", async function (tagName) {
  let element = await this.driver.$("//*[@id='tag-name']");
  return element.setValue(tagName);
});

Then("I save the tag", async function () {
  let element = await this.driver.$(
    ".gh-btn.gh-btn-primary.gh-btn-icon.ember-view"
  );
  return element.click();
});

When("I find a tag", async function () {
  let element = await this.driver.$(".gh-list-row:nth-child(3)");
  return element.click();
});

Then("I delete tag", async function () {
  let element = await this.driver.$(".gh-btn.gh-btn-red.gh-btn-icon");
  return element.click();
});

When("I click Internal Tags", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/section/div/header/section/div/button[2]"
  );
  return element.click();
});

Then("I toggle theme", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[2]/div/div"
  );
  return element.click();
});
