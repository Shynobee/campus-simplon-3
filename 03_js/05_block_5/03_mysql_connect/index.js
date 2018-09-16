/* jshint esversion : 6 */

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
  database.createUser((err, info) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(info);
  }, req.body); // post datas ici ...
});

// CONFIGURATION D'UNE NOUVELLE ROUTE
app.get('/user/:id', (req, res) => {
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
