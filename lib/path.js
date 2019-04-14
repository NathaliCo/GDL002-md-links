//File system
//File system
var fs = require("fs");

//Search for links



//ajax request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

 module.exports = { 

//There is a path?
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

//The file is .md?
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

//Is a a dir or file
 isDir: function(path) {
    try {
        var stat = fs.lstatSync(path);
        return stat.isDirectory();
    } catch (e) {
        // lstatSync throws an error if path doesn't exist
        return false;
    }
  }

}
