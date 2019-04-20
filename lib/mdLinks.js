const path = require("./path");
const parse = require("./parse");
const validate = require("./validate");
const document = require("./document");
const stats = require("./stats");
const dir = require("./dir");

//File system
var fs = require("fs");
//Convert to HTML

//let mdLinks = mdLinks;

let pathFile = process.argv[2];
let options = process.argv[3];

function mdLinks(pathFile) {
    let pathTrue = path.pathTrue(pathFile);
    //let pathExist = path.fileExist(pathFile);
    if (pathTrue == true) {
        // path.fileExist(pathFile).then((result) => {
        //     console.log('promise')
        //     if (result == true) {
        //         console.log("done!");
        //     } else {
        //         console.log(result);
        //     }
        // })
        let urlPath = path.pathUrl(pathFile);
        if (urlPath === true) {
            forUrl(pathFile);
        } else {


            if (path.fileExist2(pathFile)) {
                console.log('done!');
                let isDir = path.isDir(pathFile);
                if (isDir === true) {
                    console.log("Es una carpeta");
                    dir.openDir(pathFile).then((result) => {
                        return result
                    }).then(function (result) {
                        result.forEach(element => {
                            forEachFile(element);
                        });
                    })
                } else {
                    forEachFile(pathFile);
                }
            } else {
                console.log('El archivo no existe');
            }
        }
    }
}
function forEachFile(pathFile) {
    console.log("es un archivo");
    let data = parse.readingFile(pathFile, "utf8");
    let htmlFile = parse.convertToHtml(data, pathFile);
    let arrayLinks = parse.arrayLinks(htmlFile, pathFile);
    if (options == "--validate") {
        document.newDocument(pathFile, arrayLinks);
        validate.validateLinks(arrayLinks).then((result) => {
            return result
        }).then(function (result) {
            document.addLinkToDocument(result);
        });

    } else if (options === "--stats") {
        let notUnique = stats.uniqueLinks(arrayLinks);
        document.newDocument(pathFile, arrayLinks, notUnique);
        document.addLinkToDocument(arrayLinks);
        document.addStats(arrayLinks, notUnique, 0);
    } else if (options === "--validate--stats") {
        document.newDocument(pathFile, arrayLinks);
        validate.validateLinks(arrayLinks).then((result) => {
            return result
        }).then(function (result) {
           // console.log(result);
            document.addLinkToDocument(result);
            let notUnique = stats.uniqueLinks(result);
            let linksTrue = stats.statsLinks(result);
            //console.log(notUnique);
             
            document.addStats(result, notUnique, linksTrue);
        });
    }
}


function forUrl(pathFile) {
    validate.validateUrl(pathFile).then((result) => {
        return result
    }).then((result) => {
        if (result === false || result === "Not Found") {
            console.log("No existe la dirección");
        } else {
            let arrayLinks = parse.arrayLinks(result, pathFile);
            if (options == "--validate") {
                document.newDocument(pathFile, arrayLinks);
                validate.validateLinks(arrayLinks).then((result) => {
                    return result
                }).then(function (result) {
                    document.addLinkToDocument(result);
                });
            } else if (options === "--stats") {
                let notUnique = stats.uniqueLinks(arrayLinks);
                document.newDocument(pathFile, arrayLinks, notUnique);
                document.addLinkToDocument(arrayLinks);
                document.addStats(arrayLinks, notUnique, 0);
            } else if (options === "--validate--stats") {
                document.newDocument(pathFile, arrayLinks);
                validate.validateLinks(arrayLinks).then((result) => {
                    return result
                }).then(function (result) {
                    document.addLinkToDocument(result);
                    let linksTrue = stats.statsLinks(result);
                    let notUnique = stats.uniqueLinks(result);
                    document.addStats(result, notUnique, linksTrue);
                });
            }
            // console.log(result);
        }
    })
}
mdLinks(pathFile);

//mdLinks("https://.com/@chriskimdevelop/web-scrape-with-node-js-and-cheerio-42a3123744f1");


//Search for links
//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;
//ajax request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//console.log (path.pathTrue("../README.md"));
//console.log (path.fileExist("../README.md"));
//console.log(path.fileValidationMd("../README.md"));
//console.log(path.isDir("../README.md"));
// let data = (parse.readingFile("../README.md", "utf8"));
// //console.log (data)
//let htmlFile= (parse.convertToHtml (data));
// //console.log (htmlFile);
//console.log (parse.arrayLinks(htmlFile));
//console.log(links);






// path.fileExist(pathFile).then((result) => {
        //     console.log('promise')
        //     if (result == true) {
        //         console.log("done!");
        //     } else {
        //         console.log(result);
        //     }
        // })
     //console.log(   path.fileExist2("C:/Users/Usuario Principal/Laboratoria/DataLoversFinal/README.md"));