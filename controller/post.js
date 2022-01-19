const { db } = require("../database/db");

function insert(data) {
  return db("post").insert(data);
}

function getAll() {
  return db("post");
}

function getOne(colName, query) {
  return db("post").where(colName, query);
}

function findAndUpdate(colName, query, colNameToUpdate, val) {
  return db("post").where(colName, query).update({ colNameToUpdate: val });
}

module.exports = { getAll, getOne, insert, findAndUpdate };
