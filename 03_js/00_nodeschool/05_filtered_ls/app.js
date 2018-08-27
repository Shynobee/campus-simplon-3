/* jshint esversion: 6 */
// console.log("ola");
const fs = require("fs");
const path = require("path");
const filePath = process.argv[2];
const ext =  process.argv[3];

// fs.readdir(filePath, (err, data) => { // équivaut à ....
fs.readdir(filePath, function (err, data) {
    if (err) throw err;
    const tmp = data.filter(function(d) {
        // d c'est chacune des datas
        return path.extname(d) === "." + ext;
    });
    // console.log(tmp);
    tmp.forEach(function(d) {
        console.log(d);
    });
});
