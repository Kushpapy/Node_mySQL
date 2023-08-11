const mysql2 = require("mysql2/promise");

const pool = mysql2.createPool({
    host:"localhost",
    database:"blog",
    user:"root",
    password: "Chealsea24!"
})

module.exports = pool;