const db = require('../database/db');

function getAll(){
    return db('registration');
}

function getOne(colName, query){
    return db('registration').where(colName, query);
}

module.exports = {getAll, getOne}
