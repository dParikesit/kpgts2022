const { default: knex } = require('knex');
const db = require('../database/db');

function getOne(id){
    return db('user').where('id', id).first();
}

function getOneEmail(email){
    return db('email').where('email', email).first();
}

function create(user) {
    return knex('user').insert(user, 'id').then(ids => {
        return ids[0];
    });
}

module.exports = {getOne, getOneEmail, create}
