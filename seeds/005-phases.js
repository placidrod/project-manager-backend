const tableName = 'phases'

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          id: 1,
          title: 'Estimate',
        },
        {
          id: 2,
          title: 'Todo',
        },
        {
          id: 3,
          title: 'Doing',
        },
        {
          id: 4,
          title: 'Reviewing',
        },
        {
          id: 5,
          title: 'Deploy',
        },
        {
          id: 6,
          title: 'Done'
        }
      ])
    })
}
