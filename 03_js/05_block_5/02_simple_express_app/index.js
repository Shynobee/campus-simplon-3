/* jshint esversion : 6 */
const express = require("express");
const app = express();
const path = require('path');
const port = 3333;
//définir un dossier pour fichiers statiques(html,css,js...)
app.use(express.static(__dirname + '/public', {
  extensions: ['html']
}));
// GET la route vide (/, la page d'accueil le + souvent)
app.get('/', function(req, res) {
    // express va chercher dans le dossier static
    // + associer les autres fichiers (ex css)
    // et les envoit au navigateur avec les bons types MIME
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname + '/about.html'));
});
app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname + '/contact.html'));
});
app.listen(port, function () {
  console.log(`server waiting @ http://localhost:${port}`);
});
