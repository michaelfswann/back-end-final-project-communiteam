const { Pool } = require('pg')

const testCredentials = {
    user: process.env.TEST_PGUSER,
    host: process.env.TEST_PGHOST,
    database: process.env.TEST_PGDATABASE,
    password: process.env.TEST_PGPASSWORD,
    port: process.env.TEST_PGPORT
}

const pool = new Pool({
    testCredentials,
    ssl: { rejectUnauthorized: false }
})

module.exports = {
    query: (sql, values, callback) => {
        return pool.query(sql, values, callback)
    }
}
