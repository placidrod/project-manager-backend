const knex = require('knex')
const config = require('../knexfile.js')
const { v4: uuidv4 } = require('uuid')

const dao =
  process.env.NODE_ENV === 'production'
    ? knex(config.production)
    : knex(config.development)

const db = {
  getTasks: () => dao('tasks'),

  getTaskById: (id) => dao('tasks').select().where({id}),

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

  getPhases: () => dao('phases').orderBy('phase_order'),

  addTeam: (title) => dao('teams').insert({ id: uuidv4(), title }),

  addProject: (title, team_id) =>
    dao('projects').insert({ id: uuidv4(), title, team_id }),

  addTask: async (description, user_id, project_id) => {
    const firstPhase = await dao('phases').where({ phase_order: 1 })
    // TODO: get the first phase_id for the project and use that to insert new task
    const newId = uuidv4()
    await dao('tasks').insert({
      id: newId,
      description,
      user_id,
      project_id,
      phase_id: firstPhase[0].id,
    })

    const insertedRow = await dao('tasks')
      .select('id', 'description', 'phase_id', 'user_id')
      .where({ id: newId })
    return insertedRow[0]
  },

  updateTask: async (id, description, project_id, phase_id, user_id) => {
    await dao('tasks')
      .where({ id })
      .update({ description, project_id, phase_id, user_id })
  },

  deleteTask: async (id) => {
    const deletedRowCount = await dao('tasks')
      .where({id})
      .delete()
    return deletedRowCount
  }
}

module.exports = db
