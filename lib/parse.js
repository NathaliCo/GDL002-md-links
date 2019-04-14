//File system
var fs = require("fs");
//Convert to HTML
var markdown = require( "markdown" ).markdown;
//search links
const cheerio = require('cheerio');

// Read a file 
module.exports = { 
readingFile: function(path, languaje){
    return fs.readFileSync(path, languaje, function(err, data) {
       if (err) {
         return console.log(err);
       }
       
       return data;
     });
   },
   
   getAllLinks: function(data){
      let link="<a href=";
      return (data.match(link));
    
   },
   
   
   //Convert to 
   convertToHtml: function(data, path){
    return htmlFile= markdown.toHTML(data);
   },


   arrayLinks: function(htmlFile, file){
        file = "path";
        let links = [];
        let eachLink={};

       function link (href,text,file){
           this.href=href; 
           this.text=text; 
           this.file=file;
        }

        let $ = cheerio.load(htmlFile);
        $('a').each( function () {
            eachLink = new link($(this).attr('href'), $(this).text(), file)   
            links.push (eachLink);
        //console.log(eachLink);
        });
        
        return(links);
        }
   /*
   //Select the links
   links: function (htmlFile){
    let links = htmlFile.document.getElementsByTagName("a");
     console.log (links);
   //  const dom = cheerio.load(htmlFile);
   //  console.log(dom.window.document.querySelector("a").); // "Hello world"
    }
    */
}