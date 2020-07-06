const tableName = 'phases'

exports.up = function (knex) {
  // TODO: add phase order
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id                        varchar(255) primary key,
      title                     varchar(100),
      phase_order               integer
    )
  `)
}

exports.down = function (knex) {
  return knex.schema.dropTable(tableName)
}
