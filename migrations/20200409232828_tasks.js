const tableName = 'tasks'

exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id                        varchar(255) primary key,
      description               text,
      user_id                   varchar(255),
      project_id                varchar(255),
      phase_id                  varchar(255)
    )
  `)
}

exports.down = function (knex) {
  return knex.schema.dropTable(tableName)
}
