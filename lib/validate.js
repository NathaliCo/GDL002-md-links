const parse = require("./parse"); //ajax request
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require("node-fetch");
// const url = "https://outlook.lidfadfdve.com/owa/";
const document = require("./document");
module.exports = {
    //Assigns true or false stats to links
    validateLinks: function(arrayLinks) {

        let newArrayLinks = [];
        arrayLinks.forEach((url) => {
            newArrayLinks.push(fetch(url)
                .then(res => {
                    if (res.status <= "200" || res.status <= "308") {
                        url.available = true;

                        return url;

                    } else if (res.status >= "400" && res.status <= "511") {
                        url.available = false + " status: " + res.status;

                        return url;

                    }
                }).catch((err) => {
                    url.available = false;

                    return url;
                })

            );
        });
        return Promise.all(newArrayLinks).then((values) => {

            return values;

        });

    },
    //Use linkTrue to search if URL exist, if it exist return the HTML 
    validateUrl: function(pathFile) {
        return new Promise((resolve, reject) => {
            let url = parse.linkTrue(pathFile);
            if (url == "Not Found") {
                resolve(false);
            } else if (url == false) {
                resolve(false);
            } else {
                resolve(url);
            }
        })
    }

}