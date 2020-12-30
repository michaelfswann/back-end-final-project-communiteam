const { query } = require('../db/index.js')
const { getEventById } = require('../models/index')

async function getAllTickets() {
    const result = await query('SELECT * FROM tickets_table ORDER BY id ASC')
    return result.rows
}
async function countAllTicketsAtEventId(id) {
    const result = await query(
        'SELECT COUNT(event_id) FROM tickets_table WHERE event_id = $1',
        [id]
    )
    return result.rows
}

async function bookTicket(info) {
    const result = await query(
        `INSERT INTO tickets_table (event_id, attendee_id) VALUES ($1, $2)`,
        [info.event_id, info.attendee_id]
    )
    console.log(`a new ticket reserved`)

    const dateOfEvent = getEventById(info.event_id)
    console.log(dateOfEvent)
    return result.rows
}

async function deleteTicketById(id) {
    const result = await query(
        `DELETE FROM tickets_table WHERE id = $1 RETURNING id`,
        [id]
    )
    console.log(result)
    return result.rows[0]
}
async function deleteTicketByEventId(event_id) {
    const result = await query(
        `DELETE FROM tickets_table WHERE event_id = $1 RETURNING event_id`,
        [event_id]
    )
    console.log(result)
    return result.rows[0].event_id
}
async function deleteTicketByAttendeeId(attendee_id) {
    const result = await query(
        `DELETE FROM tickets_table WHERE attendee_id = $1 RETURNING attendee_id`,
        [attendee_id]
    )
    console.log(result)
    return result.rows[0].attendee_id
}

/////////

const sqlStatement = `
                        SELECT email
                        FROM accounts_table
                        INNER JOIN tickets_table ON uid = attendee_id 
                        WHERE event_id = $1
                    `

async function getTicketHolderEmail(eventid) {
    const result = await query(sqlStatement, [eventid])
    return result.rows
}

/////////////

module.exports = {
    getAllTickets,
    bookTicket,
    deleteTicketById,
    countAllTicketsAtEventId,
    deleteTicketByEventId,
    deleteTicketByAttendeeId,
    getTicketHolderEmail
}
