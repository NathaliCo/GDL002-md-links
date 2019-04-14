const path = require("../lib/path.js");
const parse = require ("../lib/parse.js");

describe('pathTrue',()=>{
  it('Should return "false" if the user didn´t enter a path' , ()=>{
    expect(path.pathTrue()).toBe(false);
  });
  it('Should be "true"if the user actually enter a path', ()=>{
    expect(path.pathTrue("../README.md")).toBe(true);
  });
});

describe('fileExist', ()=>{
  it ('Should be "true" if the file exist in local',()=>{
    path.fileExist("../README.md").then(result => {
      expect(result).toBe(true);
    })
  });

  it("Should return false when the file doesn't exist ..",()=>{
    path.fileExist("../READMmE.md").then(result => {
      expect(result).toBe(false);
  })
});
})

describe('fileValidationMd',()=>{
  it ('Should be "true" if the file is a .md file', ()=>{
    expect(path.fileValidationMd("../README.md")).toBe(true);
});
  it ('Should be "false" if the file isn´t a .md file', ()=>{
    expect(path.fileValidationMd("../README.txt")).toBe(false);
});
});

describe('isDir',()=>{
  it ('Should be "true" if the file is a directory', ()=>{
    expect(path.isDir("C:/Users/Usuario Principal/Laboratoria/DataLoversFinal")).toBe(true);
});
  it ('Should be "false" if the file isn´t a directory', ()=>{
    expect(path.isDir("../README.txt")).toBe(false);
});
});

describe('convertToHtml', ()=>{
  it ('Shoul be an html text', ()=> {
    expect(parse.convertToHtml(" Markdown Links Markdown is a tool for identifying and reporting links in a .md file that doesn´t work anymore. You can indetify all the links that are in your file with an .md extension, know if they are usable, and get a stats about that links, how many works well, how many links are in your files, and wich one are more that one time.  [Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional `README.md`).")).toBe('<p> Markdown Links Markdown is a tool for identifying and reporting links in a .md file that doesn´t work anymore. You can indetify all the links that are in your file with an .md extension, know if they are usable, and get a stats about that links, how many works well, how many links are in your files, and wich one are more that one time.  <a href=\"https://es.wikipedia.org/wiki/Markdown\">Markdown</a> es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional <code>README.md</code>).</p>');
  });
});

describe('arrayLinks',()=>{
  it ('Should be an object',()=>{
    expect(typeof parse.arrayLinks("<p> Markdown Links Markdown is a tool for identifying and reporting links in a .md file that doesn´t work anymore. You can indetify all the links that are in your file with an .md extension, know if they are usable, and get a stats about that links, how many works well, how many links are in your files, and wich one are more that one time.  <a href=\"https://es.wikipedia.org/wiki/Markdown\">Markdown</a> <a href=\"https://es.wikipedia.org/wiki/Markdown\">Markdown</a> es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional <code>README.md</code>).</p>", "path")).toEqual(Array);
  });
});

