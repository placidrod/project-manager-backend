const express = require('express')
const bp = require('body-parser')
const cors = require('cors')
const db = require('../data/db')

const port = process.env.PORT || 9970
const app = express()
app.use(cors())
app.use(bp.json())

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await db.getTasks()
    return res.status(200).json({ tasks })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

app.get('/users', async (req, res) => {
  try {
    const users = await db.getUsers()
    return res.status(200).json({ users })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

app.get('/teams', async (req, res) => {
  try {
    const teams = await db.getTeams()
    return res.status(200).json({ teams })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

app.get('/projects', async (req, res) => {
  try {
    const projects = await db.getProjects()
    return res.status(200).json({ projects })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

// TODO: check naming convention
app.get('/projectsByTeamId', async (req, res) => {
  try {
    const { teamId } = req.query
    if (!teamId) {
      return res.status(400).json({ error: 'team id is missing in request' })
    }
    const projects = await db.getProjectsByTeamId(teamId)
    return res.status(200).json({ projects })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

app.get('/phases', async (req, res) => {
  try {
    const phases = await db.getPhases()
    return res.status(200).json({ phases })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

app.post('/teams', async (req, res) => {
  try {
    const title = req.body.title
    const insertedIdArr = await db.addTeam(title)
    return res.status(200).json({ team: { id: insertedIdArr[0], title } })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

app.post('/projects', async (req, res) => {
  try {
    const title = req.body.title
    if (!title) {
      return res.status(400).json({ error: 'title is missing in request' })
    }
    const team_id = req.body.team_id
    if (!team_id) {
      return res.status(400).json({ error: 'team_id is missing in request' })
    }
    const insertedIdArr = await db.addProject(title, team_id)
    return res
      .status(200)
      .json({ project: { id: insertedIdArr[0], title, team_id } })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

app.post('/tasks', async (req, res) => {
  try {
    const description = req.body.description
    if (!description) {
      return res.status(400).json({ error: 'description is missing in request' })
    }
    const project_id = req.body.project_id
    if (!project_id) {
      return res.status(400).json({ error: 'project_id is missing in request' })
    }
    const insertedIdArr = await db.addTask(description, project_id)
    return res
      .status(200)
      .json({ project: { id: insertedIdArr[0], description, project_id } })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

app.post('/error', async (req) => {
  console.log(req.body)
})

// app.get('/tasksWithUsers', async (req, res) => {
//   try {
//     const tasksWithUsers = await db.getTasksWithUsers()
//     return res.status(200).json({ tasksWithUsers })
//   } catch (err) {
//     console.log(err)
//     res.status(500).json({ error: err.message })
//   }
// })

app.listen(port, () => console.log(`Server listening on port ${port}`))
