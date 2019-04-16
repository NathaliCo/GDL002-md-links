const path = require("./path");
const parse = require("./parse");
const validate = require("./validate");
const document = require("./document");

//File system
var fs = require("fs");
//Convert to HTML

//let mdLinks = mdLinks;

let pathFile =process.argv[2];
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
        if(path.fileExist2(pathFile)) {
            console.log('done!');
            let isFile=path.isDir(pathFile);
            if (isFile===true){
                console.log("Es una carpeta");
            }else{
                console.log("es un archivo");
                let data = parse.readingFile(pathFile,"utf8");
                let htmlFile = parse.convertToHtml(data, pathFile);
                let arrayLinks= parse.arrayLinks (htmlFile, pathFile);
                if(options=="--validate"){
                    console.log("validate");
                validate.validateLinks(arrayLinks);
                document.newDocument(arrayLinks);
                document.addLinkToDocument(arrayLinks);
                }else{
                    document.newDocument(arrayLinks);
                    document.addLinkToDocument(arrayLinks);
                }
            }
        }else {
            console.log('El archivo no existe');
        }
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
