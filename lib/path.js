//File system
var fs = require("fs");
//ajax request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


 module.exports={ 

//Se ingresó un path
    pathTrue: function (filePath){
  if (filePath!=undefined){
    console.log("Ingresaste un path");
    return true;
  }else{
    console.log("Ingresa un path");
    return false;
  }
  },
  
//Local file Exists?
fileExist:function(filePath){
fs.existsSync(filePath,function(exists){ 
    if(exists){ 
     console.log('yes'); 
     return true
    }else{ 
     console.log("no"); 
     return false
    } 
}); 
},

//Valida que el archivo sea .md
fileValidationMd:function (filePath){
    extension = /md$/i;
    if(!extension.exec(filePath)){
        console.log('that isn´t a .md file');
        return false;
    }else{
        console.log ( "that is a .md File!");
    return true;
    }
},

//Es un directorio
 isDir: function(path) {
    try {
        var stat = fs.lstatSync(path);
        return stat.isDirectory();
    } catch (e) {
        // lstatSync throws an error if path doesn't exist
        return false;
    }
  }

  /*var fs = require('fs');
// Read a file
fs.readFile('contenido.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
  
*/
}