const path = require("../lib/path.js");
const parse = require("../lib/parse.js");
const validate = require("../lib/validate.js");
const dir = require("../lib/dir.js");
const stats = require("../lib/stats.js");
const document = require ("../lib/document.js");
describe('pathTrue', () => {
  it('Should return "false" if the user didn´t enter a path', () => {
    expect(path.pathTrue()).toBe(false);
  });
  it('Should be "true" if the user actually enter a path', () => {
    expect(path.pathTrue("../README.md")).toBe(true);
  });
});

describe('fileExist', () => {
  it("Should return false when the file doesn't exist ..", done => {
    expect (path.fileExist2("../READMmE.md")).toBe(false);
    done();
  });
  it ("Should return true when the file exist...", ()=>{
    expect (path.fileExist2("C:/Users/Usuario Principal/Laboratoria/DataLoversFinal/README.md")).toBe(true);
  });
  it ("Should return false when the file exist...", ()=>{
    expect (path.fileExist2("C:/Users/Usuario Principal/Laboratoria/DataLoversFinal/REAADME.md")).toBe(false);
    });
})

describe('fileValidationMd', () => {
  it('Should be "true" if the file is a .md file', () => {
    expect(path.fileValidationMd("../README.md")).toBe(true);
  });
  it('Should be "false" if the file isn´t a .md file', () => {
    expect(path.fileValidationMd("../README.txt")).toBe(false);
  });
});

describe('isDir', () => {
  it('Should be "true" if the file is a directory', () => {
    expect(path.isDir("C:/Users/Usuario Principal/Laboratoria/DataLoversFinal")).toBe(true);
  });
  it('Should be "false" if the file isn´t a directory', () => {
    expect(path.isDir("../README.txt")).toBe(false);
  });
});

describe ('pathUrl',()=>{
  it ('Should be true if the file is a url', ()=>{
    expect(path.pathUrl("www.hotmail.com")).toBe(true);
  });
  it ('Should be false if the file isn´t a url', ()=>{
    expect(path.pathUrl(".../README.md")).toBe(false);
  });
});

describe('convertToHtml', () => {
  it('Should be an html text', () => {
    expect(parse.convertToHtml(" Markdown Links Markdown is a tool for identifying and reporting links in a .md file that doesn´t work anymore. You can indetify all the links that are in your file with an .md extension, know if they are usable, and get a stats about that links, how many works well, how many links are in your files, and wich one are more that one time.  [Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional `README.md`).")).toBe('<p> Markdown Links Markdown is a tool for identifying and reporting links in a .md file that doesn´t work anymore. You can indetify all the links that are in your file with an .md extension, know if they are usable, and get a stats about that links, how many works well, how many links are in your files, and wich one are more that one time.  <a href=\"https://es.wikipedia.org/wiki/Markdown\">Markdown</a> es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional <code>README.md</code>).</p>');
  });
});


 describe('readingFile', () => {
   it('Should open the file', () => {
    expect(parse.readingFile("C:/Users/Usuario Principal/Laboratoria/PruebasMd/prueba4.md", "utf8")).toBe("##Hello world");
   });
  
 })

describe('arrayLinks', () => {
  it('Should be an array', () => {
    expect(parse.arrayLinks("<p> Markdown Links Markdown is a tool for identifying and reporting links in a .md file that doesn´t work anymore. You can indetify all the links that are in your file with an .md extension, know if they are usable, and get a stats about that links, how many works well, how many links are in your files, and wich one are more that one time.  <a href=\"https://es.wikipedia.org/wiki/Markdown\">Markdown</a> <a href=\"https://es.wikipedia.org/wiki/Markdown\">Markdown</a> es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional <code>README.md</code>).</p>"))
    .toEqual([{"file": undefined, "href": "https://es.wikipedia.org/wiki/Markdown", "text": "Markdown"}, {"file": undefined, "href": "https://es.wikipedia.org/wiki/Markdown", "text": "Markdown"}]);
  });
});

describe('anclaNotUrl', ()=>{
  it('should be an array, should select only the anclas who has links', ()=>{
    expect(parse.anclaNotUrl(
    [{ href: '/es/profiles/luisgm76',
    text: 'luisgm76',
    file: 'https://developer.mozilla.org/es/docs/Web',
    stats: false },
  { href: 'https://github.com/md',
    text: 'GitHub',
    file: 'https://developer.mozilla.org/es/docs/Web',
    stats: true }])).toEqual([ { href: 'https://github.com/md',
    text: 'GitHub',
    file: 'https://developer.mozilla.org/es/docs/Web',
    stats: true }] );
  })
})
describe('linkTrue',()=>{
  it ('Should be false when the url doesn´t exist',done=>{
    parse.linkTrue("https://github.com/Nathalis/GDL002-md-links/Nathalis").then(result => {
      expect(result).toBe("Not Found");
      done();
  });
});
it ('Should be and HTML true when the url exist', done=>{
  parse.linkTrue("https://github.com/Nathalis/GDL002-md-links/").then(result => {
    expect(result).not.toBe("Not Found");
    done();
});
});
it ('Should be false when the url is wrong',done=>{
  parse.linkTrue("https://githffghjjjkkub.com/Nathalis/GDL002-md-links/").then(result => {
    expect(result).toBe(false);
    done();
});
});
})

