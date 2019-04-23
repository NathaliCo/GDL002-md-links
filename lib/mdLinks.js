const path = require("./path");
const parse = require("./parse");
const validate = require("./validate");
const document = require("./document");
const stats = require("./stats");
const dir = require("./dir");

//File system
var fs = require("fs");
//Convert to HTML

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
    document.newDocument(pathFile, arrayLinks);
    if (options == "--validate") {
        validate.validateLinks(arrayLinks).then((result) => {
            return result
        }).then(function (result) {
            document.addLinkToDocument(result);
        });
    } else if (options === "--stats") {
        
        document.addLinkToDocument(arrayLinks).then ((arrayLinks)=>{
            let notUnique = stats.uniqueLinks(arrayLinks);
            document.addStats(arrayLinks, notUnique, 0);
        })
        
    } else if (options === "--validate--stats") {
        validate.validateLinks(arrayLinks).then((result) => {
            return result
        }).then(function (result) {
           // console.log(result);
            document.addLinkToDocument(result);
            return result
        }).then ((result)=>{
            let notUnique = stats.uniqueLinks(result);
            let linksTrue = stats.statsLinks(result);
            //console.log(notUnique);
            document.addStats(result, notUnique, linksTrue);
        })
    }else{
        document.newDocument(pathFile, arrayLinks);
        document.addLinkToDocument(arrayLinks);
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
           let newArrayLinks= parse.anclaNotUrl(arrayLinks);
          // console.log( newArrayLinks );
           //console.log(arrayLinks);
                    document.newDocument(pathFile, newArrayLinks);
            if (options == "--validate") {
                validate.validateLinks(newArrayLinks).then((result) => {
                    return result
                }).then(function (result) {
                    document.addLinkToDocument(result);
                   
                });
            } else if (options === "--stats") {
                document.addLinkToDocument(newArrayLinks).then((newArrayLinks)=>{
                    let notUnique = stats.uniqueLinks(newArrayLinks);
                    document.addStats(newArrayLinks, notUnique, 0);
                    
                })
            } else if (options === "--validate--stats") {
                validate.validateLinks(newArrayLinks).then((result) => {
                    return result
                }).then(function (result) {
                 // console.log(result);
                    document.addLinkToDocument(result);
                    return result
                }).then((result)=>{
                    let linksTrue = stats.statsLinks(result);
                    let notUnique = stats.uniqueLinks(result);
                    document.addStats(result, notUnique, linksTrue);
                })
            }else {
                document.newDocument(pathFile, newArrayLinks);
        document.addLinkToDocument(newArrayLinks);
            }
            // console.log(result);
        }
    })
}
mdLinks(pathFile);


