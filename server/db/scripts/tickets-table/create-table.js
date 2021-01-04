const { query } = require('../../index')

const sqlStatement = `CREATE TABLE IF NOT EXISTS tickets_table (
    id SERIAL PRIMARY KEY,
    event_id INT NOT NULL,
    attendee_email TEXT NOT NULL,
    FOREIGN KEY (event_id) REFERENCES event_table(id) ON DELETE CASCADE
    )`

async function createTicketsTable() {
    const res = await query(sqlStatement)
    console.log(res)
    console.log(`Log: created table called tickets_table`)
}

createTicketsTable()
