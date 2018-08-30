/*jshint esversion :  6 */
const mysql  = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '@mysql',
  database : 'intro_sql'
});

connection.connect();

const end = () => connection.end();

const test = () => {
  const sql = 'SELECT 1 + 1 AS solution';
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
};

const createUser = (clbk, data) => {
  const q = "INSERT INTO user (name, lastname, email) VALUES (?, ?, ?)";
  const payload = [data.name, data.lastname, data.email];

  connection.query(q, payload, (err, res, cols) => {
    if (err) return clbk(err, null);
    return clbk(null, res);
  });
};

const deleteUser = (clbk, id) => {
  const q = "DELETE FROM user WHERE id = ?";
  connection.query(q, [id], function (err, res, cols) {
    if (err) return clbk(err, null);
    console.log("-------res------");
    console.log(res);
    return clbk(null, res);
  });
};

const getUser = (clbk, id) => {
  var sql;

  if (id && !isNaN(id)) {
    sql = "SELECT * FROM user WHERE id = ?";
  } else {
    sql = "SELECT * FROM user";
  }

  connection.query(sql, [id], (error, results, fields) => {
    if (error) return clbk(error, null);
    return clbk(null, results);
  });
};

module.exports = {
  test,
  getUser,
  createUser,
  deleteUser,
  end, // shortcut es6 => si la clé === valeur (ex: test: test OU end: end)
};
