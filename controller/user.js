const db = require('../database/db');

function getOne(id){
    return db('user').where('id', id).first();
}

module.exports = {getOne}