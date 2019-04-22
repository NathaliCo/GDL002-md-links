//File system
var fs = require("fs");
//Convert to HTML
var markdown = require("markdown").markdown;
//search links
const cheerio = require('cheerio');
//validate fetch in node
const fetch = require("node-fetch");
// Read a file 
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
  arrayLinks: function (htmlFile, file) {
    let links = [];
    let eachLink = {};

    let $ = cheerio.load(htmlFile);
    $('a').each(function () {
      eachLink = { href: $(this).attr('href'),
                   text: $(this).text(),
                   file: file
                   //stats: "",
                  },
      links.push(eachLink);
      //console.log(eachLink);
    });
    //console.log(links);
    return (links);
  },

  linkTrue: function (url){
    return fetch(url).then(response => response)
    .then((data)=>{
      if (data.status=="404"){
        return false
      }
// console.log(data);
return data;
    }).catch(() => {
      return false
    })
  }
}