const tableName = 'teams'

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          id: 1,
          title: 'Green',
        },
        {
          id: 2,
          title: 'Blue',
        },
        {
          id: 3,
          title: 'Red',
        },
      ])
    })
}
