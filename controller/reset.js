const {db} = require('../database/db');

function getOne(token){
  return db('reset').where('token', token).first();
}

function insert(token, user_id){
  return db('reset').insert({token, user_id})
}

function remove(token){
  return db('reset').where({ 'token': token }).del()
}

module.exports = {getOne, insert, remove}