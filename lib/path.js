//File system
var fs = require("fs");

module.exports = {

  //Validate if there is a path?
  pathTrue: function (filePath) {
    if (filePath != undefined) {
      console.log("Starting...");
      return true;
    } else {
      console.log("Enter a path");
      return false;
    }
  },
  
  //Validate it path is url?
  pathUrl: function (filePath){
    validationUrl = filePath.substring(0,3);
if(validationUrl==="htt" || validationUrl==="www"){
  return true
} else{
  return false
}
  },
//Validate if the file exists
  fileExist2: fs.existsSync,

  //Validate if the file is .md?
  fileValidationMd: function (filePath) {
    extension = /md$/i;
    if (!extension.exec(filePath)) {
      return false;
    } else {
      return true;
    }
  },

  //Is a dir or file
  isDir: function (path) {
    try {
      var stat = fs.lstatSync(path);
      return stat.isDirectory();
    } catch (e) {
      return false;
    }
  }

  
}


  