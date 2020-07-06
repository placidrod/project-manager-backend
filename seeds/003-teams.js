const tableName = 'teams'

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          id: '5a28b91c-31f3-4e08-9db2-65145b262bf3',
          title: 'Green',
        },
        {
          id: 'ae5907a4-33bb-4e3f-afa9-c6653f489aad',
          title: 'Blue',
        },
        {
          id: 'b0cbabb5-aea5-41bb-b5cc-0bef38a5a562',
          title: 'Red',
        },
      ])
    })
}
