const path = require("./path");
const parse = require("./parse");
const validate = require("./validate");
const document = require("./document");
const stats =require ("./stats");

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
                if(options==="--validate"){
                    console.log("1");
                    let notUnique = stats.uniqueLinks(arrayLinks);
                    document.newDocument(arrayLinks);
                    console.log("validate");
                    let links=validate.validateLinks(arrayLinks);
                }else if (options==="--stats"){
                    console.log("2");
                    let notUnique = stats.uniqueLinks(arrayLinks);  
                    document.newDocument(arrayLinks, notUnique);
                    document.addLinkToDocument(arrayLinks);
                    console.log(arrayLinks);
                }else if (options==="--validate--stats"){
                    console.log("3");
                    let notUnique = stats.uniqueLinks(arrayLinks);
                    let linksTrue=stats.statsLinks(arrayLinks);
                    document.newDocument(arrayLinks,notUnique,linksTrue);
                    let links=validate.validateLinks(arrayLinks); 
                }else
                {      
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

 let arrayLinks =[ { href: 'https://es.wikipedia.org/wiki/Markdown',
 text: 'Markdown',
 file: '../README.md',
 stats: true },
{ href: 'https://semver.org/',
 text: 'semver',
 file: '../README.md',
 stats: true },
{ href: 'https://en.wikipedia.org/wiki/Parsing',
 text: 'Parsing',
 file: '../README.md',
 stats: true },
{ href: 'https://es.wikipedia.org/wiki/Node.js',
 text: 'Node.js - Wikipedia',
 file: '../README.md',
 stats: true },
{ href: 'https://docs.npmjs.com/cli/install',
 text: 'docs oficiales de npm install acá',
 file: '../README.md',
 stats: true },
{ href: 'https://docs.npmjs.com/misc/scripts',
 text: 'npm-scripts',
 file: '../README.md',
 stats: true },
{ href: 'https://nodejs.org/en/',
 text: 'Node.js',
 file: '../README.md',
 stats: true },
{ href: 'https://nodejs.org/es/',
 text: 'Node.js',
 file: '../README.md',
 stats: true },
{ href: 'https://nodejs.org/es/about/',
 text: 'Acerca de Node.js - Documentación oficial',
 file: '../README.md',
 stats: true },
{ href: 'http://community.laboratoria.la/c/js',
 text: 'foro de la comunidad',
 file: '../README.md',
 stats: true },
{ href: 'https://nodejs.org/',
 text: 'Node.js',
 file: '../README.md',
 stats: true },
{ href: 'https://jestjs.io/',
 text: 'Jest',
 file: '../README.md',
 stats: true },
{ href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
 text: '¿Qué es Node.js y para qué sirve? - drauta.com',
 file: '../README.md',
 stats: false },
{ href:
  'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
 text:
  'Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?',
 file: '../README.md',
 stats: true },
{ href: 'https://docs.npmjs.com/getting-started/what-is-npm',
 text: 'NPM',
 file: '../README.md',
 stats: true },
{ href: 'https://nodejs.org/api/path.html',
 text: 'path',
 file: '../README.md',
 stats: true },
{ href:
  'https://docs.npmjs.com/getting-started/publishing-npm-packages',
 text: 'Crear módulos en Node.js',
 file: '../README.md',
 stats: true }]
//   let notUnique = stats.uniqueLinks(arrayLinks);
//   console.log(notUnique);