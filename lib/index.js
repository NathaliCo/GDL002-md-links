const path = require("./path");
const parse = require("./parse");
//File system
var fs = require("fs");
//Convert to HTML


//Search for links
//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;
//ajax request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//console.log (path.pathTrue("../README.md"));
//console.log (path.fileExist("../README.md"));
//console.log(path.fileValidationMd("../README.md"));
//console.log(path.isDir("../README.md"));
let data = (parse.readingFile("../README.md", "utf8"));
//console.log (data)
let htmlFile= (parse.convertToHtml (data));
//console.log (htmlFile);
console.log (parse.arrayLinks(htmlFile));
//console.log(links);
