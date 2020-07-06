const tableName = 'users'

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          id: '6e39b7bc-89a7-468c-bbc1-d0fa2a4c2225',
          username: 'julian',
          team_id: '5a28b91c-31f3-4e08-9db2-65145b262bf3',
        },
        {
          id: 'deb72535-edab-42bd-95a9-3722affa0af1',
          username: 'nilima',
          team_id: '5a28b91c-31f3-4e08-9db2-65145b262bf3',
        },
        {
          id: '1015b568-8ce3-48a3-a6f5-31001b19dedf',
          username: 'placid',
          team_id: '5a28b91c-31f3-4e08-9db2-65145b262bf3',
        },
      ])
    })
}
