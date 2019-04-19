module.exports= {
  
    uniqueLinks: function (arrayLinks){
    let unique = new Set(arrayLinks);
    let counter=0;
   unique.forEach(element => { counter++
    });
    let notUnique = (arrayLinks.length-counter);
    let uniques = (arrayLinks.length-notUnique);
    return notUnique;
    
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
