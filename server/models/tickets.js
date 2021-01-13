const { query } = require('../db/index.js')

async function getAllTickets() {
    const result = await query('SELECT * FROM tickets_table ORDER BY id ASC')
    return result.rows
}

async function getAllTicketsByEventId(id) {
    const result = await query(
        'SELECT * FROM tickets_table WHERE event_id = $1 ORDER BY id ASC',
        [id]
    )
    return result.rows
}

async function getAllTicketsByAttendeeEmail(email) {
    const result = await query(
        `SELECT * FROM tickets_table
        INNER JOIN event_table ON event_id = event_table.id
        WHERE attendee_email = $1`,
        [email]
    )
    return result.rows
}

async function countAllTicketsAtEventId(id) {
    const result = await query(
        'SELECT COUNT(event_id) FROM tickets_table WHERE event_id = $1',
        [id]
    )
    return result.rows[0]
}

async function bookTicket(attendeeEmail, eventId) {
    const result = await query(
        `INSERT INTO tickets_table (event_id, attendee_email)
            SELECT $1, $2
        WHERE NOT EXISTS (
            SELECT 1 FROM tickets_table WHERE event_id = $1 AND attendee_email = $2
        )`,
        [eventId, attendeeEmail]
    )
    return result.rows[0]
}

async function deleteTicketsByEventId(eventId) {
    const result = await query(
        `DELETE FROM tickets_table WHERE event_id = $1 RETURNING event_id`,
        [eventId]
    )
    console.log(result)
    return result.rows[0].event_id
}
async function deleteTicketByAttendeeEmail(attendeeEmail, eventId) {
    await query(
        `DELETE FROM tickets_table WHERE event_id = $1 AND attendee_email = $2`,
        [eventId, attendeeEmail]
    )
}

module.exports = {
    getAllTickets,
    getAllTicketsByEventId,
    bookTicket,
    //deleteTicketById,
    countAllTicketsAtEventId,
    deleteTicketsByEventId,
    deleteTicketByAttendeeEmail,
    getAllTicketsByAttendeeEmail
    //getTicketHolderEmail
}
