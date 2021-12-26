const db = require('../database/db')['db'];

function insert(data){
    return db('registration').insert(data)
}

function getAll(){
    return db('registration');
}

function getOne(colName, query){
    return db('registration').where(colName, query);
}

module.exports = {getAll, getOne, insert}
