const { query } = require('../../../test-index')

const sqlStatement = `INSERT INTO tickets_table (event_id, attendee_email) VALUES ($1, $2)`

async function bookTicket(info) {
    const result = await query(sqlStatement, [
        info.event_id,
        info.attendee_email
    ])
    console.log(`a new ticket reserved`)
    return result.rows
}

const ticketsData = {
    event_id: 1,
    attendee_email: 'michael@mail'
}

bookTicket(ticketsData)
