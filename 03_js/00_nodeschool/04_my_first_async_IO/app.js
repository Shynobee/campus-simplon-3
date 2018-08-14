/* jshint esversion : 6 */

const fs = require("fs");
const path = process.argv[2];

const displayResult = function displayResult(lines) {
    console.log(lines);
};

const parseFile = function parseFile(err, data) {
    if (err) throw new Error("File reading failed...");
    displayResult(data.toString().split("\n").length - 1);
};

fs.readFile(path, parseFile);
