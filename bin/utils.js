const fs = require('fs');
const path = require("path");

const ENCODING = 'utf-8';

function getPath(filePath) {
  return path.resolve(filePath)
}

function readText(filePath) {
  return fs.readFileSync(path.resolve(filePath), ENCODING);
}

function writeText(filePath, text) {
  fs.writeFileSync(`${path.resolve(filePath)}.diff`, text, ENCODING)
}

exports = module.exports = {
  getPath: getPath,
  readText: readText,
  writeText: writeText
}
