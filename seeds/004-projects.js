const tableName = 'projects'

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          id: 1,
          title: "list projects for current team",
          team_id: 1,
        },
        {
          id: 2,
          title: "add project for current team",
          team_id: 1,
        }
      ])
    })
}
