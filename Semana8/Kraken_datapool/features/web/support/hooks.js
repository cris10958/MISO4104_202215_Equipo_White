const { After, Before, AfterStep } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const fs = require('fs');

Before(async function () {
  // if (!fs.existsSync('./reports/screenshots')) {
  //   fs.mkdirSync('./reports/screenshots');
  // }
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

AfterStep(async function (scenario) {
  wait(500);
  // let uri = scenario.gherkinDocument.uri.split('/');
  // let fileName = uri[uri.length - 1];
  // let name = fileName.split('_')[1] + fileName.split('_')[2];
  // let time = Math.round(+new Date() / 1000);
  // await this.driver.saveScreenshot(`./reports/screenshots/${time}_${name}.png`);
});

function wait(ms) {
  const start = Date.now();
  let now = start;
  while ((now - start) < ms) { now = Date.now(); }
}
