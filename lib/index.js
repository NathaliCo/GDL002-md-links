const path = require("./path");
const parse = require("./parse");
const validate = require("./validate");
const document = require("./document");
const stats = require("./stats");
const dir = require("./dir");

//File system
var fs = require("fs");
//Get the Parameters
let pathFile = process.argv[2];
let options = process.argv[3];



//Start
mdLinks={
mdLinks:function (pathFile, options) {
    let pathTrue = path.pathTrue(pathFile);
    //if the user enter a path
    if (pathTrue === true) {
        let urlPath = path.pathUrl(pathFile);
        //if path is an URL
        if (urlPath === true) {
            forUrl(pathFile, options);
        } else {
            //if path is a local file
            if (path.fileExist2(pathFile)) {
                let isDir = path.isDir(pathFile);
                //If path is a Dir
                if (isDir === true) {
                    console.log("It is a directory");
                    //Open the directory and search for .md files
                    dir.openDir(pathFile).then((result) => {
                        return result
                    }).then(function (result) {
                        //For each .md file do...
                        result.forEach(element => {
                            forEachFile(element, options);
                        });
                    })
                } else {
                    //Is a file
                    console.log("It is a File")
                    forEachFile(pathFile, options);
                }
            } else {
                console.log('The file doesn´t exist');
            }
        }
    }
}
//End
}

function forEachFile(pathFile, options) {
    //Read the file
    let data = parse.readingFile(pathFile, "utf8");
    //Convert the .md to HTML
    let htmlFile = parse.convertToHtml(data, pathFile);
    //Get all the links and save they in arrayLinks
    let arrayLinks = parse.arrayLinks(htmlFile, pathFile);
    //Create an empty Document
    document.newDocument(pathFile, arrayLinks);
    //If user enter --validate
    if (options == "--validate") {
        //Assigns true or false stats to links
        validate.validateLinks(arrayLinks).then((result) => {
            console.log(result);
            return result
        })
            // .then((result)=>{
            //     //Search the line in the file that contains each link and assign it to link.line
            //     parse.whatLine(result, pathFile).then((result)=>{
            //         return result
            //     })
            .then((result) => {
                //let allLinks=stats.uniqueLinks(result);
                //Add all links to the empty document
                document.addLinkToDocument(result);
            });
        //  });      
        //If the user enter --stats    
    } else if (options === "--stats") {
        //Search the repited links and get the unique ones
        let notUnique = stats.uniqueLinks(arrayLinks);
        //Add all the links to the empty document
        document.addLinkToDocument(arrayLinks);
        //Add the stats to the document
        document.addStats(arrayLinks, notUnique.length, 0);
        console.log(arrayLinks);
        console.log("Total links: " + arrayLinks.length + " Links unique: " + notUnique.length);
        //if the user enter validate and stats
    } else if (options === "--validate--stats") {
        //Assigns true or false stats to links
        validate.validateLinks(arrayLinks).then((result) => {
            return result
        }).then(function (result) {
            //Add all the links to the empty document
            document.addLinkToDocument(result);
            return result
        }).then((result) => {
            //Search the repited links and get the unique ones
            let notUnique = stats.uniqueLinks(result);
            //Get the links with a true stats
            let linksTrue = stats.statsLinks(result);
            //console.log (result);
            //Add the stats to the document
            document.addStats(result, notUnique, linksTrue);
            console.log(result);
            console.log("Total links: " + result.length + " Links unique: " + notUnique.length + " Links available: " + linksTrue);
        })
    } else {
        //Add all the links to the empty document
        document.addLinkToDocument(arrayLinks);
        console.log(arrayLinks);
    }
}


function forUrl(pathFile, options) {
    //Search the URL and find if it exist
    validate.validateUrl(pathFile).then((result) => {
        return result
    }).then((result) => {
        //If URL don´t exists
        if (result === false || result === "Not Found") {
            console.log("This URL doesn´t exist");
            //If URL exists
        } else {
            //Get all the links and save they in arrayLinks
            let arrayLinks = parse.arrayLinks(result, pathFile);
            //Search if the ancla is actuallly an URL
            let newArrayLinks = parse.anclaNotUrl(arrayLinks);
            //Create an empty Document
            document.newDocument(pathFile, newArrayLinks);
            //If user enter --validate
            if (options == "--validate") {
                //Assigns true or false stats to links
                validate.validateLinks(newArrayLinks).then((result) => {
                    return result
                }).then(function (result) {
                    //Add all links to the empty document
                    document.addLinkToDocument(result);
                    console.log(result);
                });
                //If the user enter --stats    
            } else if (options === "--stats") {
                //Search the repited links and get the unique ones
                let notUnique = stats.uniqueLinks(newArrayLinks);
                //Add all the links to the empty document              
                document.addLinkToDocument(newArrayLinks);
                //Add the stats to the document
                document.addStats(newArrayLinks, notUnique.length, 0);
                console.log(newArrayLinks);
                console.log("Total links: " + newArrayLinks.length + " Links true: " + notUnique.length);
            } else if (options === "--validate--stats") {
                //Assigns true or false stats to links
                validate.validateLinks(newArrayLinks).then((result) => {
                    return result
                }).then(function (result) {
                    //Add all the links to the empty document
                    document.addLinkToDocument(result);
                    return result
                }).then((result) => {
                    //Get the links with a true stats
                    let linksTrue = stats.statsLinks(result);
                    //Search the repited links and get the unique ones
                    let notUnique = stats.uniqueLinks(result);
                    //Add the stats to the document
                    document.addStats(result, notUnique.length, linksTrue);
                    console.log(result);
                    console.log("Total links: " + result.length + " Links unique: " + notUnique.length + " Links available: " + linksTrue)
                })
            } else {
                //Add all the links to the empty document
                document.addLinkToDocument(newArrayLinks);
                console.log(arrayLinks);
            }
            // console.log(result);
        }
    })
}
mdLinks.mdLinks( "./Readme.md");
module.exports= mdLinks;