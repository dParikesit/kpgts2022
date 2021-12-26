const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];

const db = require('knex')(configuration)

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
    },
});
const store = new KnexSessionStore({
    knex,
    tablename: 'sessions', // optional. Defaults to 'sessions'
});

module.exports = {db, store};