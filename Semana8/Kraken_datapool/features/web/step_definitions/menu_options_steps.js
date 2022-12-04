const { When } = require("@cucumber/cucumber");

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

When("I click Settings option", async function () {
    let element = await this.driver.$("/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[2]/a");
    return element.click();
});
