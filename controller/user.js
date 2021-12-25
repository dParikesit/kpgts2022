const db = require('../database/db');

function getOne(id){
    return db('user').where('id', id).first();
}

function getOneEmail(email){
    return db('user').where('email', email).first();
}

function create(user) {
    return db('user').insert(user, 'id').then(ids => {
        return ids[0];
    });
}

module.exports = {getOne, getOneEmail, create}
