const tableName = 'tasks'

exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id                        integer  primary key,
      description               text,
      user_id                   integer,
      created_at                timestamp,
      updated_at                timestamp
    )
  `)
}

exports.down = function (knex) {
  return knex.schema.dropTable(tableName)
}
