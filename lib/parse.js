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
       // console.log(link);
        cleanArrayLinks.push(link);
      //  console.log(link);
    
      }else{
        return false;
      }  
      console.log("array"+ cleanArrayLinks);
     });
 
     return(cleanArrayLinks);
    }
    
    
}