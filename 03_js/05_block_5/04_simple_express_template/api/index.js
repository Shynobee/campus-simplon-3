/* jshint esversion : 6 */

// /api/index.js

// ROUTAGE DE L'API
const api = function api(app) {

  const APIVersion = 1;

  const database = require(__dirname + "/../model")({
    password: "@mysql",
    database: "intro_sql"
  });

  // ROUTES DE l'API USER
  const userRouter = require("./user")(database.connection); // modulariser API user
  app.use(`/api/v${APIVersion}`, userRouter); // on préfixe les routes de l'API

  // ROUTES DE l'API COUNTRY
  // const countryRouter = require("./country")(database.connection);
  //. app.use(`/api/v${APIVersion}`, countryRouter);

  // ETC...


};
module.exports = api;
