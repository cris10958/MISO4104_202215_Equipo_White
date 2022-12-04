const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const faker = require('faker');

const login_button = "/html/body/div[2]/div/main/div[1]/div/section/form/button";
const login_button_errors = "/html/body/div[2]/div/main/div/div/section/p"
const page_title_h = '/html/body/div[2]/div/main/section/div/div/div/header/h2'
const user_menu = '/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[1]/div[1]/div/div'
const logout_link = '/html/body/div[1]/div/ul/li[9]/a'

function fakerText(length) {
    return faker.random.alpha(Number(length));
}

When("I enter random email {kraken-string}", async function (email) {
    let element = await this.driver.$("/html/body/div[2]/div/main/div[1]/div/section/form/div[1]/span/input");
    return element.setValue(email);
});

When("I enter email {kraken-string}", function (email) {
    let element = this.driver.$("/html/body/div[2]/div/main/div[1]/div/section/form/div[1]/span/input");
    return element.setValue(email);
});

When("I enter empty email", function () {
    let element = this.driver.$("/html/body/div[2]/div/main/div[1]/div/section/form/div[1]/span/input");
    return element.setValue("");
});

When("I enter empty password", function () {
    let element = this.driver.$("/html/body/div[2]/div/main/div[1]/div/section/form/div[1]/span/input");
    return element.setValue("");
});

When("I enter random password {kraken-string}", async function (password) {
    let element = await this.driver.$("/html/body/div[2]/div/main/div[1]/div/section/form/div[2]/span/input");
    return element.setValue(password);
});

When("I enter password {kraken-string}", function (password) {
    let element = this.driver.$("/html/body/div[2]/div/main/div[1]/div/section/form/div[2]/span/input");
    return element.setValue(password);
});

When("I click Sign in", async function () {
    let element = await this.driver.$(login_button);
    return element.click();
});

Then(/^I see the error (.*)$/, async function (errorMessage) {
    let element = await this.driver.$(login_button_errors);
    let errorText = await element.getText();
    expect(errorText).contains(errorMessage);
})

When("I enter random email with length of {string}", function (length) {
    let email = fakerText(parseInt(length)) + '@gmail.com'
    let element = this.driver.$("/html/body/div[2]/div/main/div[1]/div/section/form/div[1]/span/input");
    return element.setValue(email);
});

When("I enter random password with length of {string}", function (length) {
    let password = fakerText(parseInt(length))
    let element = this.driver.$("/html/body/div[2]/div/main/div[1]/div/section/form/div[2]/span/input");
    return element.setValue(password);
});

Then(/^I see the page (.*)$/, async function (pageTitle) {
    let element = await this.driver.$(page_title_h);
    let title = await element.getText();
    expect(title).contains(pageTitle);
})

Then("I logout", function () {
    let element = this.driver.$(user_menu)
    element.click()
    let signout = this.driver.$(logout_link)
    signout.click()
})