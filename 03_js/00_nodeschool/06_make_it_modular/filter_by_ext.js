/* jshint esversion: 6 */
const fs = require("fs");
const path = require("path");

function filterFilesExt(dirPath, ext, clbk) {

    fs.readdir(dirPath, function (err, data) {
        if (err) return clbk(err, null);
        const tmp = data.filter(function(d) {
            return path.extname(d) === "." + ext;
        });
        clbk(null, tmp);
    });
}
module.exports = filterFilesExt;
