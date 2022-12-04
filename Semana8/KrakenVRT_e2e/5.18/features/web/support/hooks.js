const { After, Before ,AfterStep} = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const fs = require('fs');
const Escenario ='F005'

Before(async function() {
  if (!fs.existsSync('./reports/'+Escenario)) {
    fs.mkdirSync('./reports/'+Escenario);
  }
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})

AfterStep(async function (scenario) {
  wait(3000);
  let uri = scenario.gherkinDocument.uri.split('\\');
  let fileName = uri[uri.length - 1];
  console.log("fileName",fileName);
  let time = Math.round(+new Date() / 1000);
  await this.driver.saveScreenshot(`./reports/${Escenario}/${time}_${fileName}.png`);
});

function wait(ms) {
  const start = Date.now();
  let now = start;
  while ((now - start) < ms) { now = Date.now(); }
}


After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
