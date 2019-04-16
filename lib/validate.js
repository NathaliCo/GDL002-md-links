
const parse = require("./parse");//ajax request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require("node-fetch");
// const url = "https://outlook.lidfadfdve.com/owa/";

module.exports={
validateLinks:function  (arrayLinks){
arrayLinks.forEach(url => {
    const linksTrue=parse.linkTrue(url).then((result)=>{
        if (result=="Not Found"){
            url.stats= false;
        }else if (result==false){
            url.stats= false;
        }else{
            url.stats= true;
        }

    }); 
});
console.log("DONE ARRAYS");
}
}
