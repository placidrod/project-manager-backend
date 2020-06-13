const express = require('express')
const db = require('../data/db')
const bp = require('body-parser')

const port = process.env.PORT || 9970
const app = express()
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

app.post('/team', async (req, res) => {
  try {
    const title = req.body.title
    await db.addTeam(title)
    return res.status(200).json({ title })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
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
