require('custom-env').env('testing')

const { query } = require('../../../test-index')

const sqlStatement = `DROP TABLE IF EXISTS tickets_table`

async function dropTicketsTable() {
    const res = await query(sqlStatement)

    console.log(`Log: tickets_table dropped`)
}

dropTicketsTable()
