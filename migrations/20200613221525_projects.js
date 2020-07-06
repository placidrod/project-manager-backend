const tableName = 'projects'

exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id                        varchar(255) primary key,
      title                     text,
      team_id                   varchar(255) not null,
      unique(title, team_id)
    )
  `)
}

exports.down = function (knex) {
  return knex.schema.dropTable(tableName)
}
