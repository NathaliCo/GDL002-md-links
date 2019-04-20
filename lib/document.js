const fs= require("fs");


module.exports= {
    newDocument:function (pathFile, arrayLinks){
            fs.appendFile('mdLinks.txt', "Founded Links "+ "in "+ pathFile + '\r\n', (error)=>{
            if (error){
                throw error;
            }
            console.log ('El archivo ha sido creado exitosamente');
        });
        return 'El archivo ha sido creado exitosamente'
        },
        
    addLinkToDocument: function(arrayLinks){
        arrayLinks.forEach(link => {
        fs.appendFile('mdLinks.txt', 
        ('\r\n' +'\r\n'+"LINK: " + link.href + " TEXT: " +link.text +" FILE: "+ link.file +" STATS: "+ link.stats), (err) => {
            if (err) throw err;
          });
        });
        //console.log("validate2 links2" );
    return"DONE LINK";
        },

        addStats:function(arrayLinks, notUnique, linksTrue){
            fs.appendFile('mdLinks.txt', 
            ( " Total de Links "  + arrayLinks.length+ "Links únicos " +  (notUnique) + '\r\n'+ "Links activos "+ linksTrue), (err)=>{
                if (err) throw err;
            });
        }
};