describe('validateLinks',()=>{
  it ('Should be an array', done =>{
  return validate.validateLinks( [ { href:
      'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
     text: 'What exactly is Node.js? - freeCodeCamp',
     file: undefined },
   { href:
      'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
     text:
      'Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?',
     file: undefined },
 
   { href:
      'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
     text: 'Leer un archivo',
     file: undefined }
   ]).then(data =>{
     expect(data).toEqual([{"file": undefined, "href": "https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5", "stats": true, "text": "What exactly is Node.js? - freeCodeCamp"},
     {"file": undefined, "href": "http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175", "stats": true, "text": "Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?"}, {"file": undefined, "href": "https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback", "stats": true, "text": "Leer un archivo"}]);
     done();
    });
    
});
it ('Should be an array', done =>{
  return validate.validateLinks([{href: "https://github.com/Nathalis/GDL002-md-links/Nathalis", text: 'What exactly is Node.js? - freeCodeCamp', file: undefined },
{ href:
   'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
  text:
   'Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?',
  file: undefined }, { href: 'https://nohdgfhdfhdfghdejs.org/es/',
  text: 'Node.js',
  file:
  undefined
  }]).then(result =>{
     expect(result).toEqual([{"file": undefined, "href": "https://github.com/Nathalis/GDL002-md-links/Nathalis", "stats": false, "text": "What exactly is Node.js? - freeCodeCamp"}, {"file": undefined, "href": "http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175", "stats": true, "text": "Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?"},{ href: 'https://nohdgfhdfhdfghdejs.org/es/',
     text: 'Node.js',
     file:
      undefined,
     stats: false }]),
    done();
    });
});

})
describe ('validateUrl', ()=>{
  it ('Should be true if the url exist', done =>{
    validate.validateUrl("https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5").then(result=>{
      expect(result).not.toBe("Not found");
      done();
    });

});

  it ('Should be false if the url don´t exist', done =>{
    validate.validateUrl("https://medfgggggggium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5").then(result=>{
      expect(result).toBe(false);
      done();
    });
   
});
it ('Should be false if the url don´t exist', done =>{
  validate.validateUrl("https://github.com/Nathalis/GDL002-md-links/Nathalis").then(result=>{
    expect(result).toBe("Not Found");
    done();
  });
  
});
})
describe('linkTrue',()=>{
  it ('Should be an array of links ',done=>{
    dir.openDir("C:/Users/Usuario Principal/Laboratoria/PruebasMd").then(result => {
      expect(result).toEqual(["C:/Users/Usuario Principal/Laboratoria/PruebasMd/prueba1.md", "C:/Users/Usuario Principal/Laboratoria/PruebasMd/prueba2.md", "C:/Users/Usuario Principal/Laboratoria/PruebasMd/prueba3.md", "C:/Users/Usuario Principal/Laboratoria/PruebasMd/prueba4.md"]);
  done();
    });
});
})

describe('uniqueLinks',()=>{
  it ('Should be 3 links unique ',()=>{
    expect(stats.uniqueLinks([ { href:
      'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
     text: 'What exactly is Node.js? - freeCodeCamp',
     file: undefined, 
     stats: true },
     
   { href:
      'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
     text:
      'Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?',
     file: undefined, 
     stats: true },
 
   { href:
      'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
     text: 'Leer un archivo',
     file: undefined, 
     stats: true }
   ]).length).toEqual(3);
  });

  it ('Should be 2 links unique ',()=>{
    expect(stats.uniqueLinks([ { href:
      'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
     text: 'What exactly is Node.js? - freeCodeCamp',
     file: undefined, 
     stats: true },
     
   { href:
      'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
     text:
      'Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?',
     file: undefined, 
     stats: true },
 
   { href:
      'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
     text: 'Leer un archivo',
     file: undefined, 
     stats: true }
   ]).length).toEqual(2);
  });
})

describe('statsLinks',()=>{
  it ('Should be 2 links true ',()=>{
    expect(stats.statsLinks([ { href:
            'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
           text: 'What exactly is Node.js? - freeCodeCamp',
           file: undefined, 
           stats: false },
           
         { href:
            'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
           text:
            'Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?',
           file: undefined, 
           stats: true },
       
         { href:
            'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
           text: 'Leer un archivo',
           file: undefined, 
           stats: true }
         ])).toBe(2);
  });
})

describe('Create new document', () => {
  it('Should return new file', async ()=> {
    expect.assertions(1);
    const data= await document.newDocument("../README.md", '["1","2"]', "4", "5");
    expect(data).toEqual('File success');
  });
});

describe('addLinkToDocument', () => {
  it('Should return new addLink', async () => {
    expect.assertions(1);
  const data= await document.addLinkToDocument(["1","2"]);
  expect(data).toEqual('DONE LINK');
  });
 
});

describe('addStats', () => {
  it('Should return done stats', async () => {

  const data= await document.addStats(["1","2"], ["1","2"], "1");
  expect(data).toEqual('Done stats');
  });
  
});