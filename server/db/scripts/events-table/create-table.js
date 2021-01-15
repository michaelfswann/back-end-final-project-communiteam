const { query } = require('../../index')

const sqlStatement = `CREATE TABLE IF NOT EXISTS events_table (
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

async function createEventsTable() {
    const res = await query(sqlStatement)

    console.log(`Log: created table called events_table`)
}

createEventsTable()
