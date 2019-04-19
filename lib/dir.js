const path = require("./path");
var fs = require("fs");
let filesMd=[];

module.exports= {

    openDir:function(pathFile){
      return new Promise((resolve, reject) => {
      fs.readdir (pathFile, function(err, items) {
       items.forEach(file => {
        let fileMd=path.fileValidationMd(file);
        if(fileMd===true){
            console.log("entro if")
          filesMd.push(pathFile+"/"+file);
        }
        
       });
       resolve(filesMd);
       //console.log(filesMd);
      });
     
    })
    }
      
}