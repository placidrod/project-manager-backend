const knex = require('knex')
const config = require('../knexfile.js')

const dao = knex(config.development)

const db = {
  getTasks: () => dao('tasks'),
  getUsers: () => dao('users'),
  getTeams: () => dao('teams'),
  getProjects: () => dao('projects'),
  getTasksWithUsers: () => dao.raw(`select t.*, u.username from tasks t join users u on u.id = t.user_id`),
  addTeam: (title) => dao('teams').insert({title})
}

module.exports = db;
