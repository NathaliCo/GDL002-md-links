const path = require("../lib/path.js");


describe('pathTrue',()=>{
  it('should be "Function"',()=>{
    expect(typeof path.pathTrue).toBe("function");
  });
  it('Should be "false', ()=>{
    expect(path.pathTrue()).toBe(false);
  });
  it('Should be "true', ()=>{
    expect(path.pathTrue("../README.md")).toBe(true);
  });
});

describe('fileExist', ()=>{
  it ('Should be "true"',()=>{
    expect(path.fs.exists("../README.md")).toBe(true);
  });
});

describe('fileValidationMd',()=>{
  it ('Should be "true"', ()=>{
    expect(path.fileValidationMd("../README.md")).toBe(true);
});
  it ('Should be "false"', ()=>{
    expect(path.fileValidationMd("../README.txt")).toBe(false);
});
});

describe('isDir',()=>{
  it ('Should be "true"', ()=>{
    expect(path.isDir("C:/Users/Usuario Principal/Laboratoria/DataLoversFinal")).toBe(true);
});
  it ('Should be "false"', ()=>{
    expect(path.isDir("../README.txt")).toBe(false);
});
});