/* jshint esversion : 6 */
const express = require("express");
const app = express();
const path = require('path');
const port = 3333;

app.use(express.static(__dirname + '/public', {
  extensions: ['html']
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname + '/about.html'));
});
app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname + '/contact.html'));
});
app.listen(port, function () {
  console.log(`your server is waiting @ http://localhost:${port}`);
});

// res.sendFile(path.join(__dirname + '/index.html'));

/*

app.get('/contact', function(req, res) {
  res.send("je suis contact");
  // res.sendFile(path.join(__dirname + '/contact.html'));
});
*/
