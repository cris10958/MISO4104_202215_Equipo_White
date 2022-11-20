const fs = require("fs");
const { exec } = require("child_process");
let scriptPruebas = {
    id: "backstop_default",
    viewports: [{
        label: "default",
        width: 800,
        height: 600,
    }, ],
    onBeforeScript: "puppet/onBefore.js",
    onReadyScript: "puppet/onReady.js",
    scenarios: [],
    paths: {
        bitmaps_reference: "backstop_data/bitmaps_reference",
        bitmaps_test: "backstop_data/bitmaps_test",
        engine_scripts: "backstop_data/engine_scripts",
        html_report: "backstop_data/html_report",
        ci_report: "backstop_data/ci_report",
    },
    report: ["browser"],
    engine: "puppeteer",
    engineOptions: {
        args: ["--no-sandbox"],
    },
    asyncCaptureLimit: 50,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false,
};

async function getFiles(dir) {
    let lista = [];
    fs.readdir(dir, (err, files) => {
        if (err) console.log(err);
        else {
            files.forEach((file) => {
                lista.push(file);
            });
        }
    });
    return lista;
}

async function iniciarScript() {
    let arrayv1 = await getFiles("./v1");
    let arrayv2 = await getFiles("./v2");

    setTimeout(async() => {
        if (arrayv1.length == arrayv2.length) {
            for (let i = 0; i < arrayv1.length; i++) {
                let template = {
                    label: `Escenario ${i + 1} `,
                    url: `https://raw.githubusercontent.com/cris10958/MISO4104_202215_Equipo_White/main/Semana6/backstopjs/v2/${arrayv2[i]}`,
                    referenceUrl: `https://raw.githubusercontent.com/cris10958/MISO4104_202215_Equipo_White/main/Semana6/backstopjs/v1/${arrayv1[i]}`,
                    readyEvent: "",
                    readySelector: "",
                    delay: 0,
                    hideSelectors: [],
                    removeSelectors: [],
                    hoverSelector: "",
                    clickSelector: "",
                    postInteractionWait: 0,
                    selectors: [],
                    selectorExpansion: true,
                    expect: 0,
                    misMatchThreshold: 0.1,
                    requireSameDimensions: true,
                };
                scriptPruebas["scenarios"].push(template);
                let data1 = await JSON.stringify(scriptPruebas);
                await fs.writeFileSync("backstop.json", data1);
            }
        } else {
            console.log("Deben haber la misma cantidad de imagénes");
        }
    }, 2000);

    //Crear el archivo .json
    setTimeout(() => {
        let archivoJson = JSON.stringify(scriptPruebas);
        fs.writeFileSync("backstop.json", archivoJson);
    }, 21000);

}

iniciarScript();
