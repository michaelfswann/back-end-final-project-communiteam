const { query } = require('../../index')

const sqlStatement = `DROP TABLE IF EXISTS events_table`

async function dropEventsTable() {
    const res = await query(sqlStatement)

    console.log(`Log: events_table dropped`)
}

dropEventsTable()
