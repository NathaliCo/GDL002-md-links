const mdLinks=require('.lib/index.js');
let pathFile = process.argv[2];
let options = process.argv[3];
mdLinks.mdLinks.mdLinks(pathFile, options);