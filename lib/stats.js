module.exports= {
  
     uniqueLinks: function (arrayLinks){
        let originalArray=arrayLinks;
        let newArray = [];
         let lookupObject  = {};
    
         for(let i in originalArray) {
            lookupObject[originalArray[i]["href"]] = originalArray[i];
         }
    
         for(i in lookupObject) {
             newArray.push(lookupObject[i]);
         }
         console.log(newArray);
          return newArray.length;
     },

    statsLinks: function (arrayLinks){
        let linksTrue = [];
        let linksFalse = [];
        arrayLinks.forEach(link => {
            if (link.stats===true){
                linksTrue.push(link);
            } else {
                linksFalse.push(link);
            }
            
        });
        return linksTrue.length
    }
}
