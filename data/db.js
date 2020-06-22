const knex = require('knex')
const config = require('../knexfile.js')

const dao = knex(config.development)

const db = {
  getTasks: () => dao('tasks'),
  getUsers: () => dao('users'),
  getTeams: () => dao('teams'),
  getProjects: () => dao('projects'),
  getProjectsByTeamId: (teamId) => dao('projects').select().where({team_id: teamId}),
  getTasksWithUsers: () => dao.raw(`select t.*, u.username from tasks t join users u on u.id = t.user_id`),
  getPhases: () => dao('phases'),
  addTeam: (title) => dao('teams').insert({title}),
  addProject: (title, team_id) => dao('projects').insert({title, team_id}),
}

module.exports = db;
