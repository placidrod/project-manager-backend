const tableName = 'users'

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          id: 1,
          username: 'julian',
          team_id: 1
        },
        {
          id: 2,
          username: 'nilima',
          team_id: 1
        },
        {
          id: 3,
          username: 'placid',
          team_id: 1
        },
      ])
    })
}
