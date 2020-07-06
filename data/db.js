const knex = require('knex')
const config = require('../knexfile.js')

const dao = knex(config.development)

const db = {
  getTasks: () => dao('tasks'),
  getTasksByProjectId: (projectId) =>
    dao('tasks').select().where({ project_id: projectId }),
  getUsers: () => dao('users'),
  getTeams: () => dao('teams'),
  getProjects: () => dao('projects'),
  getProjectsByTeamId: (teamId) =>
    dao('projects').select().where({ team_id: teamId }),
  getTasksWithUsers: () =>
    dao.raw(
      `select t.*, u.username from tasks t join users u on u.id = t.user_id`,
    ),
  getPhases: () => dao('phases'),
  addTeam: (title) => dao('teams').insert({ title }),
  addProject: (title, team_id) => dao('projects').insert({ title, team_id }),
  addTask: async (description, project_id) => {
    const insertedIdArr = await dao('tasks').insert({
      description,
      project_id,
      phase_id: 1,
    }) // TODO: get the first phase_id for the project and use that to insert new task
    const insertedRow = await dao('tasks')
      .select('id', 'description', 'phase_id', 'user_id')
      .where({ id: insertedIdArr[0] })
    return insertedRow[0]
  },
  updateTask: async (id, description, project_id, phase_id, user_id) => {
    await dao('tasks')
      .where({ id })
      .update({ description, project_id, phase_id, user_id })
  },
}

module.exports = db
