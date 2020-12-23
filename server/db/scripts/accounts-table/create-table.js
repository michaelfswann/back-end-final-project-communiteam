const { query } = require('../../../config/index')

const sqlStatement = `CREATE TABLE IF NOT EXISTS accounts_table (
    uid TEXT PRIMARY KEY NOT NULL, email TEXT, is_volunteer BOOLEAN, created_at TIMESTAMP NOT NULL DEFAULT NOW()
    )`

async function createAccountsTable() {
    const res = await query(sqlStatement)

    console.log(`Log: created table called accounts_table`)
}

createAccountsTable()
