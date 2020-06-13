const tableName = 'teams'

exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id                        integer  primary key,
      title                     text unique
    )
  `)
}

exports.down = function (knex) {
  return knex.schema.dropTable(tableName)
}
