//File system
var fs = require("fs");
//ajax request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

 module.exports = { 

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
  return new Promise((resolve, reject) => {
    fs.existsSync(filePath,function(exists){ 
      if(exists) { 
        console.log('yes'); 
        resolve(true);
      } else { 
        console.log("no"); 
        resolve(false);
      } 
  });
  }) 
 
  //console.log('toReturn', toReturn);
  //return toReturn;
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
  },

// Read a file
readingFile: function(path, languaje){
fs.readFile(path, languaje, function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
}
 }