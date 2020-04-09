# README

## knex commands
> note: use `npx` to run all `knex` commands

- create config: `knex init`
  - `knexfile.js` is created
  - rename the db name and other configs in the knexfile

- migrate: `knex migrate:latest`
- rollback: `knex rollback:latest`

- create seed example: `knex seed:make 001-users`
- seed: `knex seed:run`

## query db using sqlite3
- `sqlite3 <db name>`
- `.tables`
- `select * from <table name>`
- `.quit`
