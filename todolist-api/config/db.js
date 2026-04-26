const { Pool } = require('pg')

const conn = new Pool({
    connectionString: process.env.DB_URL,
    ssl: { rejectUnauthorized: false }
})

module.exports = conn