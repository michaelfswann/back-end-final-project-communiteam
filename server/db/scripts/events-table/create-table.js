const { query } = require('../../index')

const sqlStatement = `CREATE TABLE IF NOT EXISTS event_table (
    id SERIAL PRIMARY KEY,
    title TEXT,
    date DATE,
    time Time,
    speaker TEXT,
    banner TEXT,
    description TEXT,
    numtickets INT,
    location TEXT
    )`

async function createEventTable() {
    const res = await query(sqlStatement)

    console.log(`Log: created table called event_table`)
}

createEventTable()
