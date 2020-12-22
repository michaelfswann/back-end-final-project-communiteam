const { query } = require('../../config/index')

const sqlStatement = `CREATE TABLE IF NOT EXISTS event_table (
    event_id SERIAL PRIMARY KEY, 
    event_name TEXT    
    )`

async function createEventTable() {
    const res = await query(sqlStatement)

    console.log(`Log: created table called event_table`)
}

createEventTable()
