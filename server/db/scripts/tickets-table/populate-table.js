const { query } = require('../../../config/index')

const sqlStatement = `INSERT INTO tickets_table (event_id, attendee_id) VALUES ($1, $2)`

async function bookTicket(info) {
    const result = await query(sqlStatement, [info.event_id, info.attendee_id])
    console.log(`a new ticket reserved`)
    return result.rows
}

const ticketsData = {
    event_id: 1,
    attendee_id: 'michael'
}

bookTicket(ticketsData)
