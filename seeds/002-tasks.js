const tableName = 'tasks'

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    // .then(function () {
    //   // Inserts seed entries
    //   return knex(tableName).insert([
    //     {
    //       id: 1,
    //       description: "julian's note",
    //       project_id: 1,
    //     },
    //     {
    //       id: 2,
    //       description: "nilima's diary",
    //       project_id: 2,
    //     },
    //   ])
    // })
}
