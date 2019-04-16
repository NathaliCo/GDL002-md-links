const fs= require("fs");


module.exports= {
    newDocument:function (){
            fs.appendFile('mdLinks.txt', "Found Links", (error)=>{
            if (error){
                throw error;
            }
            console.log ('El archivo ha sido creado exitosamente');
        });
        },
        
    addLinkToDocument: function(arrayLinks){
        arrayLinks.forEach(link => {
        fs.appendFile('mdLinks.txt', ('\r\n' +'\r\n'+"LINK: " + link.href + " TEXT: " +link.text +" FILE: "+ link.file +" STATS: "+ link.stats), (err) => {
            if (err) throw err;
          });
        });
    console.log("DONE LINK");
        }
};