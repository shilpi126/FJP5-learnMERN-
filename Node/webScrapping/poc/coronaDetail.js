
const request = require("request");
//cheerio
// Cheerio parses HTML and it traverses the html so that data can be manipulated according to user's needs
const cheerio = require("cheerio");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(err, res, body) {
    if(err){
        console.error("error", err);
    }
    else {
        handleHtml(body);
    }
}

function handleHtml(html){
    let selecTool = cheerio.load(html);//html will be loded in cheerio.load

    let coronaStatusArr = selecTool(".maincounter-number");
    console.log("coronaStatusArr.text");

    let totalCases = selecTool(coronaStatusArr[0]).text();
    console.log("Total Cases -> " + totalCases);

    let totalDeaths = selecTool(coronaStatusArr[1]).text();
    console.log("Total Deaths -> " + totalDeaths);

    let totalRecovered = selecTool(coronaStatusArr[2]).text();
    console.log("Total Patients Recovered -> " + totalRecovered);


    
}
