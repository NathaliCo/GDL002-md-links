const path = require("./path");
var fs = require("fs");
let filesMd=[];

module.exports= {
    //Open dir and and find all .md files
    openDir:function(pathFile){
      return new Promise((resolve, reject) => {
      fs.readdir (pathFile, function(err, items) {
       items.forEach(file => {
        let fileMd=path.fileValidationMd(file);
        if(fileMd===true){
          filesMd.push(pathFile+"/"+file);
        }
       });
       resolve(filesMd);
    
      });
     
    })
    }
      
}