const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./my_db.sqlite', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the my_db SQlite database.');
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
