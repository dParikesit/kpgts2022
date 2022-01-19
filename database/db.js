const session = require("express-session");
const path = require("path");
const KnexSessionStore = require("connect-session-knex")(session);

const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];

const knex = require("knex")(configuration);

const store = new KnexSessionStore({
  knex,
  tablename: "sessions", // optional. Defaults to 'sessions'
});

module.exports.store = store;
module.exports.db = knex;
