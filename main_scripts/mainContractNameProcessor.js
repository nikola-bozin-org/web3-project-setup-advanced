const path = require("path");
const fs = require("fs");
const getMainContractName = ()=>{
    const files = fs.readdirSync("./contracts/");
    const filePath = files[0];
    const fileNameWithExtension = path.parse(filePath).base;
    const fileName = fileNameWithExtension.substring(0,fileNameWithExtension.length-4);
    return fileName;
  }


module.exports ={
    getMainContractName,
}