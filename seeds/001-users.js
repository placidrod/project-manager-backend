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
          group_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          username: 'nilima',
          group_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          username: 'placid',
          group_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ])
    })
}
