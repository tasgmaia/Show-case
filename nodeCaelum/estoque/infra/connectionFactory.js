var mysql = require('mysql');

function createConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'p0o9I*CT',
    database: 'estoque'
  });
}

module.exports = function() {
  return createConnection;
}
