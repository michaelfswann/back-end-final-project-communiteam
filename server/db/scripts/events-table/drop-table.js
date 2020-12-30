const { query } = require('../../index')

const sqlStatement = `DROP TABLE IF EXISTS event_table`

async function dropEventTable() {
    const res = await query(sqlStatement)

    console.log(`Log: event_table dropped`)
}

dropEventTable()
