const tableName = 'users'

exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id                        varchar(255) primary key,
      username                  varchar(100),
      team_id                   varchar(255)
    )
  `)
}

exports.down = function (knex) {
  return knex.schema.dropTable(tableName)
}
