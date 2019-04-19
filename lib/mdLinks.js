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
let options ='"' + process.argv[3] +'"';

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
        if (path.fileExist2(pathFile)) {
            console.log('done!');
            let isDir = path.isDir(pathFile);
            if (isDir === true) {
                console.log("Es una carpeta");
              dir.openDir("C:/Users/Usuario Principal/Laboratoria/GDL002-data-lovers").then((result)=>{
            return result  
            }).then(function(result){
                 result.forEach(element => {
                 forEachFile (element);
                 });
            })
            } else {
                forEachFile (pathFile); 
            }
        } else {
            console.log('El archivo no existe');
        }
    }
}



function forEachFile (pathFile) {
    console.log("es un archivo");
    let data = parse.readingFile(pathFile, "utf8");
    let htmlFile = parse.convertToHtml(data, pathFile);
    let arrayLinks = parse.arrayLinks(htmlFile, pathFile);
    if (options === "--validate") {
        let notUnique = stats.uniqueLinks(arrayLinks);
        document.newDocument(pathFile, arrayLinks );
        validate.validateLinks(arrayLinks).then  (()=>{
           return links;  
    }).then(()=>{
        document.addLinkToDocument(links);
    })   
    } else if (options === "--stats") {
        let notUnique = stats.uniqueLinks(arrayLinks);
        document.newDocument(pathFile, arrayLinks, notUnique);
        document.addLinkToDocument(arrayLinks);
        console.log(arrayLinks);
    } else if (options === "--validate--stats") {
        let notUnique = stats.uniqueLinks(arrayLinks);
        let linksTrue = stats.statsLinks(arrayLinks);
        document.newDocument(pathFile, arrayLinks, notUnique, linksTrue);
        let links = validate.validateLinks(arrayLinks);
    } else {
        document.newDocument(pathFile, arrayLinks);
        document.addLinkToDocument(arrayLinks);
    }
}
mdLinks(pathFile);


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