const tableName = 'users'

exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id                        integer  primary key,
      username                  varchar(100),
      team_id                   integer
    )
  `)
}

exports.down = function (knex) {
  return knex.schema.dropTable(tableName)
}
