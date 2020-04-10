const express = require('express')
const db = require('../data/db')

const port = process.env.PORT || 9970
const app = express()

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

app.get('/tasksWithUsers', async (req, res) => {
  try {
    const tasksWithUsers = await db.getTasksWithUsers()
    return res.status(200).json({ tasksWithUsers })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
