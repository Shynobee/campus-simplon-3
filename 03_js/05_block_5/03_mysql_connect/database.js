/*jshint esversion :  6 */
const mysql  = require('mysql'); // on réucpère un driver de connexion de nodeJS à mySQL

// READ THE DOC !!!!!!!!!!!!!!!
// https://github.com/mysqljs/mysql

// remplacer par vos infos de connexion
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '@mysql',
  database : 'intro_sql'
});

connection.connect(); // le serveur node est connecté au serveur mysql (BDD)

const end = function end() {
  connection.end(); // on termine la connection à la BDD
};

const test = function test() {
  // fonction de tes pour vérifier la bonne connection
  const sql = 'SELECT 1 + 1 AS solution';
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
};

const createUser = function createUser(clbk, payload) {
  const q = "INSERT INTO user (name, lastname, email) VALUES (?, ?, ?)";
  const data = [payload.name, payload.lastname, payload.email];

  connection.query(q, data, (err, res, cols) => {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (err) return clbk(err, null);
    return clbk(null, res);
  });
};

const deleteUser = function deleteUser(clbk, ids) {
  // ci-dessous, la clause SQL IN permet de chercher dans un tableau de valeurs
  const q = "DELETE FROM user WHERE id IN (?)";
  // alternative => boucler sur ids et query chaque id ....
  connection.query(q, [ids], function (err, res, fields) {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (err) return clbk(res, null);
    return clbk(null, res);
  });
};

const editUser = function editUser(clbk, user) {
  const q = "UPDATE user SET name = ?, lastname = ?, email = ? WHERE id = ?";
  const payload = [user.name, user.lastname, user.email, user.id];
  connection.query(q, payload, function (err, res, fields) {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (err) return clbk(err, null);
    return clbk(null, res);
  });
};

const getUser = function getUser(clbk, id) {
  var sql;

  if (id) {
    sql = "SELECT * FROM user WHERE id = ?";
  } else {
    sql = "SELECT * FROM user";
  }

  connection.query(sql, [id], (error, results, fields) => {
    // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
    if (error) return clbk(error, null);
    return clbk(null, results);
  });
};

 // ci-dessous = shortcut es6 => si la clé === valeur (ex: test: test OU end: end)
 // les fonctions exportées composentn l'api publique de ce module
 // si ce module est require(), elles peuvent être appellée depuis l'extérieur (ex: index.js)
module.exports = {
  createUser,
  deleteUser,
  editUser,
  getUser,
  end,
  test
};
