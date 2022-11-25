const { When } = require("@cucumber/cucumber");

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
