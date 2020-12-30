const { query } = require('../../index')

const sqlStatement = `CREATE TABLE IF NOT EXISTS tickets_table (
    id SERIAL PRIMARY KEY,
    event_id INT NOT NULL,
    attendee_id TEXT NOT NULL,
    FOREIGN KEY (event_id) REFERENCES event_table(id) ON UPDATE CASCADE,
    FOREIGN KEY (attendee_id) REFERENCES accounts_table(uid) ON UPDATE CASCADE
    )`

async function createTicketsTable() {
    const res = await query(sqlStatement)
    console.log(res)
    console.log(`Log: created table called tickets_table`)
}

createTicketsTable()
