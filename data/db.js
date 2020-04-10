const knex = require('knex');
const config = require('../knexfile.js')

const db = knex(config.development);

const getTasks = () => db('tasks');
const getUsers = () => db('users');

module.exports = {
  getTasks,
  getUsers
}
