/* jshint esversion : 6 */

const fs = require("fs");
// const path = "./assets/test.txt";
const path = process.argv[2];

const buffer = fs.readFileSync(path); // waiting....
// console.log(buffer);
const str = buffer.toString();
const nbLines = str.split("\n").length - 1;

console.log(nbLines);
