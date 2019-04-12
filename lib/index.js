"use strict";
const path = require("./pathTrue");
//File system
var fs = require("fs");
//ajax request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
console.log (path.pathTrue("../README.md"));
console.log (path.fileExist("../README.md"));
console.log(path.fileValidationMd("../README.md"));
console.log(path.isDir("../README.md"));

   /*

//leer archivo grande
var fs = require('fs'),
    readline = require('readline');

var reader = readline.createInterface({
  input: fs.createReadStream('archivo-grande.txt')
});

reader.on('line', function (line) {
  console.log(line);
});
*/
//console.log(fileExists('C:\Users\Usuario Principal\Laboratoria\DataLoversFinal\README.md'));

