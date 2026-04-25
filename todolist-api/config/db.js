const mysql = require('mysql2/promise')

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todolist'
})

module.exports = conn