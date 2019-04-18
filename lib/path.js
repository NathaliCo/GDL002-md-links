//File system
var fs = require("fs");

module.exports = {

  //There is a path?
  pathTrue: function (filePath) {
    if (filePath != undefined) {
      console.log("Ingresaste un path");
      return true;
    } else {
      console.log("Ingresa un path");
      return false;
    }
  },

  //Local file Exists?
  fileExist: function (filePath) {
    console.log('fileExist', filePath);
    return new Promise((resolve, reject) => {
      fs.existsSync(filePath, function (exists) {
        if (exists) {
          console.log('yes');
          resolve(true);
        } else {
          console.log("no");
          resolve(false);
        }
      });
    })
  },
  
  fileExist2: fs.existsSync,
  //The file is .md?
  fileValidationMd: function (filePath) {
    extension = /md$/i;
    if (!extension.exec(filePath)) {
      console.log('that isn´t a .md file');
      return false;
    } else {
      console.log("that is a .md File!");
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
