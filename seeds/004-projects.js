const tableName = 'projects'
const { v4: uuidv4 } = require('uuid')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          id: 'ba782ba0-a45b-4ee5-b9a7-be0aa04f30ca',
          title: "Project 1",
          team_id: '5a28b91c-31f3-4e08-9db2-65145b262bf3',
        },
        {
          id: '2b9bd508-2b29-4409-937c-47f8b80d835e',
          title: "Project 2",
          team_id: '5a28b91c-31f3-4e08-9db2-65145b262bf3',
        }
      ])
    })
}
