const tableName = 'phases'

exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id                        integer  primary key,
      title                     varchar(100)
    )
  `)
}

exports.down = function (knex) {
  return knex.schema.dropTable(tableName)
}
