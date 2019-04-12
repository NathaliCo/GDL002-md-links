const path = require("./path");
//File system
var fs = require("fs");
//ajax request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
console.log (path.pathTrue("../README.md"));
console.log (path.fileExist("../README.md"));
console.log(path.fileValidationMd("../README.md"));
console.log(path.isDir("../README.md"));
console.log(path.readingFile("../README.md", "utf8"))

  

