const fs= require("fs");


module.exports= {
    newDocument:function (pathFile, arrayLinks){
            fs.appendFile('mdLinks.txt',+'\r\n' + "Founded Links "+ "in "+ pathFile + '\r\n', (error)=>{
        });
        console.log ('El archivo ha sido creado exitosamente');
        return 'El archivo ha sido creado exitosamente'
        },
        
    addLinkToDocument: function(arrayLinks){
        arrayLinks.forEach(link => {
        fs.appendFile('mdLinks.txt', 
        ('\r\n' +"LINK: " + link.href + " TEXT: " +link.text +" FILE: "+ link.file +" STATS: "+ link.stats), (err) => {
          });
        });
        //console.log("validate2 links2" );
    return"DONE LINK";
        },

        addStats:function(arrayLinks, notUnique, linksTrue){
            fs.appendFile('mdLinks.txt', 
            ('\r\n' + " Total de Links "  + arrayLinks.length+ '\r\n' +"Links únicos " +  (notUnique) + '\r\n'+ "Links activos "+ linksTrue), (err)=>{
            });
            return "Done stats"
        }
};

//TODO: revisar funcionalidad por carpeta 
//FIXME: mdLinks.js --validate--stats y # de links encontrados.
