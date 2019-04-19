
const parse = require("./parse");//ajax request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require("node-fetch");
// const url = "https://outlook.lidfadfdve.com/owa/";
const document = require("./document");
module.exports={
  
validateLinks:function  (arrayLinks){
   links=[];
   return new Promise((resolve,reject)=>{
arrayLinks.forEach(url => {
 parse.linkTrue(url).then((result)=>{
        if (result=="Not Found"){
            url.stats= false;
            links.push(url);
        }else if (result==false){
            url.stats= false;
            links.push(url);
        }else{
            url.stats= true;
            links.push(url);
        }
    })
});
})
}

}

