const fs= require("fs");


module.exports= {
    //Create a document
    newDocument:function (pathFile, arrayLinks){
        //Document name and "title"
            fs.appendFile('mdLinks.txt',+'\r\n'+ arrayLinks.length + " Found Links "+ "in "+ pathFile + '\r\n', (error)=>{
        });
        console.log ('File success');
        return 'File success'
        },
    //Add all Links to document
    addLinkToDocument: function(arrayLinks){
        arrayLinks.forEach(link => {
        //Print each link in a new line
        fs.appendFileSync('mdLinks.txt', 
        ('\r\n' +"LINK: " + link.href + " TEXT: " +link.text +" FILE: "+ link.file +" LINE: "+ link.line  +" AVAILABLE: "+ link.available), (err) => {
          });
         // console.log(link);
        });
    return"DONE LINK";
        },
        //Print stats in the document
        addStats:function(arrayLinks, notUnique, linksTrue){
            //Print stats in a new Line
            fs.appendFile('mdLinks.txt', 
            ('\r\n' + " Total Links "  + arrayLinks.length+ '\r\n' +"Links unique " +  (notUnique.length) + '\r\n'+ "Links available "+ linksTrue), (err)=>{
            });
            return "Done stats"
        }
};
