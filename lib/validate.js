
const parse = require("./parse");//ajax request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require("node-fetch");
// const url = "https://outlook.lidfadfdve.com/owa/";

module.exports={
validateLinks:function  (arrayLinks){
arrayLinks.forEach(url => {
    const linksTrue=parse.linkTrue(url).then((result)=>{
        if (result===true){
            url.stats = true;
        }else{
            url.stats = false;
        }
        console.log(arrayLinks);
    }); 
});
}
}
