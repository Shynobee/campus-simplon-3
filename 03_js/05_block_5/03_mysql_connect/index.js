/* jshint esversion : 6 */
/*
  LECTURES UTILES D'ICI FIN OCTOBRE
    https://developer.mozilla.org/en-US/docs/Web/JavaScript
    https://www.youtube.com/watch?v=YIoUjR24SMw&list=PL2B82A06C79ECE66E
    https://laurent-audibert.developpez.com/Cours-UML/
    // HTTP STATUS CODES + VERBS
    https://restfulapi.net/http-status-codes/
    https://www.restapitutorial.com/lessons/httpmethods.html
    // PORTS
    https://fr.wikipedia.org/wiki/Liste_de_ports_logiciels
    https://www.youtube.com/watch?v=SWZ_4YBFBhs
    https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website
*/
const database = require("./database");
// database.test();
const express = require("express");
const app = express();
const path = require('path');
const port = 5555;
/** _______ */
/** _______ */
/** _______ */

app.use(express.json({ extended: false })); // to support JSON-encoded bodies
// app.use(express.urlencoded({ extended: false })); // to support URL-encoded bodies
// app.use(express.multipart({ extended: true }));       // NEED DEPENDENCIE -> to support JSON-encoded bodies

app.use(express.static(__dirname + '/public', {
  extensions: ['html']
}));

// CONFIGURATION D'UNE ROUTE ( http://localhost:${port}/user )
app.post('/user', (req, res) => {
  // UTILISATION DU MODELE
  database.createUser((err, info) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(info);

  }, req.body); // post datas ici ...
});

// CONFIGURATION D'UNE NOUVELLE ROUTE
app.get('/user/:id', (req, res) => {
    // UTILISATION DU MODELE
  database.getUser( (err, dataset) => {
    res.send(dataset[0]);
  }, req.params.id); // extrait l'id de la route demandée : )
});

// IDEM ...
app.get('/user', (req, res) => {
  database.getUser( (err, users) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(users);
  }, null);
});

// ETC ...
app.delete('/user', (req, res) => {
  // console.log("laaaa");
  // console.log(req.body.ids);
  // return;
  database.deleteUser((err, dataset) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(dataset);
  }, req.body.ids); // tableau d'ids ici ...
});

app.patch('/user', (req, res) => {
  database.editUser((err, dataset) => {
    if (err) return res.status(500).send(err);
    else return res.status(200).send(dataset);
  }, req.body); // tableau d'ids ici ...
});

// NOTRE APPLICATION EXPRESS ECOUTE SUR LE PORT HTTP DEFINIT EN DEBUT DE FICHIER
app.listen(port, () => {
  console.log('Example app listening on port ' + port);
});
