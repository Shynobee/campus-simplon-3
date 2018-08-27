/*jshint esversion : 6 */
const http = require("http");
const url = process.argv[2] || "http://google.fr";
// console.log(process.argv);
// return;
http.get(url, (response) => {
    // console.log(response);
    response.on("data", (data) => {
        console.log(data.toString());
    });

    response.on("error", (err) => {
        console.error("error http" + err);
    });

});
