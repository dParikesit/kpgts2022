const {db} = require('../database/db');

function insert(data){
    return db('registration').insert(data)
}

function getAll(){
    return db('registration');
}

function getFiltered(colName, query){
    return db('registration').where(colName, query);
}

function findAndUpdate(colName, query, colNameToUpdate, val) {
    return db('registration').where(colName, query).update({ colNameToUpdate: val });
}

module.exports = {getAll, getFiltered, insert, findAndUpdate}
