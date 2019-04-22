
const parse = require("./parse");//ajax request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require("node-fetch");
// const url = "https://outlook.lidfadfdve.com/owa/";
const document = require("./document");
module.exports = {
    validateLinks: function (arrayLinks) {
       
        return new Promise((resolve, reject) => {
            let newArrayLinks=[];
            arrayLinks.forEach((url) => {
                newArrayLinks.push(fetch(url)
                    .then(res => {
                        if (res.status <= "200" || res.status <="308") {
                            url.stats = true;
                            
                            return url;

                        } else if (res.status >= "400" && res .status <="511" ) {
                            url.stats = false;
                     
                            return url;
                            
                        }
                    }).catch((err) => {
                        url.stats = false;
                       
                        return url;
                    })
                        
                    );
                });
           Promise.all(newArrayLinks).then((values)=>{
               resolve(values);
         
        });
    });
    },


    validateUrl: function (pathFile) {
        return new Promise((resolve, reject) => {
            console.log("Validate URL");
            let url = parse.linkTrue(pathFile);
            if (url == "Not Found") {
                resolve(false);
            } else if (url == false) {
                resolve(false);
            } else {
                console.log("VALIDATE URL 2");
                resolve(url);
            }
        })
    }

}

