//File system
var fs = require("fs");
//Convert to HTML
var markdown = require("markdown").markdown;
//search links
const cheerio = require('cheerio');
//validate fetch in node
const fetch = require("node-fetch");
// Read a line 
const readline = require('readline');
let arrayLines=[];
module.exports = {

  readingFile: function (path, languaje) {
    return fs.readFileSync(path, languaje, function (err, data) {
      return data;
    });
  },

  //Convert to 
  convertToHtml: function (data, path) {
    return htmlFile = markdown.toHTML(data);
  },

//object links in array
  arrayLinks: function (htmlFile, pathFile) {
    
    let links = [];
    let eachLink = {};
    let $ = cheerio.load(htmlFile);
    $('a').each(function () {
      eachLink = { href: $(this).attr('href'),
                   text: $(this).text(),
                   file: pathFile,

                  },
      links.push(eachLink);
    });
    return (links);
  },

  whatLine: function (arrayLinks, pathFile){
    return new Promise((resolve, reject) => {
    let myInterface = readline.createInterface({
      input: fs.createReadStream(pathFile)
    });
    arrayLinks.forEach((link) => { 
      let lineNo = 1;
      myInterface.on('line', function (line) {
        if (line.includes(link.href)){
          link.line=lineNo;
     
           arrayLines.push(link);
          resolve (arrayLines);
        }
        
        lineNo++;
      });
      });
  //console.log(arrayLines);
     });
  },

  linkTrue: function (url){
    return fetch(url)
       .then(resp=> resp.text())
       .then(link =>{ link=link
        return link;
         
       })
       .catch(error => { error=false
        return false;
        
       }); 
   },

   anclaNotUrl:function (arrayLinks){
     let cleanArrayLinks= [];
     arrayLinks.forEach(link => {
      let actualLink=link.href;
      let ancla =actualLink.substring(0,4);
      if (ancla==="http"||ancla==="www"){
        cleanArrayLinks.push(link);
      }else{
        return false;
      }  
 
     });
 
     return(cleanArrayLinks);
    },

}