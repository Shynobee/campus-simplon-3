/* jshint esversion: 6 */
const myFilter = require("./filter_by_ext");

// MAIN !!!
function doAction(err, data) {
    try {
        if (err) throw err;
        data.forEach(function(d) {
            console.log(d);
        });
    } catch(error) {
        console.error(error);
    }
}

myFilter.process(process.argv[2], process.argv[3], doAction);
