const mysql = require('mysql');
function createDBConnection() {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'p0o9I*CT',
        database : 'casadocodigo'
    });
};
module.exports = function (){
    return  createDBConnection;
}