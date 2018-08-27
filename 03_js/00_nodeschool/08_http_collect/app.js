/*jshint esversion : 6 */
const http = require("http");
const url = process.argv[2] || "http://google.fr";

http.get(url, (response) => {
    var tmp = "";

    response.on("data", (data) => {
        // console.log(data.toString());
        tmp += data.toString();
    });

    response.on("end", (data) => {
        console.log(tmp.length);
        console.log(tmp);
    });

    response.on("error", (err) => {
        console.error("error http" + err);
    });

});
