const tableName = 'tasks';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {id: 1, description: 'julian\'s note', user_id: 1, created_at: new Date(), updated_at: new Date()},
        {id: 2, description: 'nilima\'s diary', user_id: 2, created_at: new Date(), updated_at: new Date()},
        {id: 3, description: 'placid\'s work', user_id: 3, created_at: new Date(), updated_at: new Date()}
      ]);
    });
};
