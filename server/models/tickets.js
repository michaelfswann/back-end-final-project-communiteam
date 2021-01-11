const { query } = require('../db/index.js')

async function getAllTickets() {
    const result = await query('SELECT * FROM tickets_table ORDER BY id ASC')
    return result.rows
}

async function getTicketsByAttendeeEmail(email) {
    const result = await query(
        `SELECT * FROM tickets_table WHERE attendee_email = $1`,
        [email]
    )
    return result.rows
}

/*

async function deleteTicketById(id) {
    const result = await query(
        `DELETE FROM tickets_table WHERE id = $1 RETURNING id`,
        [id]
    )
    console.log(result)
    return result.rows[0]
}


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
 */

async function countAllTicketsAtEventId(id) {
    const result = await query(
        'SELECT COUNT(event_id) FROM tickets_table WHERE event_id = $1',
        [id]
    )
    return result.rows[0]
}

async function bookTicket(attendeeEmail, eventId) {
    const result = await query(
        `INSERT INTO tickets_table (event_id, attendee_email) VALUES ($1, $2) RETURNING id`,
        [eventId, attendeeEmail]
    )
    // console.log(result)
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
    console.log(`Event with id ${eventId} deleted.`)
}

module.exports = {
    getAllTickets,
    bookTicket,
    //deleteTicketById,
    countAllTicketsAtEventId,
    deleteTicketsByEventId,
    deleteTicketByAttendeeEmail,
    getTicketsByAttendeeEmail
    //getTicketHolderEmail
}
