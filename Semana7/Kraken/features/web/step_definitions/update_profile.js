const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const faker = require('faker');

const properties = require('../../../properties.json')

const user_menu = '/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[1]/div[1]/div/div'
const profile_link = '/html/body/div[1]/div/ul/li[4]'
const slug_input = '//*[@id="user-slug"]'
const name_input = '//*[@id="user-name"]'
const email_input = '//*[@id="user-email"]'
const email_error =  '/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[3]/p[1]'
const name_error = '/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[1]/p'
const page_not_found = "/html/body/div[1]/div/section/div/section/p"
const save_profile_changes = '/html/body/div[2]/div/main/section/div/header/section/button'
const profile_name_page = '/html/body/div[2]/div/main/section/div/header/div/h2'
const change_password_btn = '/html/body/div[2]/div/main/section/section/div/form[2]/div/fieldset/div[4]/button'
const new_pass_input = '//*[@id="user-password-new"]'
const new_pass_error = '/html/body/div[2]/div/main/section/section/div/form[2]/div/fieldset/div[2]/p'
const verif_pass_input = '//*[@id="user-new-password-verification"]'
const verif_pass_error = '/html/body/div[2]/div/main/section/section/div/form[2]/div/fieldset/div[3]/p'
const old_pass_input = '//*[@id="user-password-old"]'
const old_pass_error = '/html/body/div[2]/div/main/section/section/div/form[2]/div/fieldset/div[1]/p'
const same_pass_alert = '/html/body/div[2]/aside/article/div'
const pass_update_message = '/html/body/div[2]/div/aside/article/div[2]/span'

let slug = ''
let name = ''
let user_email = ''
let new_pass = ''
let verif_pass = ''
let old_pass = ''

function fakerText(length) {
    return faker.random.alpha(Number(length));
}

Then("I click user menu", function () {
    let element = this.driver.$(user_menu)
    return element.click()
})

Then("I click user profile", function () {
    let profile = this.driver.$(profile_link)
    return profile.click()
})

Then("I fill slug with {string} length string", function (length) {
    slug = fakerText(parseInt(length))
    let element = this.driver.$(slug_input)
    return element.setValue(slug)
})

Then("I fill slug with {string} characters", function (text) {
    slug = text
    let element = this.driver.$(slug_input)
    return element.setValue(slug)
})

Then("I save profile changes", function () {
    let element = this.driver.$(save_profile_changes)
    return element.click()
})

Then("I visit slug page", function () {
    let authorPage = `${properties.BEFORE_SLUG_PROFILE}${slug}`
    return this.driver.url(authorPage)
})

Then('I see not found message', async function () {
    let element = await this.driver.$(page_not_found);
    let title = await element.getText();
    expect(title).contains('Page not found');
})

Then("I fill name with {string} length string", async function (length) {
    let name = null
    if (parseInt(length) > 0) {
        name = fakerText(parseInt(length))
    }
    let element = await this.driver.$(name_input)
    return element.setValue(name)
})

Then('I see name error {string}', async function (errorMessage) {
    let element = await this.driver.$(name_error);
    let title = await element.getText();
    expect(title).contains(errorMessage);
})

Then('I see the profile page', async function () {
    let element = await this.driver.$(profile_name_page);
    let title = await element.getText();
    expect(title).contains(name);
})

Then("I fill email with {string} string", async function (email) {
    user_email = email
    let element = await this.driver.$(email_input)
    return element.setValue(user_email)
})

Then("I check the email", async function () {
    let element = await this.driver.$(email_input)
    let saved_email = await element.getValue();
    expect(saved_email).contains(user_email);
})

Then("I restore admin email {kraken-string}", async function (email) {
    let element = await this.driver.$(email_input)
    return element.setValue(email)
})

Then('I see email error {string}', async function (errorMessage) {
    let element = await this.driver.$(email_error);
    let title = await element.getText();
    expect(title).contains(errorMessage);
})

Then('I click change password button', function () {
    let btn = this.driver.$(change_password_btn)
    return btn.click()
})

Then('I see new password error {string}', async function (errorMessage) {
    let element = await this.driver.$(new_pass_error)
    let error = await element.getText()
    expect(error).contains(errorMessage)
} )

Then("I fill new password with {string} length string", async function (length) {
    new_pass = fakerText(parseInt(length))
    let element = await this.driver.$(new_pass_input)
    return element.setValue(new_pass)
})

Then("I fill verify password with {string} length string", async function (length) {
    verif_pass = fakerText(parseInt(length))
    let element = await this.driver.$(verif_pass_input)
    return element.setValue(verif_pass)
})

Then("I fill old password with {string} length string", async function (length) {
    old_pass = fakerText(parseInt(length))
    let element = await this.driver.$(old_pass_input)
    return element.setValue(old_pass)
})

Then("I fill old password with original {kraken-string}", async function (password) {
    let element = await this.driver.$(old_pass_input)
    return element.setValue(password)
})

Then("I fill new password with {string} string", async function (password) {
    new_pass = password
    let element = await this.driver.$(new_pass_input)
    return element.setValue(new_pass)
})

Then("I fill verify password with {string} string", async function (password) {
    verif_pass = password
    let element = await this.driver.$(verif_pass_input)
    return element.setValue(verif_pass)
})

Then("I restore original password {kraken-string}", async function (password) {
    let element1 = await this.driver.$(new_pass_input)
    let element2 = await this.driver.$(verif_pass_input)
    let element3 = await this.driver.$(old_pass_input)
    await element3.setValue(new_pass)
    await element1.setValue(password)
    await element2.setValue(password)
})

Then('I see verif password error {string}', async function (errorMessage) {
    let element = await this.driver.$(verif_pass_error)
    let error = await element.getText()
    expect(error).contains(errorMessage)
} )

Then('I see same password error {string}', async function (errorMessge) {
    let element = await this.driver.$(same_pass_alert)
    let error = await element.getText()
    expect(error).contains(errorMessge)
})

Then('I see old password error {string}', async function (errorMessge) {
    let element = await this.driver.$(old_pass_error)
    let error = await element.getText()
    expect(error).contains(errorMessge)
})

Then('I see password update success {string}', async function (message) {
    let element = await this.driver.$(pass_update_message)
    let success = await element.getText()
    expect(success).contains(message)
})