const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, browsers, options, versionA, versionB } = config;

async function executeTest() {
  console.log('Inicio');
  console.log(`Comparando versión ${versionA} contra versión ${versionB}`);

  const dirA = `./results/screenshots ${versionA}`;
  const dirB = `./results/screenshots ${versionB}`;

  const filesA = fs.readdirSync(dirA, { withFileTypes: true });
  const filesB = fs.readdirSync(dirB, { withFileTypes: true });

  if(filesA.length == 0) {
    throw Error(`El directorio ${dirA} no tiene imagenes para comparar`)
  }

  if(filesB.length == 0) {
    throw Error(`El directorio ${dirB} no tiene imagenes para comparar`)
  }

  if(filesA.length != filesB.length) {
    throw Error('Los directorios a comparar no tienen la misma cantidad de imagenes')
  }

  const datetime = new Date().toISOString().replace(/:/g, ".");
  let reports = "";

  for (let index = 0; index < filesA.length; index++) {
    let x = filesA[index];
    let y = filesB[index];
    let pathX = dirA + '/' + x.name;
    let pathY = dirB + '/' + y.name;
    
    let title = `Comparando imagen ${x.name} vs imagen ${y.name}`;
    console.log(title);

    const data = await compareImages(
      fs.readFileSync(pathX),
      fs.readFileSync(pathY),
      options
    );
    
    if (!fs.existsSync(`./results/${datetime}`)) {
      fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    }

    let resultInfo = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime,
    }


    fs.writeFileSync(`./results/${datetime}/compare-${index}.png`, data.getBuffer());
    reports += compare(title, resultInfo, pathX, pathY, index);
  }

  fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, reports));
  fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);
  
  return true;
}
(async () => console.log(await executeTest()))();

function compare(title, resultInfo, pathX, pathY, index) {
      return `<div class=" browser" id="test0">
      <div class=" btitle">
          <h3>${title}</h3>
          <h3>El resultado de la comparación es: </h3>
          <p><strong>isSameDimensions:</strong> ${JSON.stringify(resultInfo.isSameDimensions)}</p>
          <p><strong>dimensionDifference:</strong> ${JSON.stringify(resultInfo.dimensionDifference)}</p>
          <p><strong>rawMisMatchPercentage:</strong> ${JSON.stringify(resultInfo.rawMisMatchPercentage)}</p>
          <p><strong>misMatchPercentage:</strong> ${JSON.stringify(resultInfo.misMatchPercentage)}</p>
          <p><strong>diffBounds:</strong> ${JSON.stringify(resultInfo.diffBounds)}</p>
          <p><strong>analysisTime:</strong> ${JSON.stringify(resultInfo.analysisTime)}</p>
      </div>
      <div class="imgline">
        <div class="imgcontainer">
          <span class="imgname">Reference</span>
          <img class="img2" src="../../${pathX}" id="refImage" label="Reference">
        </div>
        <div class="imgcontainer">
          <span class="imgname">Test</span>
          <img class="img2" src="../../${pathY}" id="testImage" label="Test">
        </div>
      </div>
      <div class="imgline">
        <div class="imgcontainer">
          <span class="imgname">Diff</span>
          <img class="imgfull" src="./compare-${index}.png" id="diffImage" label="Diff">
        </div>
      </div>
    </div>`
  }
  
  function createReport(datetime, reports) {
      return `
      <html>
          <head>
              <title> VRT Report </title>
              <link href="index.css" type="text/css" rel="stylesheet">
          </head>
          <body>
              <h1>Report for 
                   <a href="${config.url}"> ${config.url}</a>
              </h1>
              <p>Executed: ${datetime}</p>
              <div id="visualizer">
                  ${reports}
              </div>
          </body>
      </html>`
  }
