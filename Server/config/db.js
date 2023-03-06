const mysql = require('mysql')
const db = mysql.createConnection({
multipleStatements: true,
host: "localhost",
user: "mip",
password: "~F44_UbRpc",
database:"metalindexpro" 
})

module.exports = db;

