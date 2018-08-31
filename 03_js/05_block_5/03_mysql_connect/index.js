/* jshint esversion : 6 */
/*
  LECTURES UTILES
    HTTP STATUS CODES
    https://restfulapi.net/http-status-codes/

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

app.post('/user', (req, res) => {
  console.log(req.body);
  database.createUser((err, dataset) => {
    res.send(dataset);
  }, req.body); // post datas ici ...
});

app.get('/user', (req, res) => {
  // console.log(req);
  console.log("@getuser");
  database.getUser( (err, dataset) => {
    res.send(dataset);
  });
});

app.delete('/user', (req, res) => {
  // console.log(req.body);
  database.deleteUser((err, dataset) => {
    console.log(dataset);
    res.send("FROM USER DELETE");
    // if (err) return res.status(500).send(err);
    // return res.status(200).send(dataset);
  }, req.body.ids); // tableau d'ids ici ...
});


app.listen(port, () => {
  console.log('Example app listening on port ' + port);
});
