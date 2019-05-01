module.exports = {
    //Search the repited links and get the unique ones
    uniqueLinks: function (arrayLinks) {
        let originalArray = arrayLinks;
        let newArray = [];
        let lookupObject = {};

        for (let i in originalArray) {
            lookupObject[originalArray[i]["href"]] = originalArray[i];
        }

        for (i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
        return newArray;
    },
    //Get the links with a true stats
    statsLinks: function (arrayLinks) {
        let linksTrue = [];
        let linksFalse = [];
        arrayLinks.forEach(link => {
            if (link.available === true) {
                linksTrue.push(link);
            } else {
                linksFalse.push(link);
            }

        });
        return linksTrue.length
    }
}
