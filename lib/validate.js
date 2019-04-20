
const parse = require("./parse");//ajax request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require("node-fetch");
// const url = "https://outlook.lidfadfdve.com/owa/";
const document = require("./document");
module.exports={
  validateLinks:function  (arrayLinks){
      return new Promise((resolve, reject)=>{
        arrayLinks.forEach(url => {
            result= parse.linkTrue(url);
            if (result=="Not Found"){
                //console.log("Not Found2");
                url.stats= false;
               
            }else if (result==false){
                //console.log("false");
                url.stats= false;
                
            }else{
               
               // console.log(true);
                url.stats= true;  
            }
           resolve (arrayLinks);
            });
            
      })
},


validateUrl: function(pathFile){
    return new Promise((resolve,reject)=>{
  let url = parse.linkTrue(pathFile);
  if (url=="Not Found"){
   resolve (false);
}else if (url==false){
    resolve (false);
}else{
    resolve (url);
}
})
}

}

