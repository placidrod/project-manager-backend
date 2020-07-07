const tableName = 'phases'

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          id: '08b1b6ef-cbee-4cc9-a745-50ad852ee081',
          title: 'Estimate',
          phase_order: 1
        },
        {
          id: 'f5e4641b-7317-4e03-b4b7-48b5d500e1b9',
          title: 'Todo',
          phase_order: 2
        },
        {
          id: '81a4181f-7da5-4026-829a-8b9a51c016ed',
          title: 'Doing',
          phase_order: 3
        },
        {
          id: '1165fa59-b7d3-4932-94bd-4d8b737c0781',
          title: 'Reviewing',
          phase_order: 4
        },
        {
          id: 'd2e27d97-10be-41c5-a073-4e9db1a487be',
          title: 'Deploy',
          phase_order: 5
        },
        {
          id: '4e0a6bda-6d94-42db-b5fd-d3f49b6693b8',
          title: 'Done',
          phase_order: 6
        }
      ])
    })
}
