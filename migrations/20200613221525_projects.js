const tableName = 'projects'

exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id                        integer  primary key,
      title                     text,
      team_id                   integer,
      unique(title, team_id)
    )
  `)
}

exports.down = function (knex) {
  return knex.schema.dropTable(tableName)
}
