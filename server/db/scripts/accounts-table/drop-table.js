const { query } = require('../../index')

const sqlStatement = `DROP TABLE IF EXISTS accounts_table`

async function dropAccountsTable() {
    const res = await query(sqlStatement)

    console.log(`Log: accounts_table dropped`)
}

dropAccountsTable()
