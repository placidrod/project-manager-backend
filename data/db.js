const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

const getTasks = () => db('tasks');
const getUsers = () => db('users');
const getTasksWithUsers = () =>
  db.raw(
    `select t.*, u.username from tasks t join users u on u.id = t.user_id`
  );

module.exports = {
  getTasks,
  getUsers,
  getTasksWithUsers
};
