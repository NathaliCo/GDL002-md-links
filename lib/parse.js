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

module.exports = {
    //Read a file
    readingFile: function(path, language) {
        return fs.readFileSync(path, language, function(err, data) {
            return data;
        });
    },

    //Convert .md to HTML
    convertToHtml: function(data, path) {
        return htmlFile = markdown.toHTML(data);
    },

    //Convert the links in objects and put all in an array
    arrayLinks: function(htmlFile, pathFile) {

        let links = [];
        let eachLink = {};
        let $ = cheerio.load(htmlFile);
        $('a').each(function() {
            eachLink = {
                    href: $(this).attr('href'),
                    text: $(this).text(),
                    file: pathFile,

                },
                links.push(eachLink);
        });
        return (links);
    },

    linkTrue: function(url) {
        return fetch(url)
            .then(resp => resp.text())
            .then(link => {
                link = link
                return link;

            })
            .catch(error => {
                error = false
                return false;

            });
    },
    //Search if the ancla is actuallly an URL
    anclaNotUrl: function(arrayLinks) {
        let cleanArrayLinks = [];
        arrayLinks.forEach(link => {
            let actualLink = link.href;
            let ancla = actualLink.substring(0, 4);
            if (ancla === "http" || ancla === "www") {
                cleanArrayLinks.push(link);
            } else {
                return false;
            }
        });
        return (cleanArrayLinks);
    },

}